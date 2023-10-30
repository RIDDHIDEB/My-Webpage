import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css";

function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) =>{
      const {name, value} = event.target;
      setShow((prevData) =>({
        ...prevData,
        [name]: value
      }));
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log('Form Data:', show);
    };

    return(
        <React.Fragment>
          <Button variant='none' style={{color:'#ffff'}} onClick={handleShow}>Sign-In</Button>

          <Modal show={show} onHide={handleClose} centered>
            <div className='modal-style'>
            <Modal.Header closeButton>
            <Modal.Title className='modal-title'><h1 className='heading'>Sign-In</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body >
            <form className='form' onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group" >
                    <label htmlFor="name">Username</label>
                      <input type="text" class="form-control" placeholder='Choose your username' name='name' value={show.name} onChange={handleInputChange}/>
                  </div>
                
                  <div className="form-group">
                    <label for="name">Email</label>
                      <input type="text" className="form-control" placeholder='Enter your email' name='email' value={show.value} onChange={handleInputChange}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Password</label>
                  <input type="text" class="form-control" rows='5' placeholder='Enter your password' name='password'></input>
              </div>
                </form> 
                </Modal.Body>
                <Modal.Footer>
                  
                  <Button variant="primary" onClick={handleSubmit}>Sign-In</Button>
                </Modal.Footer>
            </div>
          </Modal>
  
        </React.Fragment>
    );
}

export default Contact;