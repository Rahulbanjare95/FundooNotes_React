import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Component } from 'react';
import download from '../styles/download.jpg';
import "../styles/Navbar.css";

class Dashboard extends Component {

    render() {
        return (
            <Navbar variant="default" className="custom-nav-bar" >
                <Navbar.Brand><img
                    src={download}
                    alt="Imge"
                    className="custom-image"/><span className="custom-brand">FundooNotes</span></Navbar.Brand>
            </Navbar>

        )
    }
}

export default Dashboard;