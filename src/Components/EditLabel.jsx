import React, { Component } from 'react';
import { Modal, ModalDialog } from 'react-bootstrap';
import labelServices from '../services/LabelServices';
import axios from 'axios';
import { IoMdAdd } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im'
import {MdDelete} from 'react-icons/md';
import '../styles/CardIcons.scss'
import "../styles/CreateNote.scss"
import '../styles/LabelStyle.scss'

const token = localStorage.getItem("token");
export default class EditLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: [],
            isDeleted: 'false',
            show: false,
            newLabelName: '',
        }
        this.labelHandler = this.labelHandler.bind(this);
        this.newLabelNameHandler = this.newLabelNameHandler.bind(this);
        this.createLabel = this.createLabel.bind(this);
    }
    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/";
        const url = `${URL}getNoteLabelList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ label: data.data.details, isDeleted: data.data.details.isDeleted });
            console.log('Edit label Mount', this.state.label);
            console.log('label array label', this.label.id)
        }).catch(error => console.log(error));
    }

    handleModal() {
        this.setState({ show: true });
    }

    labelHandler(e) {
        this.setState({ label: e.target.value });
    }

    handleSave() {
        var Label = { noteId: this.props.id, la: this.state.label, isdeleted: false };
    }

    newLabelNameHandler(e) {
        this.setState({ newLabelName: e.target.value });
        this.componentDidMount();
    }
    deletelabel(data) {
        var noteData = { id:data};
        // labelServices.deleteLabel(noteData);
        
        axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${noteData}/deleteNoteLabel?access_token=${token}`,data);
        this.componentDidMount();
    }
    createLabel() {
        var data = {
            label: this.state.newLabelName,
            isDeleted: false,
            userId: localStorage.getItem('userId')
        }
        axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels?access_token=${token}`, data);
    }


    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.close} dialogClassName={"createNotes"}  >
                <div className='createNewLabel'>
                    <button className='iconsCard'><ImCancelCircle /></button>
                    <input type="text" placeholder="Create new label" className='inputLabel' value={this.state.newLabelName} onChange={(e) => { this.newLabelNameHandler(e) }} required />
                    <button className='iconsCard' onClick={this.createLabel}><IoMdAdd /></button>
                </div>
                {this.state.label.map((label) => {
                    console.log('LAbel inside Edit labe map', label);
                    const id = label.id;
                    return (
                        <Modal.Body >
                            <button className='iconsCard'onClick={() => this.deletelabel({id})}><MdDelete/> </button>
                            <input value={label.label} onChange={(e) => { this.labelHandler() }} />
                        </Modal.Body>)
                })}

                <Modal.Footer>
                    <button onClick={this.props.close}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal>

        );
    }
}

