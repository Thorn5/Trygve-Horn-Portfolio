// BodyContent.jsx (!BodyArea.jsx)
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Routes, Route } from 'react-router-dom';
import { Landing } from "./Pages/Landing.jsx";
import { AboutMe } from "./Pages/AboutMe.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { TrygveHornCV } from "./Pages/TrygveHornCV.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { AboutSite } from "./Pages/AboutSite.jsx"; 

export const BodyContent = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/TrygveHornCV" element={<TrygveHornCV />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutSite" element={<AboutSite />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};

