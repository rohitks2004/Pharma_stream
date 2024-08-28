import Login from "./pages/Login";
import Sidebar from "./components/sideBar";
import {  Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";

function App() {
  const user = useSelector((state) => state.userSlice.user);

  function Layout (){
    return(
      user?
     <div className="layout">
      <Sidebar/>
      <div className="right">
        <Outlet/>
      </div>
     </div> :
     <Navigate to="Login"/>
    )
  }
  return (
      <Routes>

      <Route element={<Layout/>}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/report" element={<h1>report</h1>} />
        <Route path="/orders" element={<h1>orders</h1>} />
        <Route path="/inventory" element={ <Inventory/> } />
        <Route path="/billing" element={<h1>billing</h1>} />
        <Route path="/notifications" element={<h1>Notifications </h1>} />
        <Route path="/dealers" element={<h1>Dealers</h1>} />
      </Route>
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/sideBar" element={user ? <Sidebar /> : <Navigate to="/Login" />} /> */}

      <Route path="*" element={<Navigate to="/" />} />
      </Routes>    
  );
}

export default App;
