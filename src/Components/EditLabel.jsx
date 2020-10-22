import React, { Component } from 'react';
import { Modal, ModalDialog } from 'react-bootstrap';
import LabelServices from '../services/LabelServices';
import '../styles/CardIcons.scss'
import "../styles/CreateNote.scss"

export default class EditLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label:'',
            isDeleted: 'false',
            show: false,
        }
        this.labelHandler = this.labelHandler.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //       label: nextProps.label,
    //     });
    //   }
    handleModal() {
        this.setState({ show: true });
    }

    labelHandler(e) {
        this.setState({ label: e.target.value });
    }

    handleSave() {
        var Label = { noteId: this.props.id, title: this.state.label, isdeleted: false };
        LabelServices.createNew(Label);
    }


    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.close}   >
                <Modal.Header>Hi</Modal.Header>
                {this.props.label.map((label) => {
                    console.log('THis is inside Map', label);
                    return (
                        <Modal.Body>
                            <input value={label.label} onChange={this.labelHandler}/>
                        </Modal.Body>
                    );

                })}
                <Modal.Footer>
                    <button onClick={this.props.close}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal>

        );
    }
}

