import React,{useState,useEffect,useRef} from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Input from './Input'
import Update from './Update'
const Notes = (props) => {
 const [note,setNote]=useState({description:""});
 const [notes,setNotes]=useState([]);
 const handlesubmit= async (e)=>{
    e.preventDefault();
    try {
        const {description}=note;
        setNote({...note,description:""})
        const body = {description};
        const response = await fetch(
          "http://localhost:8000/notes/note",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
         
        const parseRes = await response.json();
        
        if (parseRes==="Created") {
          console.log("Created")
        } else {
          console.log("Error")  
        }
      } catch (err) {
        console.error(err.message);
      }
}
 const handleChange=(e)=>{
     setNote({ ...note, [e.target.name]: e.target.value })
 }

 const getNotes = async () => {
    try {
      const res = await fetch("http://localhost:8000/notes/", {
        method: "GET"
      });
      const parseData = await res.json();
      setNotes(parseData)
    } catch (err) {
      console.error(err.message);
    }
  };
  
  async function deleteNote(id) {
    try {
     await fetch(`http://localhost:8000/notes/note/${id}`, {
        method: "DELETE"
     });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getNotes();
  });

  return(
    <>
    
    <Input  value={note.description} submit={handlesubmit} change={handleChange}/>
    <ul className="list">{
    notes.length !==0 
    ?notes.map((note)=>
    <>
    <div className="one">
    <li key={note.id}>{note.description}</li>
    <Update data={note}/>
    <Button style={{marginLeft:"15px"}} variant="danger" onClick={() => deleteNote(note.id)}>Delete</Button>
   </div>
   </>
    ):<h1>Loading</h1>}
    </ul>
    </>
    )
  }

  export default Notes