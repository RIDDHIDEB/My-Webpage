import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

function Login() {   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleSubmit = (e) => {
        e.preventDefault();
      
    if (email === "admin@gmail.com" && password === "admin@123"){
        setIsLoginSuccessful(true);
        navigate("/home")
        swal("You have logged in successfully");   
    }else{
      swal("Invalid email or password");
    }
    
  }

const navigate = useNavigate();

  return (
    <>
      <div className='container3'>
      <div className="auth-form-container">
      <form className="login-form" >
        <label htmlFor="email">Email:</label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your@.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
       <div style={{marginBottom:'20px'}}>
        <Button style={{width:'100%'}} onClick={handleSubmit}>Login</Button>
       </div>

      </form>
      <p>Don't have an account?</p>
      <Link to='/signin'>
         Register Here
      </Link>
    </div>
    </div>

    </>
  )
}

export default Login;