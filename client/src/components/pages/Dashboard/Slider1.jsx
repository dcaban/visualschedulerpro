import React, { Component } from 'react';
import {Col, Input, Button} from 'react-materialize';


class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteContent: '',
        })
    }


    render() {
        return(
            <div>

                <Col s='4'>

                    <Input placeholder="Click to select date" name='on' value={this.state.newNoteContent} type='date' id='dayOff'  onChange={this.handleUserInput} />

                </Col>

                <Col s='4'>

                    <Button floating large  className='teal' waves='light' icon='add' onClick={this.writeNote}/>
                </Col>
            </div>
        )}
}

export default NoteForm;