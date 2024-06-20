import React, { useState } from 'react';
import './Statistics2.css';
import Header from '../../Components/Header.jsx';
import Sidebar from '../../Components/SideBar.jsx';
import Home from '../../Components/Home/Home';

const Dash = () => {
  // const bodyStyles = {
  //   backgroundColor: 'lightblue',
  //   padding: '20px',
  // };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
};

export default Dash;
