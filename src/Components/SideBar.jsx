import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='sidebar-title'>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/it">
            <BsGrid1X2Fill className='icon'/> IT
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/comp">
            <BsFillArchiveFill className='icon'/> Comp
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/entc">
            <BsFillGrid3X3GapFill className='icon'/> ENTC
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dream-offers">
            <BsPeopleFill className='icon'/> Dream Offers
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/inventory">
            <BsListCheck className='icon'/> Inventory
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/reports">
            <BsMenuButtonWideFill className='icon'/> Reports
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon'/> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
