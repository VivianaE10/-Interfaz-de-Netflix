import "./App.css";
import ResponsiveAppBar from "./components/menuNavegacion";
import ImgMediaCard from "./components/card";
import { peliculas } from "./constantes/peliculas";
import { Stack, Typography } from "@mui/material";
import Banner from "./components/banner";
import { pelis } from "./constantes/movies";
import { pelis2 } from "./constantes/movies2";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./components/flechas";

// Configuración del carrusel
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function App() {
  // const [count, setCount] = useState(0);
  const [Peliculas, setPeliculas] = useState(peliculas);
  const [LisPelis, setLisPelis] = useState(pelis);
  const [LisPelis2, setLisPelis2] = useState(pelis2);

  return (
    <>
      <ResponsiveAppBar />
      <Banner />

      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Lo nuevo de Netflix
        </Typography>
      </Stack>

      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings} sx={{ ml: 2 }}>
          {Peliculas.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "bold",
            mt: 3,
          }}
        >
          Lo Mas Popular
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings}>
          {LisPelis.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "bold",
            mt: 3,
          }}
        >
          Peliculas Emocionantes
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings}>
          {LisPelis2.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>

      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "bold",
            mt: 2,
          }}
        >
          Lo nuevo de Netflix
        </Typography>
      </Stack>

      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings} sx={{ ml: 2 }}>
          {Peliculas.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            mt: 3,
          }}
        >
          Lo Mas Popular
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings}>
          {LisPelis.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            color: "#e5e5e5",
            marginLeft: 8,
            fontSize: 18,
            cursor: "pointer",
            mt: 3,
          }}
        >
          Peliculas Emocionantes
        </Typography>
      </Stack>
      <Stack sx={{ marginLeft: 8, mt: 1, marginRight: 8 }}>
        <Slider {...sliderSettings}>
          {LisPelis2.map((pelicula) => (
            <ImgMediaCard key={pelicula.id} image={pelicula.image} />
          ))}
        </Slider>
      </Stack>
    </>
  );
}

export default App;
