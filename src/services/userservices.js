import {ApiCall} from "./ApiCalls";

const URL = "http://fundoonotes.incubation.bridgelabz.com/api/";

class UserService {   
    signin(data){
        return ApiCall(data, `${URL}user/login`,"POST");
    }
    register(data){
        return ApiCall(data, `${URL}user/userSignUp`, "POST");
    }
    forgetPassword(data){
        return ApiCall (data, `${URL}/user/reset`,"POST");
    }
    resetPassword(location,data){
        return ApiCall(data, `${URL}/user/reset-password?access_token=${location.split("/")[2]}`,"POST");
    }
    logout(location){
        return ApiCall(location,`${URL}/user/reset-password?access_token=${location}`,"POST" );

    }
}
export default new UserService();
