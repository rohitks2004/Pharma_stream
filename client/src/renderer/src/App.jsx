import Login from "./components/Login";
import Sidebar from "./components/sideBar";
import {  Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.userSlice.user);

  return (
      <Routes>

      {/* Root path redirect to login or sideBar based on authentication */}
      <Route path="/" element={user ? <Navigate to="/sideBar" /> : <Navigate to="/Login" />} />

      {/* Login route */}
      <Route path="/Login" element={!user ? <Login /> : <Navigate to="/sideBar" />} />

      {/* Sidebar route */}
      <Route path="/sideBar" element={user ? <Sidebar /> : <Navigate to="/Login" />} />

      {/* Catch-all route to handle undefined paths */}
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>    
  );
}

export default App;
