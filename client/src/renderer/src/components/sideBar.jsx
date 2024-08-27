import React, { useState } from 'react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
          <span>Pharma Stream</span>
      </div>
      <div className="sidebar-profile">
        <img src="logo.jpg" alt="Profile" className="profile-img" />
        <div className="profile-info">
          <span className="profile-name">Pharma Stream</span>
          <span className="profile-role">Admin</span>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </li>
        <li className="sidebar-item" onClick={() => toggleMenu('billing')}>
          <i className="fas fa-file-invoice-dollar"></i> Billing
          <i className={`fas fa-chevron-${activeMenu === 'billing' ? 'up' : 'down'}`}></i>
        </li>
        {activeMenu === 'billing' && (
          <ul className="submenu">
            <li>Invoices</li>
            <li>Payments</li>
          </ul>
        )}
        <li className="sidebar-item" onClick={() => toggleMenu('inventory')}>
          <i className="fas fa-box"></i> Inventory
          <i className={`fas fa-chevron-${activeMenu === 'inventory' ? 'up' : 'down'}`}></i>
        </li>
        {activeMenu === 'inventory' && (
          <ul className="submenu">
            <li>Medicines</li>
            <li>Medicine Groups</li>
          </ul>
        )}
        <li className="sidebar-item" onClick={() => toggleMenu('reports')}>
          <i className="fas fa-chart-line"></i> Reports
          <i className={`fas fa-chevron-${activeMenu === 'reports' ? 'up' : 'down'}`}></i>
        </li>
        {activeMenu === 'reports' && (
          <ul className="submenu">
            <li>Payment Reports</li>
            <li>Sales Reports</li>
          </ul>
        )}
        <li className="sidebar-item" onClick={() => toggleMenu('orders')}>
          <i className="fas fa-shopping-cart"></i> Orders
          <i className={`fas fa-chevron-${activeMenu === 'orders' ? 'up' : 'down'}`}></i>
        </li>
        {activeMenu === 'orders' && (
          <ul className="submenu">
            <li>Order History</li>
            <li>Pending Orders</li>
          </ul>
        )}
        <hr/>
        <li className="sidebar-item">
          <i className="fas fa-bell"></i> Notifications <span className="notification-dot"></span>
        </li>
        <li className="sidebar-item">
          <i className="fas fa-user"></i> Dealer
        </li>        
        <hr/>
        <li className="sidebar-item">
          <i className="fas fa-life-ring"></i> Get Technical Help
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
