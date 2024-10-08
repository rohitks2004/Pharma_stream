import React, { useEffect } from "react";
import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Sidebar from "./components/sideBar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Header from "./components/Header";
import HeadBar from "./components/HeadBar";
import MedicineGroups from "./pages/MedicineGroups";
import Dealer from './pages/Dealer';
import Reports from "./pages/Reports";
import OrderHistory from './pages/OrderHistory';
import PendingOrders from './pages/PendingOrders';
function App() {
  const user = useSelector((state) => state.userSlice.user);
  const location = useLocation();
  const curRoute = location.pathname.split("/")[1] // Split by "/" and get the main path
  const currentRoute = location.pathname.split("/").join(" "); // Split by "/" and get the main path
  const routeDesc = {
    dashboard: "A quick data overview of inventory.",
    inventory: "List of medicines available for sale.",
    reports: "Overall reports.",
    orders: "Overall orders made.",
    notifications: "",
    dealers: "",
    billing: ""
  };

  function Layout() {
    return user ? (
      <div className="layout">
        <Sidebar curRoute={curRoute}/>
        <div className="right">
          <HeadBar />
          <Header heading={currentRoute} desc={routeDesc[currentRoute]} />
          <Outlet />
        </div>
      </div>
    ) : (
      <Navigate to="/login" /> // Correct path to `/login`
    );
  }

  useEffect(() => {
    console.log(currentRoute);
    // console.log(curRoute);
  }, [currentRoute]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports/sales-reports" element={<Reports/>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        {/* <Route path="/inventory" element={<Inventory />} /> */}
        <Route path="/reports" element={<h1>Report</h1>} />
        <Route path="/orders/order-history" element={<OrderHistory/>} />
        <Route path="/orders/pending-orders" element={<PendingOrders/>} />        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/medicines" element={<Inventory />} />
        <Route path="/inventory/medicine-groups" element={<MedicineGroups />} />
        <Route path="/billing" element={<h1>Billing</h1>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/dealers" element={<Dealer />} />
        <Route path="/hospitals" element={<h1>Hospital</h1>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
