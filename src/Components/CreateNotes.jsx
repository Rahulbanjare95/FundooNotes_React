import React from 'react';
import Card from 'react-bootstrap/Card'
import { Accordion, Button, } from 'react-bootstrap'
import {VscPinned} from 'react-icons/vsc'
import "../styles/CreateNote.scss"

export default function CreateNotes() {
    return (
        <Card className='createNotes'>
            <div className='inputFields'>
                <div className='titleField'>
                    <input
                        placeholder='Title'
                        className='title' />
                       
                    <textarea
                        name="content"
                        placeholder="Take a note..."
                        className='title'
                    />
                    <button className='pinIcon'><VscPinned className='pin' size='22px'></VscPinned> </button>     
                </div>
               
            </div>
             
      
        </Card>
    );
    
}
