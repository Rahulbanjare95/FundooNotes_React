import React, { Component } from 'react'
import "../styles/CreateNote.scss"
export default class GetNotes extends Component {
    state = {
        note: null
    }

    async componentDidMount() {
        const token = localStorage.getItem("token");
        const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
        const url = `${URL}getNotesList?access_token=${token}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            this.setState({ note: data.data.data });
            console.log(this.state.note);
        }).catch(error => console.log(error));
    }

    render() {
        return (

            <div className='noteList'>
                {this.state.note ? (
                    <div>
                        {this.state.note.map((data, index) =>{
                            return <div ><div className='note'><h1> {data.title}</h1>
                                                                <p>{data.description}</p></div> </div>
                            
                        })}
                    </div>)
                    :
                    (<div>No notes found</div>)
                }
            </div>
        )
    }
}
