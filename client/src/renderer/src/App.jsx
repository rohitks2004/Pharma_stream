import Login from "./pages/Login";
import Sidebar from "./components/sideBar";
import {  Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import { useEffect } from "react";
import Header from "./components/Header";
import HeadBar from "./components/HeadBar";

function App() {
  const user = useSelector((state) => state.userSlice.user);
  const currentRoute = useLocation().pathname.slice(1);
  const routeDesc ={ 
    dashboard : "A quick data overview of inventory.",
    inventory : "List of medicines available for sale.",
    reports : "Overall reports.",
    orders:"Overall orders made.",
    notifications:"",
    dealers:"",
    billing:""
  }
  function Layout (){
    return(
      user?
     <div className="layout">
      <Sidebar/>
      <div className="right">
        <HeadBar/>
        <Header heading={currentRoute} desc={routeDesc[currentRoute]}/>
        <Outlet/>
      </div>
     </div> :
     <Navigate to="Login"/>
    )
  }
  useEffect(()=>{
    console.log(currentRoute)
  },[currentRoute])
  return (
      <Routes>

      <Route element={<Layout/>}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/reports" element={<h1>report</h1>} />
        <Route path="/orders" element={<h1>orders</h1>} />
        <Route path="/inventory" element={ <Inventory/> } />
        <Route path="/billing" element={<h1>billing</h1>} />
        <Route path="/notifications" element={<h1>Notifications </h1>} />
        <Route path="/dealers" element={<h1>Dealers</h1>} />
        <Route path="/hospitals" element={<h1>Hospital</h1>} />
      </Route>
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/sideBar" element={user ? <Sidebar /> : <Navigate to="/Login" />} /> */}

      <Route path="*" element={<Navigate to="/" />} />
      </Routes>    
  );
}

export default App;
