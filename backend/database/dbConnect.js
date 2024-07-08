import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to database at ")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}