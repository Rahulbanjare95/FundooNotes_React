import {ApiCall} from "./apicall";

class UserService {
    signin(data){
        return ApiCall(data, `http://fundoonotes.incubation.bridgelabz.com/api/user/login`,"POST");
    }
    register(data){
        return ApiCall(data, `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`, "POST");
    }
    forgetPassword(data){
        return ApiCall(data, `http://fundoonotes.incubation.bridgelabz.com/api/user/reset`,"POST");
    }
    // resetPassword(url,data){
    //     return ApiCall(data, `http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${url.split("/")[2]}`,"POST");
    // }
}

export default new UserService();
