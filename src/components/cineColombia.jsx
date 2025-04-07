import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Stack, Typography } from "@mui/material";
import CardCine from "./cardCine";
import Footer from "./footerCineColom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function CineColombia() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: 120,
          backgroundColor: "#001F54",
          position: "fixed",
          top: 0,
          zIndex: 1200,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "40px",
              },
              mr: 3,
              ml: 5,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Stack sx={{ marginLeft: 4, marginRight: 85 }}>
            <img
              height="190"
              width="190"
              src="https://archivos.cinecolombia.com/cineco-cms-frontend/1.0.123/dist/images/logo_cineco.svg"
            />
          </Stack>

          <Search sx={{ mr: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "35px",
              },
            }}
          >
            <PersonPinIcon />
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack sx={{ mt: 15, backgroundColor: "#f0f4f6" }}>
        <img
          src="https://scontent.feoh3-1.fna.fbcdn.net/v/t31.18172-8/1979243_1109258235754514_9164622250461825716_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0327a3&_nc_ohc=q1UhpiASXLQQ7kNvgEhpX1n&_nc_ht=scontent.feoh3-1.fna&_nc_gid=A7BU1u_Ghskvn0O0N54TKbh&oh=00_AYDMx6UWtJXS2ojeQmdOsWiD10VQKY6DsQCbb9dZI9eqpA&oe=670467BB"
          alt=""
          style={{
            width: "100%", // El ancho ocupará todo el espacio disponible
            objectFit: "cover", // Mantiene las proporciones sin distorsió
            maxHeight: "100", //Esto limita la altura máxima a 400px para que la imagen no sea tan larga
            display: "block",
            opacity: "0.8",
          }}
        />
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#F4F5F8",
          fontSize: 30,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#001F54", mb: 2, mt: 4, fontWeight: "600" }}
        >
          Actualiza tus peliculas favoritas
        </Typography>
      </Stack>

      <Stack>
        <CardCine />
      </Stack>

      {/* <Stack
        sx={{
          backgroundColor: "#001F54",
          // position: "absolute",
          // mt: 80,
          // ml: 10,
        }}
      ></Stack> */}
      <Stack>
        <Footer />
      </Stack>
    </Box>
  );
}
