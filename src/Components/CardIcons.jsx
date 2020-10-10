import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { VscPinned, VscSymbolColor } from 'react-icons/vsc'
import {BiTrashAlt} from 'react-icons/bi';
import { MdAddAlert, MdMoreVert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import '../styles/CreateNote.scss'
import '../styles/CardIcons.scss'

export default function CardIcons() {
    return (

        
            <div className='iconsDiv'>
                <button className='icons'><MdAddAlert ></MdAddAlert></button>
                <button className='icons'><RiUserAddFill></RiUserAddFill></button>
                <button className='icons'><VscSymbolColor></VscSymbolColor></button>
                <button className='icons'><BiImageAlt></BiImageAlt></button>
                <button className='icons'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                <button className='icons'><BiTrashAlt></BiTrashAlt></button>
            </div>  
        

    )
}
