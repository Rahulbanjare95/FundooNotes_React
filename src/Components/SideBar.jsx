import React from 'react';
import "../styles/SideBar.css";
import { BiBulb } from 'react-icons/bi';
import { BsPencil, BsFillBellFill, BsFillArchiveFill, BsFillTrashFill } from 'react-icons/bs';

const sideBar = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul className="side-drawer-ul">
                <li className="side-drawer-item">
                    <a href="#" className="side-drawer-link">
                        <BiBulb className="icons"></BiBulb>
                        <span className="side-drawer-text">Notes</span></a></li>
                <li><a href="#">
                    <BsPencil className="icons"></BsPencil>
                    <span className="side-drawer-text">EditLabels</span> </a></li>
                <li>
                    <a href="#">
                        <BsFillBellFill className="icons"></BsFillBellFill>
                        <span className="side-drawer-text"> Reminders  </span></a></li>
                <li>
                    <a href="#">
                        <BsFillArchiveFill className="icons"></BsFillArchiveFill>
                        <span className="side-drawer-text">Archive </span></a></li>
                <li><a href="#"><BsFillTrashFill className="icons"></BsFillTrashFill>
                    <span className="side-drawer-text">Trash </span></a></li>

            </ul>
        </nav>

    );

};

export default sideBar;