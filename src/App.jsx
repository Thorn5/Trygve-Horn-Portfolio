// App.jsx
// import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from 'react-router-dom';
import { HeaderBar, MainContent, PortFolioTheme, } from "./assets/PortFolioTheme.jsx";
import { HeaderAppBar } from "./components/HeaderAppBar.jsx";
import { BodyContent } from "./components/BodyContent.jsx";
import { FetchApiData } from "./assets/Fetch/FetchApiData.jsx";

function App() {
  FetchApiData();
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <PortFolioTheme theme={HeaderBar}>
          <HeaderAppBar />
          <PortFolioTheme theme={MainContent}>
            <BodyContent />
          </PortFolioTheme>
        </PortFolioTheme>
      </BrowserRouter>
    </>
  );
}

export default App;
