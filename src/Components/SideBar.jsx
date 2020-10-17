import React from 'react';
import "../styles/SideBar.scss";
import { Link } from 'react-router-dom'
import { BiBulb, BiArchiveIn, BiTrashAlt } from 'react-icons/bi';
import { BsPencil, BsBell } from 'react-icons/bs';

const sideBar = props => {
    return (
        <div>
            <nav className="side-drawer">
                <ul className="side-drawer-ul">
                    <li className="side-drawer-item">
                        <Link to='/dashboard/notes' className="side-drawer-link" activeClassName="active">  <BiBulb className="icons"></BiBulb>
                            <span className="side-drawer-text">Notes </span></Link>
                    </li>
                    <li><a href="/#" className="side-drawer-link">
                        <BsPencil className="icons"></BsPencil>
                        <span className="side-drawer-text">EditLabels</span> </a></li>
                    <li>
                        <a href="/#" className="side-drawer-link">
                            <BsBell className="icons"></BsBell>
                            <span className="side-drawer-text"> Reminders  </span></a></li>
                    <li>
                        <Link to='/dashboard/archive' className="side-drawer-link" activeClassName="active">  <BiArchiveIn className="icons"></BiArchiveIn>

                            <span className="side-drawer-text">Archive </span></Link>
                    </li>

                    <li>
                        <Link to='/dashboard/trash' className="side-drawer-link" activeClassName="active">  <BiTrashAlt className="icons"></BiTrashAlt>
                            <span className="side-drawer-text">Trash </span></Link>

                    </li>

                </ul>
            </nav >
        </div>

    );

};

export default sideBar;