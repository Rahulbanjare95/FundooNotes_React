import React from 'react';
import Card from 'react-bootstrap/Card'
import { Accordion, Button, } from 'react-bootstrap'
import {VscPinned,VscSymbolColor} from 'react-icons/vsc'
import {MdAddAlert,MdMoreVert} from 'react-icons/md';
import {RiUserAddFill,RiInboxArchiveLine} from 'react-icons/ri'
import {BiImageAlt} from 'react-icons/bi'
import "../styles/CreateNote.scss"

export default function CreateNotes() {
    return (
        <Card className='createNotes'>
            <div className='inputFields'>
                <div className='titleField'>
                    <input
                        placeholder=' Title'
                        className='title' />
                       
                    <textarea
                        name="content"
                        placeholder=" Take a note..."
                        className='title'
                    />
                    <button className='pinIcon'><VscPinned className='pin' size='22px'></VscPinned> </button>     
                </div>
               
            </div>
            <div className='iconsOption'>
                <button className='buttons'><MdAddAlert ></MdAddAlert></button>
                <button className='buttons'><RiUserAddFill></RiUserAddFill></button>
                <button className='buttons'><VscSymbolColor></VscSymbolColor></button>
                <button className='buttons'><BiImageAlt></BiImageAlt></button>
                <button className='buttons'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                <button className='buttons'><MdMoreVert></MdMoreVert></button>

                <button className='closeButton'>Close</button>


                </div>
             
      
        </Card>
    );
    
}
