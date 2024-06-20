import React, { useState, useEffect } from 'react';
import './Credentials.css';
import axios from 'axios';

const Credentials = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/?prnNo=72278496B')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleContributeClick = () => {
    window.open('/studprofedit', '_blank'); 
  };

  return (
    <div className='container1'>
      {userData && (
        <>
          <h2 className='name'>{userData.firstname} {userData.lastname}</h2>
          <div className="reg">
            <h2 className='reg_id'>Registration Id:  {userData.regId}</h2>
            <h2 className='prn_no'>PRN no.:  {userData.prnNo}</h2>
          </div>
          <hr />
          <p className='description'>Description: {userData.about}</p>
          <hr />
          <div className="mail-no">
            <div className="item1">
              <h4 className='h'>Email: </h4> <p className='p'>{userData.studentemailId}</p>
            </div>
            <div className="vertical-line"></div>
            <div className="item1">
              <h4 className='h'>Contact No.: </h4> <p className='p'>{userData.contactNumber}</p>
            </div>
          </div>
          <hr />
          <button className='edit' onClick={handleContributeClick}>Edit Profile</button>
        </>
      )}
    </div>
  )
}

export default Credentials;

// import React, { useState, useEffect } from 'react';
// import './Credentials.css';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

// const Credentials = ({ userData }) => {
//   const handleContributeClick = () => {
//     window.open('/studprofedit', '_blank'); 
//   };
  
//   return (
//     <div className='container1'>
//       {/* Render user data if available */}
//       {userData && Object.keys(userData).length > 0 ? (
//         <>
//           <h2 className='name'>{userData.student.name} </h2>
//           <div className="reg">
//             <h2 className='reg_id'>Registration Id:  {userData.student.regId}</h2>
//             <h2 className='prn_no'>PRN no.:  {userData.student.prnNo}</h2>
//           </div>
//           <hr />
//           <p className='description'>Description: {userData.student.about}</p>
//           <hr />
//           <div className="mail-no">
//             <div className="item1">
//               <h4 className='h'>Email: </h4> <p className='p'>{userData.student.studentemailId}</p>
//             </div>
//             <div className="vertical-line"></div>
//             <div className="item1">
//               <h4 className='h'>Contact No.: </h4> <p className='p'>{userData.student.contactNumber}</p>
//             </div>
//           </div>
//           <hr />
//           <button className='edit' onClick={handleContributeClick}>Edit Profile</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default Credentials;
