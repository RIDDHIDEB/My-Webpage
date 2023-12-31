import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {getAuth, RecaptchaVerifier} from 'firebase/auth';
import firebaseConfig from './Firebase';

function SignUp() {
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [mobile,setMobile] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    const [otp, setOtp] = useState("");
    const [register,setRegister] = useState(false);
    const navigate=useNavigate();

    // const handleInputChange = (e) =>{
    //   const {name, value} = e.target;
    //   setShow((prevData) =>({
    //     ...prevData,
    //     [name]: value
    //   }));
    // }

    // const auth = getAuth();
    // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-up-button', {
    //   'size':'invisible',
    //   'callback': (response) =>{
    //     onSignUpSubmit();
    //   }
    // });

    const configureCaptcha = () =>{
      window.recaptchaVerifier = new firebaseConfig.auth.RecaptchaVerifier('sign-up-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignUpSubmit();
          console.log("Recaptcha varified")
        },
        defaultCountry: "IN"
      });
    }

    const onSignUpSubmit = (e) => {
      e.preventDefault();
      configureCaptcha();
      const phoneNumber = "+91" + mobile;
      console.log(phoneNumber)
      const appVerifier = window.recaptchaVerifier;

      firebaseConfig.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")
            // ...
          }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("SMS not sent")
          });
    }

    const onSubmitOTP = (e) =>{
      e.preventDefault();
      const code = otp
      console.log(code);
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user))
        swal("User is verified")
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log('could not find the user');
      });
    }

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
          <form className='form1' onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-group" >
                  <label htmlFor="name">Email:</label>
                  <input type="text" className="form-control" placeholder='Enter your email' name='name' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Mobile Number:</label>
                  <input type="text" className="form-control" placeholder='Enter your mobile number' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                </div>
              </div>
            </div>
              <div className="form-group">
                <label htmlFor="name">Password:</label>
                <input type="text" className="form-control"  placeholder='*********' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="name">Confirm Password:</label>
                  <input type="text" className="form-control" placeholder='*********' name='password' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="name">Enter OTP:</label>
                <input  name="otp" placeholder="OTP Number" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                <Button onClick={onSubmitOTP}>Submit</Button>
              </div>
              <Button onClick={onSignUpSubmit}>Register</Button>
            </form> 
        </div>
      </React.Fragment>
    );
}

export default SignUp;