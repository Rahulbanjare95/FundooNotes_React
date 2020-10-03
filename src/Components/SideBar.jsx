import React from 'react';
import "../styles/SideBar.css"

const sideBar = props =>(
    <nav className="side-drawer">
        <ul>
            <li><a href="#">Notes </a></li>
            <li><a href="#">EditLabels </a></li>
            <li><a href="#">Reminders </a></li>
            <li><a href="#">Archive </a></li>
            <li><a href="#">Trash </a></li>
            
        </ul>
    </nav>    
);
export default sideBar;