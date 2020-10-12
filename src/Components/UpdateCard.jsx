import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

 class UpdateCard extends Component {
    constructor(props){
      console.log( 'I am inside UpdateCard',props);
        super(props);
         this.state ={
            showModal:true,
        }
        // this.titleHandler = this.titleHandler.bind(this);
        // this.descriptionHandler =this.descriptionHandler.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.title,
            description: nextProps.description
        });
    }
    handleClose = () =>{
      this.setState({showModal:false});
    } 


    titleHandler = (e) =>{
        this.setState({title: e.target.value});
    }

    descriptionHandler = (e) =>{
        this.setState({description: e.target.value});
    }

    handleSave=(e)=>{
        const note = {}
        note.id  = this.props.id;
        note.title = this.props.title;
        note.description = this.props.description;
    }
    
    render(){
        return (
            <Modal show={this.props.showModal}>
        <Modal.Header>
          <Modal.Title>Update </Modal.Title>
        </Modal.Header>
        <Modal.Body> <input value={this.props.title} onChange={(e) => this.titleHandler(e)} />
        <input value={this.props.description} onChange={(e) => this.descriptionHandler(e)} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {this.handleClose()}}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { this.handleSave() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        );
    }
}
export default UpdateCard;