import { ApiCall } from "./ApiCalls";
import axios from 'axios';
const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
const token = localStorage.getItem("token");
class NotesServices {

    createNew(data){

        return ApiCall(data, `${URL}addNotes?access_token=${token}`,"POST");
    }

    deleteNote(note) {
        return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", note, {
            headers: {
                'Authorization': token
            }
        })
    }

    archiveNote(data){
        return ApiCall(data,`${URL}archiveNotes?access_token=${token}`,"POST");
    }

    updateNote(data){
        return ApiCall(data, `${URL}updateNotes?access_token=${token}`, "POST");

    }
}
    
    

export default new NotesServices();