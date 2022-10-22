import {userSlice} from "./UserSlice";

export const AuthActionCreator = {
    setIsAuth: (isAuth) => dispatch => {
        dispatch(userSlice.actions.setIsAuth(isAuth))
    },
    logIn: () => async dispatch => {
        try {
            dispatch(AuthActionCreator.setIsAuth(true))
            localStorage.setItem("auth", JSON.stringify(true))
        } catch (e) {
            console.log(e)
        }
    },
    logOut: () => async dispatch => {
        try {
            dispatch(AuthActionCreator.setIsAuth(false))
            localStorage.removeItem("auth")
        }catch (e) {
            console.log(e)
        }
    }
}