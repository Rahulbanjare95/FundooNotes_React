import React from 'react';
import "../styles/SideBar.css";
import { BiBulb, BiArchiveIn ,BiTrashAlt} from 'react-icons/bi';
import { BsPencil,  BsBell} from 'react-icons/bs';


const sideBar = props => {

    return (
        <nav className="side-drawer">
            <ul className="side-drawer-ul">
                <li className="side-drawer-item">
                    <a href="#" className="side-drawer-link">
                        <BiBulb className="icons"></BiBulb>
                        <span className="side-drawer-text">Notes</span></a></li>
                <li><a href="#" className="side-drawer-link">
                    <BsPencil className="icons"></BsPencil>
                    <span className="side-drawer-text">EditLabels</span> </a></li>
                <li>
                    <a href="#" className="side-drawer-link">
                        <BsBell className="icons"></BsBell>
                        <span className="side-drawer-text"> Reminders  </span></a></li>
                <li>
                    <a href="#" className="side-drawer-link">
                        <BiArchiveIn className="icons"></BiArchiveIn>
                        <span className="side-drawer-text">Archive </span></a></li>
                <li><a href="#" className="side-drawer-link"><BiTrashAlt className="icons"></BiTrashAlt>
                    <span className="side-drawer-text">Trash </span></a></li>

            </ul>
        </nav>

    );

};

export default sideBar;