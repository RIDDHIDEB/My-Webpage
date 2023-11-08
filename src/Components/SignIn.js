import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function SignIn() {
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobile,setMobile] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    const [register,setRegister] = useState(false);
    const navigate=useNavigate();

    // const handleInputChange = (e) =>{
    //   const {name, value} = e.target;
    //   setShow((prevData) =>({
    //     ...prevData,
    //     [name]: value
    //   }));
    // }
    const handleSubmit = (e) =>{
      e.preventDefault();

      if(email==='admin@gmail.com' && password==='admin@123' && mobile==='8017937963' && confirmPass==='admin@123'){
        setRegister(true);
        navigate('/home');
        swal('You have successfully Registered');
      }else{
        swal('Registration Failed');
      }
      
    };

    return(
      <React.Fragment>
       <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-group" >
                    <label htmlFor="name">Email:</label>
                      <input type="text" class="form-control" placeholder='Enter your email' name='name' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                
                  <div className="form-group">
                    <label for="name">Mobile Number:</label>
                      <input type="text" className="form-control" placeholder='Enter your mobile number' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Password:</label>
                  <input type="text" class="form-control" rows='5' placeholder='*********' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label for="name">Confirm Password:</label>
                  <input type="text" class="form-control" rows='5' placeholder='*********' name='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}></input>
              </div>
              <Button onClick={handleSubmit}>Register</Button>
                </form> 
        </div>
      </React.Fragment>
    );
}

export default SignIn;