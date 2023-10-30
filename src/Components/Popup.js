import React from 'react'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


function Popup(){
    const notify = ()=>{
      toast('Login Successful', 
           {position: toast.POSITION.TOP_RIGHT})
    }
    return (
      <div>
          <button onClick={notify}>Login</button>
          </div>
  );
  }

  export default Popup;
