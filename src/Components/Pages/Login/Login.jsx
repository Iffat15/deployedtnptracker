// import React, { useState } from 'react';
// import './StudLogin.css';
// import Nav from '../../Navbar/Nav';
// import axios from 'axios';

// const Login = () => {
//   const [error, setError] = useState('');

//   const handleStudentLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     const regId = e.target.elements.regId.value;
//     const prnNo = e.target.elements.prnNo.value;
//     const password = e.target.elements.password.value;

//     // console.log(regId);

//     // Validation: Ensure all fields are filled
//     if (!regId || !prnNo || !password) {
//       setError('Please provide all required information.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student/', {
//         regId: regId,
//         prnNo: prnNo,
//         password: password
//       });
//       // console.log(response);
//       // Redirect or show success message
//     } catch (error) {
//       const response = await axios.post('https://dp1d9vc7-5000.inc1.devtunnels.ms/api/Student/', {
//         regId: regId,
//         prnNo: prnNo,
//         password: password
//       });
//       console.log(response);
//       setError('Invalid credentials. Please try again.');
//     }
//   };
  
//   return (
//     <div>
//       <div className="nav"><Nav/></div>
//       <div className="login-body">
//         <div className='log-container' id='container'>
//           <div className="form-container sign-in">
//             <form onSubmit={handleStudentLogin}>
//               <h3>I am a Student..</h3>
//               <h1>Sign In</h1>
//               <input type="text" name="regId" placeholder='Registration ID' />
//               <input type="text" name="prnNo" placeholder='PRN No.' />
//               <input type="password" name="password" placeholder='Password' />
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className='change'>Login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import './StudLogin.css';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({
    regId: "",
    prnNo: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      regId: data.regId,
      prnNo: data.prnNo,
      password: data.password
    };
    axios.post(`https://placement-internship-tracker-backend-mu.vercel.app/api/Student/`, userData)
      .then((response) => {
        console.log(response);
        document.cookie=response.students;
        window.open('/studlogin');
        
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle error
      });
  };

  return (
    <div>
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="regId">
          Registration ID
          <input
            type="text"
            name="regId"
            value={data.regId}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="prnNo">
          PRN No.
          <input
            type="text"
            name="prnNo"
            value={data.prnNo}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
