import React, { Component } from 'react';
import { Modal, ModalDialog } from 'react-bootstrap';
import labelServices from '../services/LabelServices';
import axios from 'axios';
import { IoMdAdd } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im'
import { MdDelete, MdModeEdit } from 'react-icons/md';
import '../styles/CardIcons.scss'
import '../styles/LabelStyle.scss'

const token = localStorage.getItem("token");
export default class EditLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: [],
            isDeleted: false,
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
            this.setState({ label: data.data.details, isDeleted: data.data.details.isDeleted, newLabelName: data.data.details.label });
        }).catch(error => console.log(error));
    }
    handleModal() {
        this.setState({ show: true });
    }

    labelHandler(e, index) {
        this.state.label[index].label = e.target.value;
        this.setState({ label: this.state.label });
    }

    newLabelNameHandler(e) {
        this.setState({ newLabelName: e.target.value });
    }
    deletelabel(data) {
        axios.delete(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${data.id}/deleteNoteLabel?access_token=${token}`);
    }
    createLabel() {
        var data = {
            label: this.state.newLabelName,
            isDeleted: false,
            userId: localStorage.getItem('userId')
        }
        axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels?access_token=${token}`, data);
        this.setState({ newLabelName: '' });
    }

    editLabel = (labelId, index) => {
        console.log('this is labelId', labelId);
        let editdata = { label: this.state.label[index].label };
        axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/${labelId}/updateNoteLabel?access_token=${token}`, editdata);
    };
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}  className='createNewLabel'  >
                <Modal.Header>Edit Label</Modal.Header>
                <div  className='createNewLabel'  >
                    <button className='iconsCard'><ImCancelCircle /></button>
                    <input type="text" placeholder="Create new label" className='inputLabel' value={this.state.newLabelName} onChange={(e) => { this.newLabelNameHandler(e) }} required />
                    <button className='iconsCard' onClick={this.createLabel}><IoMdAdd /></button>
                </div>
                {this.state.label.filter((data) => !data.isDeleted).map((data, index) => {
                    const id = data.id;
                    return (
                        <div className='createNewLabel' >
                            <button className='iconsCard ' onClick={() => this.deletelabel({ id })}><MdDelete /> </button>
                            <input  className='inputLabel' value={data.label} onChange={(e) => this.labelHandler(e, index)} />
                            <button className='iconsCard' onClick={(e) => this.editLabel(data.id, index)}><MdModeEdit /></button>
                        </div>)
                })}
            </Modal>

        );
    }
}

