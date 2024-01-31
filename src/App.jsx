// App.jsx
import React from 'react'
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Theme, PortFolioTheme, } from "./assets/PortFolioTheme.jsx";
import { HeaderAppBar } from "./components/HeaderAppBar.jsx";
import { AboutMe } from "./components/Pages/AboutMe.jsx";
import { Projects } from "./components/Pages/Projects.jsx";
import { TrygveHornCV } from "./components/Pages/TrygveHornCV.jsx";
import { Contact } from "./components/Pages/Contact.jsx";



function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <PortFolioTheme theme={Theme}>
          <HeaderAppBar />
          <Routes>
            <Route exact path="/" element={<AboutMe />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/TrygveHornCV" element={<TrygveHornCV />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </PortFolioTheme>
      </BrowserRouter>
    </>
  );
}

export default App;

