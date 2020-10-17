import React, { Component, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { VscSymbolColor } from 'react-icons/vsc'
import { MdAddAlert } from 'react-icons/md';
import { RiUserAddFill, RiInboxUnarchiveLine } from 'react-icons/ri';
import { BiImageAlt } from 'react-icons/bi'
import '../styles/CardIcons.scss'
import "../styles/CreateNote.scss"
import notesServices from '../services/NotesServices'
import { Dashboard } from '@material-ui/icons';
export default class Archive extends Component {
    state = {
        note: null, 
        isArchived:false,
        title:'',
        description:'', 
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getArchiveNotesList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ note: data.data.data });
        }).catch(error => console.log(error))
        ;
    } 
    unArchiveNote(data) {
        var noteArchived = { noteIdList:[data.id], isArchived:false};
        notesServices.archiveNote(noteArchived);
        this.componentDidMount();
    }
    
    render() {

        return (
            <>
          
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
                                        <button className='iconsCard'><MdAddAlert ></MdAddAlert></button>
                                        <button className='iconsCard'><RiUserAddFill></RiUserAddFill></button>
                                        <button className='iconsCard'><VscSymbolColor></VscSymbolColor></button>
                                        <button className='iconsCard'><BiImageAlt></BiImageAlt></button>
                                        <button className='iconsCard' onClick={() => this.unArchiveNote({id})}><RiInboxUnarchiveLine></RiInboxUnarchiveLine></button>
                                        
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
       </>
        )
    }
}