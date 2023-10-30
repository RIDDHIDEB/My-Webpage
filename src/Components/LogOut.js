import React from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import LogoutLogo from './icons8-logout-24.png';

function LogOut() {
   
const navigate = useNavigate();

function handleClick (){
    navigate("/")
    swal("Logged Out Successfully");
}

  return (
    <div>
      <img src={LogoutLogo}/>
      <a onClick={handleClick} style={{cursor:'pointer',paddingLeft:'10px'}}>Logout</a>
    </div>
  );
}

export default LogOut;
