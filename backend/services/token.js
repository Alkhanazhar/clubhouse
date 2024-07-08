import jwt from "jsonwebtoken"

export const generateAccessToken = async (payload) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: "2d" })
}

export const generateRefreshToken = async (payload) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: "1y" })
}