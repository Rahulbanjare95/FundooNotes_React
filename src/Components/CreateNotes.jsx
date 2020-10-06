import React from 'react';
import Card from 'react-bootstrap/Card'
import { Accordion, Button,} from 'react-bootstrap'
import "../styles/CreateNote.scss"

export default function CreateNotes() {
    return (
        <div className='createNotes' >
            <Accordion defaultActiveKey="0" className='inputs'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                           <input type="text" className='inputText'placeholder='Title' />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><input type="text" /></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    )
}
