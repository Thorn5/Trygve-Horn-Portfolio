// BodyContent.jsx (!BodyArea.jsx)
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AboutMe } from "./Pages/AboutMe";

export const BodyContent = () => {
  return (
    <>
      <CssBaseline />
      <Container 
      maxWidth="sm"
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <>
            <AboutMe />
          </>
        </Box>
      </Container>
    </>
  );
};
