import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Players from './Players'





function App() {
  const [visible, setVisible] = useState(false)

const handleToggle = () => {
  setVisible(!visible)
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={"https://cdn.nba.com/headshots/nba/latest/1040x760/893.png"} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Historical Shot Tracking Data</h1>
      
      <div className="card">
        <button onClick={handleToggle}>
          1986
        </button>
        {visible && <Players />}
        <button >
          1987
        </button>
        <button>
          1988
        </button>
        <button>
          1989
        </button ><button>
          1990
        </button><button>
          1991
        </button><button>
          1992
        </button><button>
          1993
        </button><button>
          1994
        </button><button>
          1995
        </button><button>
          1996
        </button>
        
        <p>

        </p>
      </div>
    </>
  )
}

export default App
