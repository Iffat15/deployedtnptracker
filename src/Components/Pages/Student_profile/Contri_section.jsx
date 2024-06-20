// import React from 'react';
// import './Contri_section.css';

// const Contri_section = () => {
//   return (
//     <div className='contri-container'>
//         <h2>Contributions</h2>
//         <hr />
//         <div className="question-container">
//           <h3>Your Contributions</h3>
//           <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
//           <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
//         </div>
//         <button>Contribute now</button>
//     </div>
//   )
// }

// export default Contri_section

// import React from 'react';
// import './Contri_section.css';

// const Contri_section = () => {
//   const handleContributeClick = () => {
//     window.open('./Contri_ques/Contri_ques.jsx', '_blank');
//   };

//   return (
//     <div className='contri-container'>
//         <h2>Contributions</h2>
//         <hr />
//         <div className="question-container">
//           <h3>Your Contributions</h3>
//           <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
//           <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
//         </div>
//         <button onClick={handleContributeClick}>Contribute now</button>
//     </div>
//   )
// }

// export default Contri_section;

// import React, { useState } from 'react';
// import './Contri_section.css';
// import Contri_ques from './Contri_ques/Contri_ques';

// const Contri_section = () => {
//     const [selectedCompany, setSelectedCompany] = useState(null);

//     const handleSolveClick = (companyName) => {
//         setSelectedCompany(companyName);
//     };

//     return (
//         <div className='contri-container'>
//             <h2>Contributions</h2>
//             <hr />
//             <div className="question-container">
//                 <h3>Your Contributions</h3>
//                 <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
//                 <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
//             </div>
//             <button onClick={() => handleSolveClick('Selected Company Name')}>Contribute now</button>
//             {selectedCompany && <Contri_ques companyName={selectedCompany} />}
//         </div>
//     );
// }

// export default Contri_section;

import React from 'react';
import './Contri_section.css';

const Contri_section = () => {
  const handleContributeClick = () => {
    window.open('/contribute', '_blank'); 
  };

  return (
    <div className='contri-container'>
        <h2 className='conth'>Contributions</h2>
        <hr />
        {/* <div className="question-container">
          <h3 className='headingc'>Your Contributions</h3>
          <p className='q'>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
          <p className='q'>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
          <p className='q'>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam explicabo itaque praesentium tenetur excepturi.</p>
          <p className='q'>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora assumenda ad error sequi labore rem aut voluptatibus!</p>
        </div> */}
        <button className='contri-btn' onClick={handleContributeClick}>Contribute now</button>
    </div>
  )
}

export default Contri_section;

