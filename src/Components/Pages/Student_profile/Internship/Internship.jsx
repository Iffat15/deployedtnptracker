// import React, {useState,useEffect} from 'react'
// import './Internship.css'
// import axios from 'axios'

// const Internship = () => {
//     const [internData, setinternData] = useState(() => {
//         // Retrieve userData from localStorage
//         const storedinternData = localStorage.getItem('internData');
//         return storedinternData ? JSON.parse(storedinternData) : null;
//       });
    
//       useEffect(() => {
//         console.log("Fetching data...");
//         if (!internData) {
//             axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/internship/?prnNo=72278496B')
//                 .then(response => {
//                     const internData = response.data;
//                     console.log("Data fetched successfully:", internData);
//                     localStorage.setItem('internData', JSON.stringify(internData));
//                     setinternData(internData);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });
//         }
//     }, [internData]);

//     return (
//         <div>
//             {internData &&(
//             <div className="company-intern">
//                 <div className="intern-info">
//                     <h2 className='comp'>Company - {internData.companyname} <div className="internrole"><h5><i>Role - {internData.internTitle}</i></h5></div> </h2>
//                 </div>
//                 <hr />
//                 <div className="completionlet">
//                     <a href={internData.offerLetter} target="_blank" rel="noopener noreferrer" className="offer_btn">Offer Letter</a>
//                 </div>
//                 <hr />
//                 <div className="interndesc">{internData.internshipDescription}</div>
//             </div>
//             )}
//         </div>
//     )
// }

// export default Internship;

import React, { useState, useEffect } from 'react';
import './Internship.css';
import axios from 'axios';

const Internship = () => {
    const [internData, setInternData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const storedData = localStorage.getItem('internData');
                if (storedData) {
                    setInternData(JSON.parse(storedData));
                } else {
                    console.log("Fetching data from API..");
                    const response = await axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/internship/?prnNo=72278496B');
                    console.log("Successfully fetched data from API..");
                    const newData = response.data;
                    setInternData(newData);
                    localStorage.setItem('internData', JSON.stringify(newData));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {internData.length > 0 && (
                <div className="company-intern">
                    <h1 className='titleintern'>Internship Details</h1>
                    <hr />
                    {internData.map((intern, index) => (
                        <div key={index} className="intern-info">
                            <h2 className='comp'>Company - {intern.companyname} <div className="internrole"><h5><i>Role - {intern.internTitle}</i></h5></div> </h2>
                            <hr />
                            <div className="completionlet">
                                <a href={intern.offerLetter} target="_blank" rel="noopener noreferrer" className="offer_btn">Offer Letter</a>
                            </div>
                            {/* <hr /> */}
                            <div className="interndesc">{intern.internshipDescription}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Internship;
