
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App

