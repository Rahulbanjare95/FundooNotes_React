import React from "react";
import { Navbar, Button, Form, FormControl, Dropdown,} from 'react-bootstrap';
import { Component } from 'react';
import download from '../Assets/download.jpg';
import "../styles/Navbar.scss";
import { BsArrowClockwise, BsFillGearFill, BsPerson } from "react-icons/bs";
import DrawerToggleButton from "./DrawerToggleButton";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";
import CreateNotes from "./CreateNotes";
import GetNotes from "./GetNotes";
import Profile from './Profile';

class Dashboard extends Component {
    state = {
        sideDrawerOpen:false,
        onCLickCall:false,
        openProfile:false,

    };

    drawerToggleClickHandler = () =>{
        this.setState((previousState) => {
            return{sideDrawerOpen: !previousState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen:false});
    }
    showProfile = () =>{
        this.setState({openProfile:true});

    }

    render() {    

        let sideDrawer;
        let backDrop;
        if(this.state.sideDrawerOpen){
            sideDrawer = <SideBar/>;
            backDrop = <Backdrop  click = {this.backdropClickHandler}/>;
        }
        return (
            <>
                <Navbar variant="default" className="custom-nav-bar" >
                    <div>
                    <DrawerToggleButton  handleToggleClick={this.drawerToggleClickHandler}/>
                    {sideDrawer}
                    {backDrop}
                    </div>
                    <Navbar.Brand><img
                        src={download}
                        alt="Imge"
                        className="custom-image" /><span className="custom-brand">FundooNotes</span></Navbar.Brand>

                    <div >
                        <Form inline >
                            <FormControl type="text" placeholder="Search" className="searchBar" />
                            <div className='refresh'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <BsArrowClockwise size='20px'> </BsArrowClockwise>
                                </Button>
                            </div>
                            <div className='settings'>
                                <Dropdown>
                                    <Dropdown.Toggle className='btn-light btn-circle btn-sm' >
                                    <BsFillGearFill size='20px' ></BsFillGearFill>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Send feedback</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Help</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='profile'>
                                <Button className='btn-light btn-circle btn-sm'>
                                    <BsPerson size='20px' onClick={this.showProfile?<Profile/>: null}> </BsPerson>    
                                </Button> </div>
                        </Form>
                    </div>
                </Navbar>
                <div className='contents'>
                    <CreateNotes/>
                </div>
                <div className='contents'>
                    <GetNotes />
                </div>
               
            </>
        )
    }
}

export default Dashboard;