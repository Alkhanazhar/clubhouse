import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    user: null,
    otp: {
        phone: "",
        hash: ""
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setAuth: (state, action) => {
        // },
        setOtp: (state, action) => {
            state.otp.hash = action.payload.hash;
            state.otp.phone = action.payload.phone;
        }
    }
})
export const { setOtp } = authSlice.actions
export default authSlice.reducer