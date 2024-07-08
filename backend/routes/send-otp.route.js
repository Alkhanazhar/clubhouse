import express from "express"
import crypto from "crypto"
import { Vonage } from '@vonage/server-sdk'
import { User } from "../model/user.model.js"
import { generateAccessToken, generateRefreshToken } from "../services/token.js"

const router = express.Router()
const vonage = new Vonage({
    apiKey: process.env.vonageApiKey,
    // apiKey: "a151b7ec",
    apiSecret: process.env.vonageApiSecret,
    // apiSecret: "16OiTrO2JzT3VhmL",
})

router.post("/send-otp", async (req, res) => {
    try {
        const { phone } = req.body
        console.log(phone)

        if (!phone) {
            res.status(404).json({ message: "Please enter a phone number field is empty" })
        }

        const otp = crypto.randomInt(1000, 9999)
        const ttl = 1000 * 60 * 2
        const expires = Date.now() + ttl;
        const hash = crypto.createHmac("sha256", process.env.hashSecret).update(otp.toString()).digest("hex")
        const data = hash + "." + expires
        const from = "Clubhouse"
        const to = phone
        const text = 'Clubhouse otp is ' + otp.toString()
        // vonage.sms.send({ to, from, text })
        //     .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        //     .catch(err => { console.log('There was an error sending the messages.'); console.error(err.message); });

        res.status(201).json({ message: "Hello from otp", otp: otp, phone: phone, hash: hash });
    } catch (error) {
        console.log('Message not sent successfully');
        console.log('error message => ' + error.message);

    }
})

router.post("/verify-otp", async (req, res) => {
    const { otp, hash, phone } = req.body
    if (!phone || !hash || !otp) {
        res.status(404).json({ message: "Please enter a All field" })
    }
    const [hashCode, expiresGiven] = hash.split(".")
    if (Date.now() > expiresGiven) {
        res.status(403).json({ message: "Timeout" })
    }
    const hashVerify = crypto.createHmac("sha256", process.env.hashSecret).update(otp.toString()).digest("hex")
    let user;
    let accessToken;
    let refreshToken;

    if (hashVerify !== hashCode) {
        res.status(401).json({ message: "otp not verified" })
    }
    try {
        user = await User.findOne({ phone })
        if (!user) {
            user = await User.create({ phone })
        }
    } catch (error) {
        console.log(error.message)
    }
    accessToken = generateAccessToken({ id: user._id, activated: false })
    refreshToken = generateRefreshToken({ id: user._id, activated: false })
    res.cookie("refreshToken", refreshToken, { maxAge: 24 * 60 * 60 * 1000 * 30, httpOnly: true })
    res.json({ accessToken: accessToken })

})
export default router