// import React, { useState, useEffect } from 'react';
// import './profile.css';
// import StudNav from '../../Navbar/Studnav';
// import Credentials from './Credentials';
// import Links from './Links';
// import Place_status from './Place_status';
// import Internship from './Internship/Internship';
// import Contri_section from './Contri_section';
// import axios from 'axios';
// import CryptoJS from 'crypto-js';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const cookies = document.cookie;
//         console.log(cookies)
//         const secretKey = 'oEVzobgA9irHZdNvi5IjEzRotYno6X7h';
//         let decData = CryptoJS.enc.Base64.parse(cookies).toString( CryptoJS.enc.Latin1)
//         let decryptedPrn = CryptoJS.AES.decrypt(decData,secretKey).toString(CryptoJS.enc.Utf8)    
//         console.log(JSON.parse(decryptedPrn));

//         if (!decryptedPrn) {
//           console.error('Decryption failed or empty data received.');
//           return;
//         }

//         const info3 = JSON.parse(decryptedPrn);
//         console.log(info3);
//         const response = await axios.get(`https://placement-internship-tracker-backend-mu.vercel.app/api/students/?prnNo=72278496B`);
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching or decrypting data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div>
//       <div className="nav">
//         <StudNav />
//       </div>
//       {userData && userData.student && userData.student.bgimage && (
//         <div className="background_container">
//           <img src={userData.student.bgimage} alt="" className="background_image" />
//           <div className="img_overlay">
//             {userData.student.image && <img src={userData.student.image} alt="profile_pic" />}
//           </div>
//         </div>
//       )}

//       <div className="prof_container">
//         <div className="prof_info">
//           <Credentials userData={userData} />
//           <Links userData={userData} />
//           {userData && userData.resume && (
//             <a href={userData.resume} target="_blank" rel="noopener noreferrer" className="resume_btn">Resume</a>
//           )}
//         </div>
//         <div className="placement_info">
//           <Place_status />
//           <Internship />
//           <Contri_section />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
import React, { useState, useEffect } from 'react';
import './profile.css';
import StudNav from '../../Navbar/Studnav';
import Credentials from './Credentials';
import Links from './Links';
import Place_status from './Place_status';
import Internship from './Internship/Internship'; // Assuming Internship component exists
import Contri_section from './Contri_section';
import axios from 'axios';
import CryptoJS from 'crypto-js'; // Import CryptoJS

const Profile = () => {
  const [userData, setUserData] = useState(() => {
    // Retrieve userData from localStorage
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  useEffect(() => {
    // Fetch userData if not available in localStorage
    if (!userData) {
      const cookies = document.cookie;
      axios.get(`https://placement-internship-tracker-backend-mu.vercel.app/api/students/token/?encryptedprnNo=${cookies}`)
        .then(response => {
          const userData = response.data;
          console.log(response.data)
          // Store userData in localStorage
          localStorage.setItem('userData', JSON.stringify(userData));
          setUserData(userData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      // axios.get(`https://placement-internship-tracker-backend-mu.vercel.app/api/students/?prnNo=${userData.prnNo}`)
      //   .then(response => {
      //     const userData = response.data;
      //     // Store userData in localStorage
      //     localStorage.setItem('userData', JSON.stringify(userData));
      //     setUserData(userData);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching data:', error);
      //   });
    }
  }, [userData]);

  return (
    <div>
      <div className="nav">
        <StudNav/>
      {/* </div>
      {userData && userData.bgimage && (
        <div className="background_container">
          <img src={userData.bgimage} alt="" className="background_image"/>
          <div className="img_overlay">
            {userData && userData.image && (
              <img src={userData.image} alt="profile_pic" />
            )}
          </div>
        </div>
      )}
      
      <div className="prof_container">
        <div className="prof_info">
          // {/* <Credentials userData={userData} /> */}
          {/* <Links userData={userData} />
          {userData && userData.resume && (
            <a href={userData.resume} target="_blank" rel="noopener noreferrer" className="resume_btn">Resume</a>
          )}
        </div> */}
        {/* <div className="placement_info">
            <Place_status/>
            <Internship/>
            <Contri_section/>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;