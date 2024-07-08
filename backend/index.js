import dotenv from "dotenv"
import express from "express"
import otpRoute from "./routes/send-otp.route.js"
import { connectDb } from "./database/dbConnect.js"
import cors from "cors"
const PORT = 8080 || process.env.PORT
const app = express()
dotenv.config()
connectDb()

app.use(cors())
app.use(express.json())
app.use(otpRoute)

app.listen(PORT, () => {
    console.log("listening on port ")
})