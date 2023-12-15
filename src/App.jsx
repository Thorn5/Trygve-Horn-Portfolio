// App.jsx
// import React from 'react'
import './App.css'
import { HeaderBar, MainContent, PortFolioTheme } from './assets/PortFolioTheme.jsx';
import { BodyArea } from './components/BodyArea.jsx';
import { HeaderAppBar } from './components/HeaderAppBar.jsx'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return ( // Theme Nesting
    <>
      <CssBaseline />
      <PortFolioTheme theme={HeaderBar}>
        <HeaderAppBar />
        {/* <PortFolioTheme theme={MainContent}>
          <BodyArea />
        </PortFolioTheme> */}
      </PortFolioTheme>
    </>
  )
}

export default App;