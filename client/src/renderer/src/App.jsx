import Login from "./components/Login"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Login/>
    </>
  )
}

export default App

