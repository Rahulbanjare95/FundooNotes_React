import {ApiCall} from "./ApiCalls";

const URL = "http://fundoonotes.incubation.bridgelabz.com/api/";



class UserService {
    state ={};
    
    
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
}

export default new UserService();
