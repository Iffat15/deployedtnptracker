import React from 'react';
import { Link } from 'react-router-dom'; 
import './Studnav.css';
import logo from '../../Assets/logo2.png';

const Studnav = () => {
  return (
    <nav className='nav1-container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/placements" className='nav-link'>Placements</Link></li>
            <li><Link to="/internships" className='nav-link'>Internships</Link></li> 
            <li><Link to="/login" className='btn'>Sign-Out</Link></li> 
        </ul>
    </nav>
  );
}

export default Studnav;
