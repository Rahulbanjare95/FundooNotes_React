import React, { Component, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { FaRegTrashAlt, FaTrashRestore} from 'react-icons/fa'
import '../styles/CardIcons.scss'
import "../styles/CreateNote.scss"
import notesServices from '../services/NotesServices'
export default class Archive extends Component {
    state = {
        note: null,
        isArchived: false,
        title: '',
        description: '',
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getTrashNotesList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ note: data.data.data });
        }).catch(error => console.log(error))
            ;
    }

    deleteForever(data) {
        var noteData = { noteIdList: [data.id]};
        notesServices.deleteForever(noteData);
        this.componentDidMount();
    }
    restoreNote(data){
        var restore = {noteIdList: [data.id], isDeleted: false }
        notesServices.deleteNote(restore);
        this.componentDidMount();
    } 

    render() {

        return (
            <div className='noteList'>
                {this.state.note ? (

                    <div>
                        {this.state.note.map((data, index) => {
                            const id = data.id;
                            console.log('this is id', id);
                            return (
                                <>
                                    <div className='note'>
                                        <h1>{data.title}</h1>
                                        <p>{data.description}</p>
                                        <div className='iconsDiv'>
                                        <button className='iconsCard' onClick={() => this.restoreNote({ id })}><FaTrashRestore></FaTrashRestore></button>
                                        <button className='iconsCard' onClick={() => this.deleteForever({ id })}><FaRegTrashAlt></FaRegTrashAlt></button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>)
                    :
                    (<div className='noteList'> <Spinner animation="border" variant="warning" /> </div>)
                }
            </div>
        )
    }
}