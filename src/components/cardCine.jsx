import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import * as React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { IconButton, TextField } from "@mui/material";

const movies = [
  {
    id: 1,
    title: "La bruja",
    author: "Julieta Marin",
  },
  {
    id: 2,
    title: "El guason",
    author: "Quentin Tarantino",
  },
  {
    id: 3,
    title: "Rapido y furioso",
    author: "Bong Joon-ho",
  },
];

const CardCine = () => {
  const [listMovie, setListMovie] = React.useState(movies);
  //Inicializamos el movieForm en vacio
  const [movieForm, setMovieForm] = React.useState({
    id: "",
    title: "",
    author: "",
  });

  //  Funcion para capturar los datos
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    //agregamos datos al bookForm
    setMovieForm({ ...movieForm, [name]: value });
  };

  const editMovie = () => {
    const newList = listMovie.map((movie) => {
      if (movie.id === movieForm.id) {
        return movieForm;
      } else {
        return movie;
      }
    });

    setListMovie(newList);
    // limpiar datos
    setMovieForm({ id: "", title: "", author: "" });
  };

  const createMovie = () => {
    const newMovie = {
      id: Date.now(),
      title: movieForm.title,
      author: movieForm.author,
    };

    setListMovie([...listMovie, newMovie]);

    // limpiar datos
    setMovieForm({ id: "", title: "", author: "" });
  };

  // Funcion para enviar los datos a la lista
  const handleSubmit = () => {
    if (!movieForm.title || !movieForm.author) {
      alert("Ingresa todos los datos");
      return;
    }

    if (movieForm.id) {
      editMovie();
      return;
    }

    createMovie();
  };

  const handleDelete = (movieId) => {
    const newList = listMovie.filter((movie) => movie.id !== movieId);
    setListMovie(newList);
  };

  const handleEdit = (movieId) => {
    const findMovie = listMovie.find((movie) => movie.id === movieId);
    setMovieForm(findMovie);
  };

  return (
    <>
      <Stack
        direction={"row"}
        spacing={4}
        sx={{
          backgroundColor: "#F4F5F8",
          justifyContent: "center", // Centramos los contenedores horizontalmente
          alignItems: "flex-start",
          p: 8,
        }}
      >
        <Stack>
          <List
            sx={{
              width: 360,
              bgcolor: "#f5f5f5",
            }}
          >
            {/* /listmovie.map((movie)/Ahora se itera correctamente sobre la lista listmovie y se genera un elemento <ListItem> para cada película. */}
            {listMovie.map((movie) => (
              <ListItem
                key={movie.id}
                // secondaryAction: Define los botones de edición y eliminación del
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="Edit"
                      // handleEdit(movie.id): Llama a la función de editar pasando el id del movie.
                      onClick={() => handleEdit(movie.id)}
                    >
                      <EditNoteIcon sx={{ color: "#001F54" }} />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      // handleDelete(movie.id): Llama a la función de eliminar pasando el id del movie.
                      onClick={() => handleDelete(movie.id)}
                    >
                      <DeleteIcon sx={{ color: "#001F54" }} />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <TheaterComedyIcon sx={{ color: "#001F54" }} />
                  </Avatar>
                </ListItemAvatar>
                {/* <ListItemText primary y secondary  El título de la película se coloca como primary, y el author secondary. Si tienes otros datos para mostrar, puedes reemplazarlos o añadir más detalles. */}
                <ListItemText primary={movie.title} secondary={movie.author} />
              </ListItem>
            ))}
          </List>
        </Stack>
        <Box
          sx={{
            width: 400, // Asignamos un ancho fijo para evitar desbordamiento
            p: 2,
            borderRadius: "8px",
            boxShadow: 2, //Sombra para darle profundidad
            display: "flex", // Flexbox para ajustar el contenido
            flexDirection: "column", // Para que los campos estén uno debajo del otro
            gap: 2, // Espacio entre los campos y el botón
          }}
        >
          <TextField
            label="Titulo"
            onChange={handleChange}
            id="outlined-size-small"
            name="title"
            value={movieForm.title}
            size="small"
            inputProps={{
              style: { color: "#001F54" },
            }}
            sx={{
              bgcolor: "#f5f5f5", // Color de fondo
              borderRightColor: "#001F54",
              p: 1,
              width: "100%",
              border: "1px solid #001F54", // Borde azul
              borderRadius: "8px", // Radio del borde
              paddingLeft: 2, // Padding-left para separar el texto del borde
              mb: 1, // Margin-bottom para dar espacio entre este input y el siguiente
            }}
            InputLabelProps={{
              style: { color: "#001F54" }, // Color del label
            }}
            variant="standard"
          >
            <InputLabel htmlFor="input-with-icon-adornment">Titulo</InputLabel>
            <AccountCircleIcon />
          </TextField>
          <TextField
            label="author"
            onChange={handleChange}
            id="outlined-size-small"
            name="author"
            value={movieForm.author}
            size="small"
            inputProps={{
              style: { color: "#001F54" },
            }}
            InputLabelProps={{
              style: { color: "#001F54" }, // Color del label
            }}
            sx={{
              bgcolor: "#f5f5f5", // Color de fondo
              borderRightColor: "#001F54",
              p: 1,
              width: "100%",
              border: "1px solid #001F54", // Borde azul
              borderRadius: "8px", // Radio del borde
              paddingLeft: 2, // Padding-left para separar el texto del borde
              mb: 2,
            }}
            variant="standard"
          >
            <InputLabel htmlFor="input-with-icon-adornment">Author</InputLabel>
          </TextField>
          <Stack direction={"row"} justifyContent={"center"}>
            <Button
              onClick={handleSubmit}
              startIcon={<SendIcon sx={{ color: "white" }} />} // Cambiar color del ícono a blanco
              sx={{
                color: "white", // Cambiar el color del texto a blanco
                padding: "8px 16px", // Reducir el padding lateral (8px arriba/abajo, 16px izquierda/derecha)
                height: "40px", // Hacer el botón más alto
                borderRadius: "12px", // Bordes redondeados
                backgroundColor: "#001F54", // Fondo del botón
                "&:hover": {
                  backgroundColor: "#22468c", // Cambiar el color del botón en hover
                },
              }}
            >
              Enviar
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default CardCine;

/* <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            bgcolor: "#f5f5f5", // Color de fondo
            border: "1px solid #cccccc", // Color del borde
            borderRadius: "4px",
            p: 1,
            width: "100%",
          }}
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="Author"
            color="warning"
            onChange={handleChange}
            id="outlined-size-small"
            name="author"
            value={movieForm.author}
            size="small"
            variant="standard"
          />
        </Box> */
