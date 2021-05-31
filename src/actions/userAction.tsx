import axios from 'axios'
import Store from '../store/store';




export const login = (userMail: any) => async (dispatch: any) => {
    console.log("action file is also triggered");

    let response = await axios.post('http://localhost:5000/api/user/login', { email: userMail })
    if (response.status == 200) {
        dispatch({
            type: "USER_LOGIN", payload: response.data
        })
    }
}

export const userRegister=(newUser:any)=>{
    let newUser_response=axios.post('http://localhost:5000/api/user/registration',newUser)
}



export const otpVerification = (userOtp:any,userEmail:any) => async (dispat: any) => {
    let response = await axios.post('http://localhost:5000/api/user/otpVerification',{email:userEmail,otp:userOtp})
    if(response.status==200){
        localStorage.setItem("token",response.data)
        dispat({type:"OTP_VERIFICATION",payload:true})
    }
}







// export const getAllMovies = () => {
//     console.log("gettingg all the movies");

//     axios.get('http://localhost:5000/visitor/movies').then(res => {
//         console.log(res.data)
//         return {
//             type: "GET_MOVIE",
//             payload: res.data
//         }
//     })

// }


export const signOut = () => {
    localStorage.clear()
    return {
        type: "SIGN_OUT",
        payload: false
    }

}












