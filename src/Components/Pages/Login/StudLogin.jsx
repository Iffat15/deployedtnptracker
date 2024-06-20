// import React, { useEffect, useState } from 'react';
// import './StudLogin.css';
// import Nav from '../../Navbar/Nav';
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import Cookies

// const Login = () => {
//   const [error, setError] = useState('');

//   const handleStudentLogin = (e) => {
//     e.preventDefault();
//     setError('');

//     const regId = e.target.regId.value;
//     const prnNo = e.target.prnNo.value;
//     const password = e.target.password.value;

//     // Validation: Ensure all fields are filled
//     if (!regId || !prnNo || !password) {
//       setError('Please provide all required information.');
//       return;
//     }

//     axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/student', {
//       regId: regId,
//       prnNo: prnNo,
//       password: password
//     })
//     .then(response => {
//       // Store student data in cookies
//       Cookies.set('student', response.data.student); // Assuming response.data.student contains the student data
//       window.open('/studlogin');
//     })
//     .catch(error => {
//       // Handle login error
//       console.error('Error logging in:', error);
//       setError('Invalid credentials. Please try again.');
//     });
//   };
  
//   return (
//     <div>
//       {/* <div className="nav"><Nav/></div> */}
//             <div className="form-container">
//             <form onSubmit={handleStudentLogin}>
//               <h3>I am a Student..</h3>
//               <h1>Sign In</h1>
//               <input type="text" id="regId" placeholder='Registration ID' />
//               <input type="text" id="prnNo" placeholder='PRN No.' />
//               <input type="password" id="password" placeholder='Password' />
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className='change'>Login</button>
//             </form>
//             </div>
//     </div>
//   );
// }

// export default Login;
import React, { useEffect, useState } from 'react';
import './StudLogin.css';
import Nav from '../../Navbar/Nav';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import Cookies

const Login = () => {
  const [error, setError] = useState('');

  const handleStudentLogin = (e) => {
    e.preventDefault();
    setError('');

    const regId = e.target.regId.value;
    const prnNo = e.target.prnNo.value;
    const password = e.target.password.value;

    // Validation: Ensure all fields are filled
    if (!regId || !prnNo || !password) {
      setError('Please provide all required information.');
      return;
    }

    axios.post('https://placement-internship-tracker-backend-mu.vercel.app/api/student', {
      regId: regId,
      prnNo: prnNo,
      password: password
    })
    .then(response => {
      // Store student data in cookies
      Cookies.set('student', response.data.student); // Assuming response.data.student contains the student data
      window.open('/studlogin');
    })
    .catch(error => {
      // Handle login error
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    });
  };
  
  return (
    <div>
      {/* <div className="nav"><Nav/></div> */}
      <div className="login-body">
        <div className='log-container' id='container'>
          <div className="form-container sign-in">
            <form onSubmit={handleStudentLogin}>
              <h3>I am a Student..</h3>
              <h1>Sign In</h1>
              <input type="text" id="regId" placeholder='Registration ID' />
              <input type="text" id="prnNo" placeholder='PRN No.' />
              <input type="password" id="password" placeholder='Password' />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className='change'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;