import { useState } from 'react'
// Components below
import DisplaySwitch from './Miscellaneous/DisplaySwitch';
import IntroBody from './IntroBody';
import ProjectBody from './ProjectBody';
import Navbar from './Navbar';
// Material UI Imports below
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mod: 'dark',
  },
});

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const label = { inputProps: {'aria-label': 'Switch demo'}};

  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    // Using Material UI's Theme Provider to inject the default dark theme into the app
    <ThemeProvider theme={darkTheme}>
      <div className="projectRoot">
        <Navbar/>
        <div>
          <IntroBody/>
        </div>
        <div>
          <ProjectBody/>
        </div>
        <p style={{color: '#CB4C4E'}}>asdklfjadsklfjaskdl;fjkasljfadskljfsalk;dfjsaklfjaslk;djfsdkl;fj;l</p>
        <br></br>
        <Button variant="contained">Hello world</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
