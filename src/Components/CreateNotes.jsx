import React from 'react';
import Card from 'react-bootstrap/Card'
import { Accordion, Button, } from 'react-bootstrap'
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

                </div>
            </div>
            
      
        </Card>
    );
    
}
