import React, { useState } from 'react';
import { Card, Dropdown} from 'react-bootstrap';
import { VscPinned, VscSymbolColor } from 'react-icons/vsc'
import { MdAddAlert, MdMoreVert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import "../styles/CreateNote.scss"
import NotesServices from "../services/NotesServices"


export default function CreateNotes() {
    const [titleFieldVisible, setTitleFieldVisible] = useState(false);
    const [note, setNote] = useState({ title: "", description: "" });
    const onChangeUser = event => {
        const {name, value} = event.target;
        // setNote({ ...note, [e.target.name]: e.target.value })
        setNote(prev => ({...prev, [name]: value}))
        console.log(note);
    }
    const showTitleField = () => {
        setTitleFieldVisible(!titleFieldVisible)
    }

    const hideTitleField = () => {
        setTitleFieldVisible(false)
    }
    const onSubmitSaveNote = (e) => {
        NotesServices.createNew(note).then((user) => {
            if(user.status === 200){

            }
            else{
                alert("Empty Note Cannot be added");
            }
        }

        ).catch((error) => {
            alert("Empty Note Cannot be added");
        });

        setNote({
            title: "", description: ""

        });

    };

    return (
        <Card className='createNotes'>
            {titleFieldVisible && (
                <div className="backdrop" onClick={hideTitleField} />
            )}
            <div className='inputFields'>

                <form onSubmit={onSubmitSaveNote} className='titleField'>

                    <div>

                        {titleFieldVisible && (<input
                            className='title'
                            placeholder="Title"
                            name='title'
                            value={note.title}
                            onChange={onChangeUser}
                            required
                        />)}
                        
                        <textarea
                            type='text'
                            placeholder=" Take a note..."
                            className='title'
                            name='description'
                            value={note.description}
                            onFocus={showTitleField}
                            onChange={onChangeUser}
                            required
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
