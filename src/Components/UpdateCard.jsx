import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Card, Dropdown} from 'react-bootstrap';
import { VscPinned, VscSymbolColor } from 'react-icons/vsc'
import { MdAddAlert, MdMoreVert } from 'react-icons/md';
import { RiUserAddFill, RiInboxArchiveLine } from 'react-icons/ri'
import { BiImageAlt } from 'react-icons/bi'
import "../styles/CreateNote.scss"
import NotesServices from '../services/NotesServices'


class UpdateCard extends Component {
  constructor(props) {
    super(props);
    console.log("I am in Props", props);
    this.state = {
      title: '',
      description: '',
    }
    this.titleHandler = this.titleHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
    });
  }

  titleHandler(e) {
    this.setState({ title: e.target.value });
  }

  descriptionHandler(e) {
    this.setState({ description: e.target.value });
  }

  handleSave() {
    var updateNote = { noteId: this.props.id, title: this.state.title, description: this.state.description };
    NotesServices.updateNote(updateNote);
  }
  render() {
    return (
      <div>

        <Modal show={this.props.show} onHide={this.props.close} dialogClassName={"createNotes"}>

          <Modal.Body dialogClassName={'inputFields'} >
            {/* <h4> <input value={this.state.title} onChange={(e) => this.titleHandler(e)}/></h4>
        <br/>
        <h6> <input value={this.state.description} onChange={ (e) => this.descriptionHandler(e)}/></h6> */}
            <form className='titleField'>

              <div>
                <input
                  required
                  className='title'
                  name='title'
                  value={this.state.title}
                  onChange={(e) => this.titleHandler(e)} />

                <input
                  type='text'
                  className='title'
                  value={this.state.description}
                  onChange={(e) => this.descriptionHandler(e)}
                  required
                />
              
              < div className='iconsOption'>
                  <button className='buttons'><MdAddAlert ></MdAddAlert></button>
                  <button className='buttons'><RiUserAddFill></RiUserAddFill></button>
                  <button className='buttons'><VscSymbolColor></VscSymbolColor></button>
                  <button className='buttons'><BiImageAlt></BiImageAlt></button>
                  <button className='buttons'><RiInboxArchiveLine></RiInboxArchiveLine></button>
                  <button className='buttons'>
                    <Dropdown>
                      <Dropdown.Toggle className='btn-light buttons' >
                        <MdMoreVert></MdMoreVert>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Add label</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Add Drawing</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Show Checkbox</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </button>
                  {/* <button className='closeButton' type="submit" onClick={this.handleSave}>Update</button> */}
                </div>

              </div>
            </form>

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
