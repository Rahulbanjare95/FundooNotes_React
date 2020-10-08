import React, { Component } from 'react'

export default class GetNotes extends Component {
    state = {
        note:null
    }

    async componentDidMount(){
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getNotesList?access_token=${token}`;
        const response = await fetch(url);
        const data  = await response.json();
        this.setState({note: data.data})
        console.log(this.state.note.data.title);

    }
    render() {
        return (
            <div>
                {this.state.note ? (<div>Yes Notes are here</div>)
                :
                ( <div>No notes found</div>)}
            </div>
        )
    }
}
