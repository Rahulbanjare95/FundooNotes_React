import React from 'react';
import '../styles/DrawerToggleButton.scss';
const drawerToggleButton = props =>(
    <button className = "toggle-button" onClick ={props.handleToggleClick}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default drawerToggleButton;