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
  
  handleSave(e){
    var updateNote = { noteIdList: [this.props.id], title:this.state.title, description:this.state.description};
    NotesServices.updateNote(updateNote);
    console.log('hi',updateNote);
  }
  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSave}>
        <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Body> <span> <input value={this.state.title} onChange={(e) => this.titleHandler(e)}/></span>
        <br/>
        <span> <input value={this.state.description} onChange={ (e) => this.descriptionHandler(e)}/></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
      </div>
    )
  }
}

export default UpdateCard;
