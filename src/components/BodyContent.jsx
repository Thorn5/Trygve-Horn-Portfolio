// BodyContent.jsx (!BodyArea.jsx)
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { AboutMe } from "./Pages/AboutMe";

export const BodyContent = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <AboutMe />
      </Box>
    </>
  );
};
