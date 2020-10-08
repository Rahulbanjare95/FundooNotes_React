import React, { useState } from 'react';
import {Card, Dropdown} from 'react-bootstrap';
import { VscPinned, VscSymbolColor } from 'react-icons/vsc'
import { MdAddAlert, MdMoreVert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import "../styles/CreateNote.scss"
import NotesServices from "../services/NotesServices"
import { CodeSharp } from '@material-ui/icons';

export default function CreateNotes() {
    const [titleFieldVisible, setTitleFieldVisible] = useState(false);
    const [note, setNote] = useState({ title: "", description: "" });
    const onChangeUser = (e) => { 
        setNote({ ...note, [e.target.name]: e.target.value })
        console.log(note);
    }
    const showTitleField = () => {
        setTitleFieldVisible(true)
    }

    const hideTitleField = () => {
        setTitleFieldVisible(false)
    }
    const onSubmitSaveNote = (e) => {
        NotesServices.createNew(note);
        e.preventDefault();
        console.log(note);
    };

    return (
        <Card className='createNotes'>
            {titleFieldVisible && (
                        <div className="backdrop" onClick={hideTitleField} />
                    )}
                <div className='inputFields'>
               
                <form  onSubmit={onSubmitSaveNote}  className='titleField'>
                   
                    <div>
                        
                        {titleFieldVisible && (<span   
                            onClick={showTitleField}
                        />)}
                        <input
                            type='text'
                            placeholder=' Title'
                            className='title'
                            name='title'
                            value={note.title}
                            onChange={onChangeUser}
                            
                        />
                        <textarea
                            type='text'
                            placeholder=" Take a note..."
                            rows={titleFieldVisible ? "3" : "1"}
                            className='title'
                            name='description'
                            value={note.description}
                            onFocus={showTitleField}
                            onChange={onChangeUser}
                        />
                        <button className='pinIcon'><VscPinned className='pin' size='22px'></VscPinned> </button>
                        {titleFieldVisible && (< div className='iconsOption'>
                            <button className='buttons'><MdAddAlert ></MdAddAlert></button>
                            <button className='buttons'><RiUserAddFill></RiUserAddFill></button>
                            <button className='buttons'><VscSymbolColor></VscSymbolColor></button>
                            <button className='buttons'><BiImageAlt></BiImageAlt></button>
                            <button className='buttons'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                            <button className='buttons'>
                            <Dropdown>
                                    <Dropdown.Toggle className='btn-light buttons' >
                                    <MdMoreVert></MdMoreVert>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Add laber</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Add Drawing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Show Checkbox</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </button>
                            <button className='closeButton' type="submit">Close</button>
                        </div>)}
                      
                    </div>
                    </form>
                </div>
          
        </Card>
    );

}
