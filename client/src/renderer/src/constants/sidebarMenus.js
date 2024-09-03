export const sidebarMenus = {
    superAdmin: [
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
      { label: 'Hospitals', icon: 'fas fa-hospital' },
      { label: 'Dealers', icon: 'fas fa-user' },
      { label: 'Notifications', icon: 'fas fa-bell' },
    ],
    dealer: [
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
      { label: 'Inventory', icon: 'fas fa-box', submenu: ['Medicines', 'Medicine Groups'] },
      { label: 'Reports', icon: 'fas fa-chart-line', submenu: ['Payment Reports', 'Sales Reports'] },
      { label: 'Orders', icon: 'fas fa-shopping-cart', submenu: ['Order History', 'Pending Orders'] },
      { label: 'Notifications', icon: 'fas fa-bell' },
      { label: 'Hospitals', icon: 'fas fa-hospital' },
      { label: 'Get Technical Help', icon: 'fas fa-life-ring' },
    ],
    hospital: [
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
      // { label: 'Billing', icon: 'fas fa-file-invoice-dollar', submenu: ['Invoices', 'Payments'] },
      { label: 'Inventory', icon: 'fas fa-box', submenu: ['Medicines', 'Medicine Groups'] },
      { label: 'Reports', icon: 'fas fa-chart-line', submenu: [ 'Sales Reports'] },
      // { label: 'Orders', icon: 'fas fa-shopping-cart', submenu: ['Order History', 'Pending Orders'] },
      // { label: 'Notifications', icon: 'fas fa-bell' },
      { label: 'Dealers', icon: 'fas fa-user' },
      // { label: 'Get Technical Help', icon: 'fas fa-life-ring' },
    ],
  };
  