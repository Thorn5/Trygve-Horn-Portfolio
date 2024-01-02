// App.jsx
import React from 'react'
import "./App.css";
import { HeaderBar, MainContent, PortFolioTheme, } from "./assets/PortFolioTheme.jsx";
import { AboutMe } from "./components/Pages/AboutMe.jsx";
import { BodyContent } from "./components/BodyContent.jsx";
import { HeaderAppBar } from "./components/HeaderAppBar.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { TrygveHornCV } from "./components/Pages/TrygveHornCV.jsx";
import { Projects } from "./components/Pages/Projects.jsx";
import { Contact } from "./components/Pages/Contact.jsx";

function App() {
  return (
    // Theme Nesting
    <>
      <CssBaseline />
      <PortFolioTheme theme={HeaderBar}>
        <HeaderAppBar />
        <PortFolioTheme theme={MainContent}>
          <AboutMe />
          {/* <TrygveHornCV />
          <Projects />
          <Contact />
          <BodyContent /> */}
        </PortFolioTheme>
      </PortFolioTheme>
    </>
  );
}

export default App;
