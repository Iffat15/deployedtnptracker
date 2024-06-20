// import { useState } from 'react';
// import Group from './Group1';
// import { months } from '../tools';

// export default function EditableUserProfile1({
//     stored,
//     startEditCallback
// }) {

//     console.log()


//     return <div className='user1'>
//         <Group>
//             <h3>First Name:</h3> {stored.fname}
//             <h3>Last Name:</h3> {stored.lname}
//         </Group>
//         <Group>
//             <h3>Linkdin:</h3> {stored.linkdin}
//             <h3>GitHub:</h3> {stored.github}
//         </Group>
//         <Group>
//             <h3>Graduation:</h3> {stored.graduation}
//             <h3>Phone Number:</h3> {stored.phoneno}
//         </Group>
//         <Group>
//             <h3>Birthday:</h3> {months.getShortName(stored.month)} {stored.day}
//         </Group>
//         <Group>
//             <button className='btn2'
//                 onClick={startEditCallback}
//             >Edit</button>
//         </Group>
//     </div>
// }

import { useState, useEffect } from 'react';
import Group from './Group1';
import { months } from '../tools';
import axios from 'axios';



export default function EditableUserProfile1({
    stored,
    startEditCallback
}) {

    const [userData, setUserData] = useState(null); // Initialize userData as null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    setUserData(JSON.parse(storedUserData));
                } else {
                    const response = await axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/instructors/?instructoremailId=sajakhete@pict.edu');
                    setUserData(response.data.instructor);
                    console.log(response.data.instructor)
                    localStorage.setItem('userData', JSON.stringify(response.data));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    console.log()


    return <div className='user1'>
        <Group>
            {userData &&
                userData.instructor &&
                userData.instructor.length > 0 && (
                    <h3 className='name'>Name  : {userData.instructor[0].name}</h3>
                )
            }
        </Group>
        <Group>
        {/* <h3 className='gmail_Id'>gender  : female</h3>{userData.instructor.gender} */}
        <h3>gender: female</h3>
        {userData &&
                userData.instructor &&
                userData.instructor.length > 0 && (
                    <h3 className='department'>department  : {userData.instructor[0].department}</h3>
                )
            }
        </Group>
        <Group>
            <h3>Contact Number: 68342899</h3>
            {/* {userData && (
                <>
                    <h3 className='phone_no'>contact number : 6274893749</h3>{userData.instructor.contactNumber}
                </>
            )} */}
        </Group>

        <Group>
            <button className='btn2'
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}