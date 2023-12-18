// App.jsx
import React from 'react'
import "./App.css";
import { HeaderBar, MainContent, PortFolioTheme, } from "./assets/PortFolioTheme.jsx";
import { AboutMe } from "./components/AboutMe.jsx";
import { BodyArea } from "./components/BodyArea.jsx";
import { HeaderAppBar } from "./components/HeaderAppBar.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { TrygveHornCV } from "./components/TrygveHornCV.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  return (
    // Theme Nesting
    <>
      <CssBaseline />
      <PortFolioTheme theme={HeaderBar}>
        <HeaderAppBar />
        <PortFolioTheme theme={MainContent}>
          <AboutMe />
          <TrygveHornCV />
          <Projects />
          <Contact />
          <BodyArea />
        </PortFolioTheme>
      </PortFolioTheme>
    </>
  );
}

export default App;
