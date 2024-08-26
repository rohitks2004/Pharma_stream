import LoginSignup from "./components/LoginSignup"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <LoginSignup/>
    </>
  )
}

export default App

