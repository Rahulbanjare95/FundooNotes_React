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
import UpdateCard from './UpdateCard';
export default class GetNotes extends Component {
    state = {
        note: null,
        id: null,
        isDeleted: false,
        title:'',
        description:'',
        showModal:false,
        noteIdList:[],
      
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getNotesList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ note: data.data.data });
        }).catch(error => console.log(error))
        ;
    }
    selectCard(data){
        this.setState({noteIdList: [data.id],showModal:true });
       
    }

    openModal=()=>{
        this.setState((previousState) => {
            return{showModal: !previousState.showModal};
        });
    }
    closeModal = () => {
        this.setState({showModal: false});
    }

    deleteNote(data) {
        var noteData = { noteIdList: [data.id], isDeleted: true };
        notesServices.deleteNote(noteData);
        this.componentDidMount();
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
                            console.log('this is id', id);
                            return (
                                <>

                            <div className='note' onClick = {() => this.setState({showModal:true, id:data.id, title:data.title, description:data.description})}>
                                <h1>{data.title}</h1>
                                    <p>{data.description}</p>
                                    <div className='iconsDiv'>
                                        <button className='iconsCard'><MdAddAlert ></MdAddAlert></button>
                                        <button className='iconsCard'><RiUserAddFill></RiUserAddFill></button>
                                        <button className='iconsCard'><VscSymbolColor></VscSymbolColor></button>
                                        <button className='iconsCard'><BiImageAlt></BiImageAlt></button>
                                        <button className='iconsCard' onClick={() => this.archiveNote({id})}><RiInboxArchiveLine></RiInboxArchiveLine></button>
                                        <button className='iconsCard' onClick={() => this.deleteNote({ id })}><BiTrashAlt></BiTrashAlt></button>
                                    </div>
                                </div>
                                <div><UpdateCard id={id} title={this.state.title} description={this.state.description} show={this.state.showModal} close={this.closeModal } /></div>
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