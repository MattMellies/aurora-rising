import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { constants } from "./navBarConstants.js";
import { Link } from "@mui/material";
import Logo from "../../assets/images/logo.png";

const pages = constants.navBarItems;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#b4dac3" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"} sx={{ marginRight: { xs: "0", md: "5em" } }}>
            <img src={Logo} alt="Aurora Rising" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "#1d1640" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(page =>
                <MenuItem
                  key={`${page.label}-mobile`}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    href={page.path}
                    sx={{
                      textAlign: "center",
                      color: "#1d1640",
                      textDecoration: "none"
                    }}
                  >
                    {page.label}
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page =>
              <Link
                key={page.label}
                href={page.path}
                sx={{ color: "#1d1640", textDecoration: "none" }}
              >
                <Button
                  key={page.label}
                  tabIndex={-1}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", color: "#1d1640" }}
                >
                  {page.label}
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
