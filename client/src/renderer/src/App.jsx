import Login from "./components/Login"
import Sidebar from "./components/sideBar"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App

