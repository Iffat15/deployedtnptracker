import { useState, useEffect } from 'react';
import './ProInfo.css';
import Nav from '../../Navbar/Nav';
import UserInfo from './UserInfo';
import StudentList from './StudentList';
import ProfilePic from './StudentProfile/ProfilePic';
import StaticsticStudent from './StaticsticStudent';
import axios from 'axios';

function ProInfo() {
    const [currentComponent, setCurrentComponent] = useState(<UserInfo />);
    const [userData, setUserData] = useState(null); // Initialize userData as null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    setUserData(JSON.parse(storedUserData));
                } else {
                    const response = await axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/instructors/?instructoremailId=sajakhete@pict.edu');
                    setUserData(response.data.instructor[0]);
                    console.log(response.data.instructor[0].instructoremailId);
                    localStorage.setItem('userData', JSON.stringify(response.data));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
 
    const renderComponent = (component) => {
        setCurrentComponent(component);
    };

    return (
        <div>
            <div className="nav"><Nav /></div>
            <div className="prof-container">
                <div className="App">
                    <ProfilePic />
                    <div className='Permanent_Info'>
                        <h1 className='registration_Id'>Credentials</h1>
                        {userData &&
                userData.instructor &&
                userData.instructor.length > 0 && (
                    <h3 className='name'> {userData.instructor[0].instructoremailId}</h3>
                )
            }
                    </div>
                </div>
                <div className="AppInfo">
                    <ul className="internal-navbar">
                        <li><button className="user-btn" onClick={() => renderComponent(<UserInfo />)}>User Info</button></li>
                        <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList />)}>Student List</button></li>
                        <li><button className="staticList-btn" onClick={() => renderComponent(<StaticsticStudent />)}>Statistics of Student</button></li>
                    </ul>
                    {currentComponent && currentComponent}
                </div>
            </div>
        </div>
    );
}

export default ProInfo;

// import { useState } from 'react';
// import './ProInfo.css';
// import Nav from '../../Navbar/Nav';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import UserInfo from './UserInfo';
// import StudentList from './StudentList';
// import ProfilePic from './StudentProfile/ProfilePic';
// import StaticsticStudent from './StaticsticStudent';

// function ProInfo() {
//     const [currentComponent, setCurrentComponent] = useState(<UserInfo />);

//     const renderComponent = (component) => {
//         setCurrentComponent(component);
//     };

//     return (
//         <div>
//             <div className="nav"><Nav /></div>
//             <div className="prof-container">
//                 <div className="App">
//                     <ProfilePic />
//                     <div className='Permanent_Info'>
//                         <h1 className='registration_Id'>Registration ID</h1>
//                         <h3 className='gmail_Id'>GmailID@gmail.com</h3>
//                         <h1 className='phone_no'>9307052699</h1>
//                     </div>
//                 </div>
//                 <div className="AppInfo">
//                     <ul className="internal-navbar">
//                         <li><button className="user-btn"onClick={() => renderComponent(<UserInfo />)}>User Info</button></li>
//                         <li><button className="stuList-btn" onClick={() => renderComponent(<StudentList />)}>Student List</button></li>
//                         <li><button className="staticList-btn" onClick={() => renderComponent(<StaticsticStudent />)}>Statistics of Student</button></li>
//                     </ul>
//                     {currentComponent && currentComponent}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProInfo;