import React, { useState } from 'react';
import { VscKebabVertical } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sidebarMenus } from '../constants/sidebarMenus';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const  user  = useSelector((state)=>state.userSlice.user);
  const role =user.userType;
  const [dropmenu , setDropmenu] = useState(false);
  const handledropmenu = () => {
    (activeMenu == true ) ? setDropmenu(false) : setDropmenu(true);
  }
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const Dropmenu = ()=>{
    return <div>dropmenu</div>
  }
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
      <div className="sidebar-profile">
        <img src="logo.jpg" alt="Profile" className="profile-img" />
        <div className="profile-info">
          <span className="profile-name">Pharma Stream</span>
          <span className="profile-role">{role}</span>
        </div>
        <div className="icon-div">
        <VscKebabVertical className='icon-buttons' onClick={handledropmenu}/>
        </div>
        {dropmenu &&  <Dropmenu/>}
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
    </div>
  );
};

export default Sidebar;
