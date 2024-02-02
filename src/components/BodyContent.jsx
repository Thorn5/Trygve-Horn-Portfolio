// BodyContent.jsx (!BodyArea.jsx)
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Landing } from "./Pages/Landing.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { TrygveHornCV } from "./Pages/TrygveHornCV.jsx";
import { Contact } from "./Pages/Contact.jsx";



export const BodyContent = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/TrygveHornCV" element={<TrygveHornCV />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Box>
    </>
  );
};

