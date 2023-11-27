// App.jsx
// import React from 'react'
import './App.css'
import { HeaderAppBar_Light, MainContent_Light, PortFolioTheme } from './assets/PortFolioTheme.jsx';
import { BodyBox } from './components/BodyBox.jsx';
import { HeaderAppBar } from './components/HeaderAppBar.jsx'


function App() {
  return (
    <>
      <PortFolioTheme theme={HeaderAppBar_Light}>
        <HeaderAppBar />
      </PortFolioTheme>
      <PortFolioTheme theme={MainContent_Light}>
        <BodyBox />
      </PortFolioTheme>
    </>
  )
}

export default App;
