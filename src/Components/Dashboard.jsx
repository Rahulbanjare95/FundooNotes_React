import React from "react";
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { Component } from 'react';
import download from '../styles/download.jpg';
import "../styles/Navbar.css";
import { BsArrowClockwise, BsFillGearFill, BsPerson } from "react-icons/bs";
import SettingsDashboard from './settingsDashboard.jsx';
class Dashboard extends Component {

    render() {
        return (
            <Navbar variant="default" className="custom-nav-bar" >
                <Navbar.Brand><img
                    src={download}
                    alt="Imge"
                    className="custom-image" /><span className="custom-brand">FundooNotes</span></Navbar.Brand>

                <div >
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="searchBar" />
                        <div className='refresh'>
                            <Button className='btn-light btn-circle btn-sm'>
                                <BsArrowClockwise size='27px'> </BsArrowClockwise>
                            </Button>
                        </div>
                        <div className='settings'>
                            <Button className='btn-light btn-circle btn-sm' onClick={SettingsDashboard}>
                                <BsFillGearFill size='27px'></BsFillGearFill>
                            </Button> </div>
                        <div className='profile'>
                            <Button className='btn-light btn-circle btn-sm'>
                                <BsPerson size='27px'></BsPerson>
                            </Button> </div>
                    </Form>
                </div>
            </Navbar>

        )
    }
}

export default Dashboard;