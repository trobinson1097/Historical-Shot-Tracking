import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={"https://cdn.nba.com/headshots/nba/latest/1040x760/893.png"} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Historical Shot Tracking Data</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
    </>
  )
}

export default App
