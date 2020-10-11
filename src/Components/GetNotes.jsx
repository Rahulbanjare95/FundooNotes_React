import React, { Component, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { VscSymbolColor } from 'react-icons/vsc'
import { BiTrashAlt } from 'react-icons/bi';
import { MdAddAlert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import '../styles/CardIcons.scss'
import "../styles/CreateNote.scss"
import notesServices from '../services/NotesServices'
export default class GetNotes extends Component {
    state = {
        note: null,
        id: null,
        isDeleted: false
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getNotesList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ note: data.data.data });
        }).catch(error => console.log(error));
    }

    deleteNote(data) {
        var noteData = { noteIdList: [data.id], isDeleted: true };
        notesServices.deleteNote(noteData);
    }
    archiveNote(data) {
        var noteArchived = { noteIdList:[data.id], isArchived:true};
        notesServices.archiveNote(noteArchived);
    }
    render() {
        return (
            <div className='noteList'>
                {this.state.note ? (
                    <div>

                        {this.state.note.filter((data) => !data.isDeleted && !data.isArchived).map((data, index) => {
                            const id = data.id;
                            return (

                                <div className='note' key={index}><h1>{data.title}</h1>
                                    <p>{data.description}</p>
                                    <p>{String(data.isDeleted)}</p>
                                    <div className='iconsDiv'>
                                        <button className='iconsCard'><MdAddAlert ></MdAddAlert></button>
                                        <button className='iconsCard'><RiUserAddFill></RiUserAddFill></button>
                                        <button className='iconsCard'><VscSymbolColor></VscSymbolColor></button>
                                        <button className='iconsCard'><BiImageAlt></BiImageAlt></button>
                                        <button className='iconsCard' onClick={() => this.archiveNote({id})}><RiInboxArchiveLine></RiInboxArchiveLine></button>
                                        <button className='iconsCard' onClick={() => this.deleteNote({ id })}><BiTrashAlt></BiTrashAlt></button>
                                    </div>
                                </div>)

                        })}
                    </div>)
                    :
                    (<div className='noteList'> <Spinner animation="border" variant="warning" /> </div>)
                }
            </div>
        )
    }
}