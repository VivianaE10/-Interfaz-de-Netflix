import { IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Stack from "@mui/material/Stack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Icono de flecha para regresar

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    // Muestra el video al hacer clic en el botón de reproducir
    setShowVideo(true);
  };

  // Función para volver al menú principal (mostrar imagen)
  const handleBackClick = () => {
    setShowVideo(false);
  };

  return (
    <>
      <Stack
        sx={{
          position: "relative",
        }}
      >
        <Stack
          sx={{
            objectFit: "cover",

            background:
              "linear-gradient (to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          {!showVideo && (
            <img
              src="https://shotdeck.com/assets/images/stills/thumb/small_8EM5ADI5.jpg"
              width="100%"
              height="auto"
              padding="0"
              display="block"
              alt="Joker"
            />
          )}
          <Stack sx={{ position: "relative", width: "100%" }}>
            {showVideo && (
              <Stack>
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/spAv-FNhOvA?rel=0&autoplay=1&mute=1"
                  title="YouTube video player"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  muted
                  style={{
                    border: "none", // Quitar el borde del iframe
                  }}
                ></iframe>
                <IconButton
                  onClick={handleBackClick}
                  sx={{
                    position: "absolute",
                    // top: "10px", // Posicionar en la esquina superior izquierda
                    // left: "10px",
                    bottom: "450px", // Posicionar en la esquina superior izquierda
                    left: "70px",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Stack>
            )}
          </Stack>
        </Stack>
        {!showVideo && (
          <Stack sx={{ position: "absolute", mt: 30, ml: 8 }}>
            <Button
              variant="contained"
              startIcon={
                <img
                  src="src\assets\netflix-icon.svg" // URL de tu imagen
                  alt="icon"
                  style={{ width: "30px", height: "30px" }} // Ajusta el tamaño de la imagen
                />
              }
              sx={{
                bgcolor: "transparent",
                borderColor: "transparent",
                border: 0,
                maxWidth: 100,
                fontSize: 22,
                ml: 8,
                letterSpacing: 10,
                color: "rgba(109, 109, 110, 1)",
                fontWeight: "bold",
                "&:hover ": {
                  bgcolor: "transparent",
                },
              }}
            >
              PELICULA
            </Button>

            <Typography
              variant="h4"
              sx={{ color: "#fff", mb: 1, mt: 1, fontSize: 40 }}
            >
              Joker
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#fff", mb: 1, fontSize: 25, fontWeight: "bold" }}
            >
              Estreno el viernes
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: "#fff",
                width: "50%",
                maxWidth: "400px", // Establece un ancho máximo
                fontSize: "1.2 vw",
                fontWeight: "normal",
                lineHeight: "normal",
                fontSize: 16,
                mb: 3,
              }}
            >
              Un comediante frustrado y con problemas mentales, que se
              transforma en el violento villano Joker después de enfrentarse al
              rechazo y la marginalidad en una sociedad que lo ignora.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ minWidth: 900, minHeight: 45 }}
            >
              <Button
                variant="outlined"
                startIcon={<PlayArrowIcon sx={{ fontSize: 40, ml: 1 }} />}
                sx={{
                  color: "black",
                  bgcolor: "#fff",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: 17,
                  "&:hover ": { bgcolor: "grey.400", border: "0px " },
                  "& .MuiSvgIcon-root": {
                    fontSize: "40px",
                  },
                }}
                onClick={handlePlayClick} // Reproduce el video al hacer clic
              >
                Reproducir
              </Button>
              <Button
                variant="contained"
                startIcon={<ErrorOutlineIcon sx={{ ml: 2 }} />}
                sx={{
                  bgcolor: "rgba(109, 109, 110, 0.7)",
                  textTransform: "capitalize",
                  fontSize: 17,

                  "&:hover ": { bgcolor: "#333", border: "0px " },
                  "& .MuiSvgIcon-root": {
                    fontSize: "30px",
                  },
                }}
              >
                Mas informacion
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Banner;

// <Stack sx={{ mt: 40, opacity: 100, bgcolor: "red" }}>
// <img src="src/assets/numNetflix.jpg" alt="imagCarrucel" colo />
// </Stack>
