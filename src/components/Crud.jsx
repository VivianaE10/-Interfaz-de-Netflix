import {
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "J.K  Rowling",
  },
  {
    id: 2,
    title: "The Lord of The Rings",
    author: "J.R.R Tolkien",
  },
  {
    id: 3,
    title: "Eseñor de los anillos",
    author: "J.R.R  Tolkien",
  },
];

const Crud = () => {
  const [listBook, setListBook] = React.useState(books);
  //Inicializamos el bookForm en vacio
  const [bookForm, setBookForm] = React.useState({
    id: "",
    title: "",
    author: "",
  });

  //  Funcion para capturar los datos
  const handleChange = (event) => {
    const valueInput = event.target.value;
    const nameInput = event.target.name;
    //agregamos datos al bookForm
    setBookForm({ ...bookForm, [nameInput]: valueInput });
  };

  const createBook = () => {
    const newBook = {
      id: Date.now(),
      title: bookForm.title,
      author: bookForm.author,
    };

    setListBook([...listBook, newBook]);

    // limpiar datos
    setBookForm({ id: "", title: "", author: "" });
  };

  // Funcion para enviar los datos a la lista
  const handleSubmit = () => {
    if (!bookForm.title || !bookForm.author) {
      alert("Ingresa todos los datos");
      return;
    }

    if (bookForm.id) {
      editBook();
      return;
    }

    createBook();
  };

  const handleDelete = (bookId) => {
    const newList = listBook.filter((book) => book.id !== bookId);
    setListBook(newList);
  };

  const handleEdit = (bookId) => {
    const findBook = listBook.find((book) => book.id === bookId);
    setBookForm(findBook);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2, color: "white" }}
            variant="h6"
            component="div"
          >
            Mi libreria 📚
          </Typography>
          <Demo>
            <List>
              {listBook.map((book) => (
                <ListItem
                  key={book.id}
                  secondaryAction={
                    <>
                      <IconButton
                        edge="end"
                        aria-label="Edit"
                        onClick={() => handleEdit(book.id)}
                      >
                        <CiEdit />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(book.id)}
                      >
                        <MdDeleteSweep />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={book.title} secondary={book.author} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2, color: "white" }}
            variant="h6"
            component="div"
          >
            Formulario
          </Typography>
          <Stack gap={3}>
            <TextField
              label="Titulo"
              color="warning"
              onChange={handleChange}
              id="outlined-size-small"
              name="title"
              value={bookForm.title}
              size="small"
              inputProps={{
                style: { color: "white" },
              }}
            />

            <TextField
              label="Author"
              color="warning"
              onChange={handleChange}
              id="outlined-size-small"
              name="author"
              value={bookForm.author}
              size="small"
            />

            <Button variant="outlined" onClick={handleSubmit}>
              Enviar
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Crud;
