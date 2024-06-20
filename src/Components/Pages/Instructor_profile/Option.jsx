import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Option.css';

const Option = () => {
  return (
    <div className='Option-container'>
        <ul>
          <li><a href="#" className='Option-link'></a></li>
            <li><Link to="/userinfo" style={{textDecoration:"none"}} className='Option-link'>User Info</Link></li>
            <li><Link to="/StudentList" style={{textDecoration:"none"}}className='Option-link'>Student List</Link></li>
            <li><Link to="/StaticsticStudent" style={{textDecoration:"none"}} className='Option-link'>Statistics of Student</Link></li>
        </ul>
    </div>
  );
}

export default Option;