import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Stack sx={{ backgroundColor: "#F4F5F8" }}>
        <Stack sx={{ ml: 7, mr: 7 }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#dce0e5" }}>
              <Toolbar
                variant="dense"
                sx={{ color: "#4f627b", cursor: "pointer" }}
              >
                <Stack sx={{ marginLeft: 4, marginRight: 25 }}>
                  <img
                    height="130"
                    width="130"
                    src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.123/dist/images/logo_cineco_blue.svg"
                  />
                </Stack>
                <Stack
                  sx={{ mr: 2, fontSize: "0,75rem" }}
                  // sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="">Informacion legal |</Typography>
                </Stack>

                <Stack sx={{ mr: 2 }}>
                  <Typography variant="">Acerca de Cineco |</Typography>
                </Stack>
                <Stack sx={{ mr: 2 }}>
                  <Typography variant="">Contactanos PQRS |</Typography>
                </Stack>

                <Stack sx={{ mr: 2 }}>
                  <Typography variant="">Preguntas frecuentes |</Typography>
                </Stack>

                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, m: 4, gap: 2 }}
                >
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </IconButton>
              </Toolbar>
              <Stack sx={{ mb: 4, color: "#4f627b", textAlign: "center" }}>
                <Typography variant="">@ 2024 Cine Colombia </Typography>
              </Stack>
            </AppBar>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
