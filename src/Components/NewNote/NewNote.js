import React, { useState } from 'react';
import "./NewNote.css";
import Button from "./Button/Button";
import Note from '../Note/Note';


const NewNote = (props)=>{

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [notes, setNotes] = useState([]);


    const handleChangeTitle = (event) =>{
        setTitle(event.target.value);
    }


    const handleChangeBody = (event) =>{
        setBody(event.target.value);
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        
        
    const newNote = { 
        id: Date.now(),
        title,
         body };


    setNotes([...notes, newNote]);
    setTitle('');
    setBody('');
        
    }

    const handleDelete = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
      };

 

    return(
        <div>
        <form className="newNote" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChangeTitle}></input>
            <textarea type="text" name="body" placeholder="Message" onChange={handleChangeBody}></textarea>
            
            <Button/>
            
        </form>
        {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          body={note.body}
          onDelete={() => handleDelete(note.id)}
        />
      ))}
        </div>
    )
}

export default NewNote;