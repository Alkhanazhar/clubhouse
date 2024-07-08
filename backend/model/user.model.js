import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    activated: { type: Boolean, default: false }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)