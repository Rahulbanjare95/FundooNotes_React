import React, { Component } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { VscSymbolColor } from 'react-icons/vsc'
import { BiTrashAlt } from 'react-icons/bi';
import { MdAddAlert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import '../styles/CreateNote.scss'
import '../styles/CardIcons.scss'

class CardIcons extends Component { 

    render() {
        return (
                <div className='iconsDiv'>
                    <button className='iconsCard'><MdAddAlert ></MdAddAlert></button>
                    <button className='iconsCard'><RiUserAddFill></RiUserAddFill></button>
                    <button className='iconsCard'><VscSymbolColor></VscSymbolColor></button>
                    <button className='iconsCard'><BiImageAlt></BiImageAlt></button>
                    <button className='iconsCard'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                    <button className='iconsCard'><BiTrashAlt></BiTrashAlt></button>
                </div>
                    )
    }
}
export default CardIcons;
