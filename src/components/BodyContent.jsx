// BodyContent.jsx (!BodyArea.jsx)
import { useState, useEffect } from "react";
import { CssBaseline, Container, } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing.jsx";
import { AboutMe } from "./Pages/AboutMe.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { TrygveHornCV } from "./Pages/TrygveHornCV.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { NotFound } from "./Pages/NotFound.jsx";
import { AboutSite } from "./Pages/AboutSite.jsx";

export const BodyContent = () => {

//  // Use useState and useEffect to manage viewport height and dynamically set iFrame height
//  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

//  useEffect(() => {
//    const handleResize = () => {
//      setViewportHeight(window.innerHeight);
//    };

//    window.addEventListener("resize", handleResize);
//    handleResize(); // Call once on initial render

//    return () => window.removeEventListener("resize", handleResize);
//  }, []);

//  const iFrameHeight = viewportHeight * 0.9; // Calculate 90% height

  return (
    <>
      <CssBaseline />
      <Container> 
        <Routes>
          <Route path="/" element={<Landing id='Landing'/>} />
          <Route path="/AboutMe" element={<AboutMe id='AboutMe'/>} />
          <Route path="/TrygveHornCV" element={<TrygveHornCV id='TrygveHornCV' />} />
          <Route path="/Projects" element={<Projects id='Projects'/>} />
          <Route path="/AboutSite" element={<AboutSite id='AboutSite'/>} />
          <Route path="/Contact" element={<Contact id='Contact'/>} />
          <Route path="*" element={<NotFound id='NotFound' />} />
        </Routes>
      </Container>
    </>
  );
};
