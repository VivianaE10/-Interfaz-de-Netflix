// function Carousel({ Peliculas }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {Peliculas.map((pelicula) => (
//           <Stack
//             key={pelicula.id}
//             sx={{
//               backgroundColor: "red",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img
//               src={pelicula.image}
//               alt={pelicula.title}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 objectFit: "cover", // Asegura que las imágenes se ajusten bien
//                 borderRadius: "8px", // Opcional para un borde redondeado
//               }}
//             />
//           </Stack>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;

// scroll
// <Stack
// className="carousel fade"
// data-bs-ride="carousel"
// sx={{
//   position: "relative",
//   overflow: "auto",
//   flexDirection: "row",
//   paddingY: 2,

//   marginBottom: 2,
//   "&::-webkit-scrollbar": { height: "8px" },
//   "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: "#e5e5e5",
//     borderRadius: "0",
//   },
//   "&::-webkit-scrollbar-thumb:hover": {
//     background: "#e5e5e5",
//   },
// }}
// >
// <Container sx={{ display: "flex" }}>
//   {Peliculas.map((pelicula) => (
//     <ImgMediaCard key={pelicula.id} image={pelicula.image} />
//   ))}
// </Container>
// </Stack>
