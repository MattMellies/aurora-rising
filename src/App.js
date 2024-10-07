import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/home/index.js";
import About from "./pages/about/index.js";
import Services from "./pages/services/index.js";
import FAQ from "./pages/faq/index.js";
import Contact from "./pages/contact/index.js";
import { Box } from "@mui/system";
import { Grid2 } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box component={"div"} className="App">
      <Box
        component={"div"}
        sx={{
          background: "#1d1640",
          display: { xs: "none", lg: "block" },
          height: "100%",
          overflow: "hidden",
          width: "15%",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1
        }}
      />
      <Box component={"header"} className="App-header">
        <NavBar />
      </Box>
      <Box component={"main"}>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 0, lg: 5 }} />
          <Grid2 size={{ xs: 12, lg: 7 }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          </Grid2>
        </Grid2>
      </Box>
      <Box component={"footer"} sx={{ zIndex: "999", position: "relative" }}>
        <p>footer</p>
      </Box>
    </Box>
  );
}

export default App;
