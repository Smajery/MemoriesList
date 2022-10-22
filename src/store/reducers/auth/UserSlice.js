import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action) {
          state.isAuth = action.payload
        },
    }
})

export default userSlice.reducer;