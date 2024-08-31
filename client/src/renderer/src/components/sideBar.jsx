import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sidebarMenus } from '../constants/sidebarMenus';
import { logout } from '../redux/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState('');
  const  user  = useSelector((state)=>state.userSlice.user);
  const role =user.userType;
  const handleLogout = ()=>{
    dispatch(logout())
  }
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };
  const renderSubMenu=(submenu)=>{
    return(
      <ul className="submenu">
        {submenu.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
          <span>Pharma Stream</span>
      </div>
      <div className="sidebar-desc">
        <div className='sidebar-profile'>
          <img src="logo.jpg" alt="Profile" className="profile-img" />
          <div className="profile-info">
            <span className="profile-name">Pharma Stream</span>
            <span className="profile-role">{role}</span>
          </div>
        </div>
      </div>
      <ul className="sidebar-menu">
        {sidebarMenus[role]?.map((item,index)=>(
         <div key={index}>
         <li 
          key={index}
          className='sidebar-item'
          onClick={()=>toggleMenu(item.label.toLowerCase())} >
            <i className={item.icon} />
            <Link to={item.label.toLowerCase()}>
            {item.label}
            </Link>
            {item.submenu &&(
              <i className={`fas fa-chevron-${activeMenu===item.label.toLowerCase()?'up':'down'}`}></i>
            )}
            </li>
            {activeMenu===item.label.toLowerCase() && item.submenu && renderSubMenu(item.submenu)}
        </div >
        ))}
      </ul>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
