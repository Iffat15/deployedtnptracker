// import React from 'react';
// import './company_cards.css';
// import logoc from '../Assets/google_logo.jpg';

// const CompanyCards = () => {
//     const handleSolveClick = () => {
//         window.open('/questions', '_blank'); // Open a new window for the Questions page
//     };

//     return (
//         <div>
//             <div className="comp-box">
//                 <div className="comp-head">
//                     <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
//                         <img src={logoc} alt="Google Logo" />
//                     </a>
//                     <h3 className='compname'>Google</h3>
//                 </div>
//                 <div className="cardbody">
//                     <h1>25</h1>
//                     <p>Total Problems</p>
//                     <button className='solve' onClick={handleSolveClick}>Solve</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CompanyCards;

// import React, { useState, useEffect } from 'react';
// import './company_cards.css';
// import logoc from '../Assets/google_logo.jpg';
// import axios from 'axios';

// const CompanyCards = () => {
//     const handleSolveClick = () => {
//         window.open('/questions', '_blank'); // Open a new window for the Questions page
//     };
//     const [usercomp, setUsercomp] = useState(() => {
//         const storedUsercomp = localStorage.getItem('usercomp');
//         return storedUsercomp ? JSON.parse(storedUsercomp) : null;
//       });
//       useEffect(() => {
//         if (!usercomp) {
//           axios.get('https://placement-internship-tracker-backend-mu.vercel.app/api/students/student/questions/?prnNo=72278496B&companyname=Amazon')
//             .then(response => {
//               const usercompData = response.data;
//               localStorage.setItem('usercomp', JSON.stringify(usercompData));
//               setUsercomp(usercompData);
//             })
//             .catch(error => {
//               console.error('Error fetching data:', error);
//             });
//         }
//       }, [usercomp]);

//     return (
//         <div>
//             {usercomp && ( 
//             <div className="comp-box">
//                 <div className="comp-head">

//                         <img src={usercomp.companylogo} alt="company Logo" />

//                     <h3 className='compname'>{usercomp.companyname}</h3>
//                 </div>
//                 <div className="cardbody">
//                     <h1>25 +</h1>
//                     <p>Total Contributions</p>
//                     <button className='solve' onClick={handleSolveClick}>Solve</button>
//                 </div>
//             </div>
//             )}
//         </div>
//     );
// };

// export default CompanyCards;


// import React, { useState, useEffect } from 'react';
// import './company_cards.css';
// import axios from 'axios';
// import logoc from '../Assets/google_logo.jpg';

// const CompanyCards = ({
//     compname,
//     complogo,

//     handleSolveClick = () => {
//         window.open('/questions', '_blank'); // Open a new window for the Questions page
//     };

// }) => {



//     return (
//         <div>
//             <div className="comp-box">
//                 <div className="comp-head">
//                     <img src={complogo} alt='compname' />

//                     <h3 className='compname'>{compname}</h3>
//                 </div>
//                 <div className="cardbody">
//                     <h1>25</h1>
//                     <p>Total Problems</p>
//                     <button className='solve' onClick={handleSolveClick}>Solve</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CompanyCards;




import React from 'react';
import './company_cards.css';
import logoc from '../Assets/google_logo.jpg';

const CompanyCards = ({ compname, complogo, handleSolveClick }) => {
    const openQuestionsPage = () => {
        window.open('/questions', '_blank');
    };

    // Conditionally render based on the presence of compname and complogo
    if (!compname || !complogo) {
        return null; // Don't render anything if compname or complogo is missing
    }

    return (
        <div>
            <div className="comp-box">
                <div className="comp-head">
                    <img src={complogo} alt={compname} />
                    <h3 className='compname'>{compname}</h3>
                </div>
                <div className="cardbody">
                    <h1>25</h1>
                    <p>Total Problems</p>
                    <button className='solve' onClick={handleSolveClick || openQuestionsPage}>Solve</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCards;

