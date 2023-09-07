import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const states = ['filling', 'filled'];
  const [status, setStatus] = useState(states[0]);
  const [statusId, setStatusId] = useState(0)

  return (
    <>
      <h1>Cv App</h1>
      {statusId === 0 ? 
        <>
          <h1>filling</h1> 
          <button>Create</button>
        </>
      
      
      : <h1>filled</h1>}
    </>
  )
}

export default App
