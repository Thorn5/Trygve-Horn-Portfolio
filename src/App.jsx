// App.jsx
// import React from 'react'
import './App.css'
import { ResponsiveAppBar_Light, MainContent_Light, PortFolioTheme } from './assets/PortFolioTheme.jsx';
import { ResponsiveAppBar } from './components/ResponsiveAppBar'

function App() {
  return (
    <>
      <PortFolioTheme theme={ResponsiveAppBar_Light}>
        <ResponsiveAppBar />
      </PortFolioTheme>
      <PortFolioTheme theme={MainContent_Light}>
        <ResponsiveAppBar />
      </PortFolioTheme>
    </>
  )
}

export default App;
