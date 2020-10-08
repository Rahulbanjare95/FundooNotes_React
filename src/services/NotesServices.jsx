import {ApiCall} from "./ApiCalls";
const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";

class NotesServices { 
      
    createNew(data){
        const token = localStorage.getItem("token");
        return ApiCall(data, `${URL}addNotes?access_token=${token}`,"POST");
    }
    
}
export default new NotesServices();