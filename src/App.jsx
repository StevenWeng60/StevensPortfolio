import { useState } from 'react'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import DisplaySwitch from './Miscellaneous/DisplaySwitch';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(true);
  const label = { inputProps: {'aria-label': 'Switch demo'}};

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div className="projectRoot" style={{background: checked ? "grey" : "white"}}>
      <div className='websiteHeader'>
        <h1 className='websiteTitle'>Steven's Portfolio</h1>
        <div className='inlineBlock'>
          <DisplaySwitch
            onChange={handleSwitchChange} 
            inputProps={{'aria-label': 'controlled'}} 
          />
        </div>
      </div>
      <Button variant="contained">Hello world</Button>
    </div>
  )
}

export default App
