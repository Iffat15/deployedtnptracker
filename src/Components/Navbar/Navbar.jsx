import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/logo2.png';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${scrolling ? 'scrolled' : ''}`}>
      <Link to="/" className='logo-link'>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <ul>
        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><Link to="/announcement" className={`nav-link ${location.pathname === '/announcement' ? 'active' : ''}`}>Announcements</Link></li>
        <li><Link to="/statistics" className={`nav-link ${location.pathname === '/statistics' ? 'active' : ''}`}>Statistics</Link></li>
        <li><Link to="/testimonials" className={`nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}>Testimonials</Link></li>
        <li><Link to="/login" className='btn'>Login</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
