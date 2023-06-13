import React from "react";
import "./Note.css";
import Status from "./Status/Status";
import DeleteNote from "./DeleteNote/DeleteNote";


const Note = ({ id, title, body, onDelete })=>{
    return(
        <div className="note">
            <h1>{title}</h1>
            <p>{body}</p>
            <Status/>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Note;