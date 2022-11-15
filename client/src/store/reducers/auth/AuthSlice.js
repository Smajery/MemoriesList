import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action) {
          state.isAuth = action.payload
        },
    }
})

export default authSlice.reducer;