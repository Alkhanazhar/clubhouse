import { configureStore } from '@reduxjs/toolkit'
import auth from "./slice/authSlice.js"

export default configureStore({
    reducer: {
        auth
    },
})