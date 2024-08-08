import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <About/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h4>group a</h4>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='tech'>
          Edit <code>src/App.jsx</code> save to test HMR
        </p>
        <p className='btn btn_primary'>new button</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about the app
      </p>
      <div>
        
        <h3 className='tech'>Edit and save to test HMR settings using something new and save to test HMR settings using something new</h3>
      </div>
      
    </>
  )
}

export default App
