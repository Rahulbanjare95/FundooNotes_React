import React, { Component, useEffe } from 'react';
import axios from 'axios';
import "../styles/SideBar.scss";
import { Link, NavLink } from 'react-router-dom'
import { BiBulb, BiArchiveIn, BiTrashAlt } from 'react-icons/bi';
import { BsPencil, BsBell } from 'react-icons/bs';
import { MdLabelOutline } from 'react-icons/md';


class SideBar extends Component {
    state = {
        label: [],
    }


    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/";
        const url = `${URL}getNoteLabelList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ label: data.data.details });
            console.log(data);
            console.log(this.state.label);
        }).catch(error => console.log(error));
    }

    render() {
        //    const { data } = this.state.label;
        return (<div>
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
                            <span className="side-drawer-text"> Reminders  </span></a>
                    </li>

                    <li>
                        <NavLink to='/dashboard/archive' className="side-drawer-link" activeClassName="active">  <BiArchiveIn className="icons"></BiArchiveIn>

                            <span className="side-drawer-text">Archive </span></NavLink>
                    </li>
                    {this.state.label.map((label) => {
                        console.log(label);
                        return (
                            <li>
                                <div className='label'>
                                    <NavLink to='' className="side-drawer-link" activeClassName="active">  <MdLabelOutline className="icons"></MdLabelOutline>
                                        <span className="side-drawer-text">{label.label} </span></NavLink>
                                </div>
                            </li>
                        );
                    })}

                    <li>
                        <Link to='/dashboard/trash' className="side-drawer-link" activeClassName="active">  <BiTrashAlt className="icons"></BiTrashAlt>
                            <span className="side-drawer-text">Trash </span></Link>

                    </li>

                </ul>

            </nav >
        </div>

        );
    }
}

// const sideBar = props => {
//     return (


// };

export default SideBar;