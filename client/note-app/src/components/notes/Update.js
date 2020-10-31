import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
const Update=(props)=>{
    const [show, setShow] = useState(false);
    const [note,setNote]=useState(props.data);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlesubmit= async(e)=>{
        handleClose()
        e.preventDefault();
        try {
          const {description,id}=note;
          const body = {description};
          const response = await fetch(
            `http://localhost:8000/notes/note/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
           
          const parseRes = await response.json();
          
          if (parseRes) {
            console.log("Updated")
            // props.getNotes()
          } else {
            console.log("Error")  
          }
        } catch (err) {
          console.error(err.message);
        }
      }
    const handlechange=(e)=>{
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
      <>
        <Button style={{marginLeft:"10px"}} variant="success" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <form className="form-update" >
      <input type="text" name="description" value={note.description} onChange={handlechange}/>
    </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Update;