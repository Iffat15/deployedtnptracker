import React, { useEffect, useState } from 'react';
import './AdminLogin.css';
import Nav from '../../Navbar/Nav';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError('');

    const emailId = e.target.emailId.value;
    const password = e.target.password.value;

    // Validation: Ensure all fields are filled
    if (!emailId ||  !password) {
      setError('Please provide all required information.');
      return;
    }

    axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/instructor', {
      emailId: emailId,
      password: password
    })
    .then(response => {
      window.open('/instlogin');
    })
    .catch(error => {
      // Handle login error
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    });
  };
  
  return (
    <div>
      <div className="nav"><Nav/></div>
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="loginform">
            <form onSubmit={handleAdminLogin}>
              <h3>Admin Login</h3>
              <h1 >Sign In</h1>
              <input type="text" id="emailId" placeholder='Email ID' />
              <input type="password" id="password" placeholder='Password' />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className='subbtn'>Login</button>
            </form>
          </div>
          <div className="sidecont">
            <h1 className='h1_cont'>Welcome on Admin Page!!</h1>
            <p>Login as admin to access this website.Enter your valid credentials for access and control of website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;