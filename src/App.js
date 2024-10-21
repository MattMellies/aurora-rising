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
import { Link } from "@mui/material";
import Logo from "./assets/images/logo.png";

function App() {
  return (
    <Box component={"div"} className="App">
      <Box component={"header"} id="navbar">
        <Box component={"div"} id="navbarLogoContainer">
          <Link href={"/"}>
            <img id="navbarLogo" src={Logo} alt="Home"/>
          </Link>
        </Box>
        <NavBar />
      </Box>
      <Box component={"main"}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Box>
      <Box component={"footer"}>
        <p>© Aurora Rising Ltd. 2024</p>
      </Box>
    </Box>
  );
}

export default App;
