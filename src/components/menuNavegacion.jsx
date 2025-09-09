import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import netflix01 from "../assets/netflix-01.svg";

const pages = [
  "Inicio",
  "Series",
  "Peliculas",
  "Novedades populares",
  "Mi lista",
  "Explora por idiomas",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {/* {!showVideo && ( // Solo mostrar el AppBar cuando el video NO está activo */}
      <AppBar
        sx={{
          bgcolor: "#141414",
          paddingY: 1,
          position: "fixed",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 4,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <IconButton
                aria-label=""
                onClick={onclick}
                sx={{ cursor: "default" }}
              >
                <img
                  fill="#E50914"
                  src="https://mui.com/static/branding/companies/netflix.svg"
                  alt="logo"
                  style={{ width: "110px", height: "60px" }} // ajusta el tamaño de la imagen
                />
              </IconButton>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,

                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <img
                  src="https://mui.com/static/branding/companies/netflix.svg"
                  alt=""
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#e5e5e5e5",
                    display: "block",
                    fontSize: "1.5 rem",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    "&:hover ": { bgcolor: "rgba(229, 229, 229, 0.5) " },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, cursor: "pointer" }}>
              <SearchIcon fontSize="medium" sx={{ marginRight: 2 }} />{" "}
              {/*duda marginR porque no me sirve en box y no pasarle a cada una la propiedad*/}
              <NotificationsNoneIcon
                fontSize="medium"
                sx={{ marginRight: 2 }}
              />
              {/* 
            <Tooltip title="Open settings"> */}
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, mt: 1, mb: 3, marginRight: 1 }}
              >
                <Avatar
                  src={netflix01}
                  alt="Remy Sharp"
                  width="100%"
                  sx={{ borderRadius: 0, width: 30, height: 30 }}
                />
              </IconButton>
              {/* </Tooltip> */}
              <ArrowDropDownIcon fontSize="medium" />
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* )} */}
    </>
  );
}
export default ResponsiveAppBar;
