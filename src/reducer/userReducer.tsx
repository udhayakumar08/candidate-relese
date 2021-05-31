
const USER_LOGIN = "USER_LOGIN";
const GET_MOVIE = "GET_MOVIE";
const OTP_VERIFICATION = "OTP_VERIFICATION"
const SIGN_OUT = "SIGN_OUT"

const userStore = {
    Loading: true,
    isLogin: false,
    loggedUser: "",
    movies: [{}],
    user:{}


}

const userReducer = (state = userStore, action: any) => {

    switch (action.type) {
        case USER_LOGIN:
            console.log("user reducer is caller");
            return {
                ...state,
                loggedUser: action.payload,
                Loading: false
            }
        case OTP_VERIFICATION:
            return {
                ...state,
                isLogin: action.payload
            }
        case GET_MOVIE:
            return {
                movies: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                isLogin: action.payload
            }

        default:
            console.log("default of reducer is called");
            return state

    }
}

export default userReducer;