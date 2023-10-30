import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Calculator';
import './CalcModal.css';
import LogOut from './LogOut';

function CalcModal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" style={{color:'#ffff'}}>
        <a>Welcome, Admin</a>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <LogOut/>
      </Dropdown.Menu>

    </Dropdown>
    </>
  );
}

export default CalcModal;