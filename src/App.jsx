import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='websiteHeader'>
        <h1>Steven's Portfolio</h1>
      </div>
        <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
