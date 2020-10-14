import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap';
import NotesServices from '../services/NotesServices'


class UpdateCard extends Component {
  constructor(props){
    super(props);
    console.log("I am in Props",props);
    this.state = {
      title: '',
      description:'',
    }
    this.titleHandler = this.titleHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
      });
  }

  titleHandler(e){
    this.setState({title: e.target.value});
  }

  descriptionHandler(e){
    this.setState({description: e.target.value});
  }
  
  handleSave(){
    var updateNote = { noteId:this.props.id, title:this.state.title, description:this.state.description};
    NotesServices.updateNote(updateNote);
  }
  render() {
    return (
      <div>
        
        <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Body > <h4> <input value={this.state.title} onChange={(e) => this.titleHandler(e)}/></h4>
        <br/>
        <h6> <input value={this.state.description} onChange={ (e) => this.descriptionHandler(e)}/></h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={this.handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
      </div>
    )
  }
}

export default UpdateCard;
