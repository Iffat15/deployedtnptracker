import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import StudLogin from './Components/Pages/Student_profile/Profile';
import InstLogin from './Components/Pages/Instructor_profile/ProInfo'
import Login from './Components/Pages/Login/Login';
import AdminLogin from './Components/Pages/Login/AdminLogin'
import Placement from './Components/Pages/Placement/Placement';
import Internship from './Components/Pages/Internship/Internship';
import Questions from './Components/Questions/Questions';
import Contribute from './Components/Pages/Student_profile/Contri_ques/Contri_ques';
import Statistics2 from './Components/Statistics2/Statistics2';
import Announcement from './Components/Announcement/Announcement';
import Testimonials from './Components/Testimonialss';
import EditStud from './Components/Pages/Student_profile/Edit_Profile/EditStud';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Hero/>}/>
          {/* <Route path="/statistics" element={<Statistics/>}/> */}
          <Route path="/placements" element={<Placement/>}/>
          <Route path="/internships" element={<Internship/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/adlogin" element={<AdminLogin/>}/>
          <Route path="/studlogin" element={<StudLogin/>}/>
          <Route path="instlogin" element={<InstLogin/>}/>
          <Route path="/studprofedit" element={<EditStud/>} />
          <Route path="/questions" element={<Questions />} /> 
          <Route path="/contribute" element={<Contribute />} /> 
          <Route path="/statistics2" element={<Statistics2 />} />
          <Route path="/announcement" element={<Announcement />} /> 
          <Route path="/testimonials" element={<Testimonials />} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Login from './Components/Pages/Login/Login';
// import Profile from './Components/Pages/Student_profile/Profile'; 
// import Placement from './Components/Pages/Placement/Placement';
// import Internship from './Components/Pages/Internship/Internship';
// import Questions from './Components/Questions/Questions';
// import Contribute from './Components/Pages/Student_profile/Contri_ques/Contri_ques';
// import Statistics2 from './Components/Statistics2/Statistics2';
// import Announcement from './Components/Announcement/Announcement';
// import Testimonials from './Components/Testimonialss';
// import EditStud from './Components/Pages/Student_profile/Edit_Profile/EditStud';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Hero/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/profile" element={<Profile/>}/> {/* Add the route for profile */}
//           <Route path="/placements" element={<Placement/>}/>
//           <Route path="/internships" element={<Internship/>}/>
//           <Route path="/studprofedit" element={<EditStud/>} />
//           <Route path="/questions" element={<Questions />} /> 
//           <Route path="/contribute" element={<Contribute />} /> 
//           <Route path="/statistics2" element={<Statistics2 />} />
//           <Route path="/announcement" element={<Announcement />} /> 
//           <Route path="/testimonials" element={<Testimonials />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

