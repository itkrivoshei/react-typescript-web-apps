import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Grid,
  FormGroup,
  Container,
  Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',
    },
    secondary: {
      main: '#bd93f9',
    },
    background: {
      default: '#1f2335',
      paper: '#282a36',
    },
  },
});

type Book = {
  title: string;
  author: string;
  pages: number;
  read: boolean;
};

const initialBooks: Book[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    pages: 223,
    read: true,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    read: false,
  },
];

const Library: React.FC = () => {
  const [myLibrary, setMyLibrary] = useState<Book[]>(initialBooks);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: 0,
    read: false,
  });

  const addBookToLibrary = (book: Book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addBookToLibrary(formData);
    setShowForm(false);
    setFormData({ title: '', author: '', pages: 0, read: false });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target instanceof HTMLInputElement) {
      const { name, value, type, checked } = event.target;
      if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else if (event.target instanceof HTMLTextAreaElement) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleRead = (index: number) => {
    const updatedBooks = [...myLibrary];
    updatedBooks[index].read = !updatedBooks[index].read;
    setMyLibrary(updatedBooks);
  };

  const removeBook = (index: number) => {
    const updatedBooks = myLibrary.filter((_, idx) => idx !== index);
    setMyLibrary(updatedBooks);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          py: 4,
          background:
            'radial-gradient(circle at top, rgba(139, 233, 253, 0.12), transparent 32rem), #1f2335',
        }}
      >
        <Container component='main' maxWidth='md'>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 3, md: 4 },
              width: '100%',
              border: '1px solid rgba(139, 233, 253, 0.14)',
              borderRadius: 4,
            }}
          >
            <Typography
              variant='overline'
              color='primary'
              sx={{ letterSpacing: '0.18em' }}
            >
              Reading tracker
            </Typography>
            <Typography variant='h3' color='secondary' gutterBottom>
              My Library
            </Typography>
            <Grid container spacing={2.5}>
              {myLibrary.map((book, index) => (
                <Grid item xs={12} key={`${book.title}-${book.author}`}>
                  <Paper
                    variant='outlined'
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      borderColor: book.read
                        ? 'rgba(80, 250, 123, 0.28)'
                        : 'rgba(255, 121, 198, 0.22)',
                    }}
                  >
                    <Typography color='primary' variant='h6'>
                      {book.title}
                    </Typography>
                    <Typography color='text.secondary'>
                      {book.author}
                    </Typography>
                    <Typography>{book.pages} pages</Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={book.read}
                            onChange={() => toggleRead(index)}
                          />
                        }
                        label='Read'
                      />
                    </FormGroup>
                    <Button
                      variant='outlined'
                      color='error'
                      onClick={() => removeBook(index)}
                      sx={{ mt: 1 }}
                    >
                      Remove
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Button
              variant='contained'
              color='secondary'
              onClick={() => setShowForm(!showForm)}
              sx={{ mt: 3, width: '100%' }}
            >
              Add Book
            </Button>

            {showForm && (
              <Box component='form' onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                <TextField
                  name='title'
                  placeholder='Title'
                  value={formData.title}
                  onChange={handleInputChange}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <TextField
                  name='author'
                  placeholder='Author'
                  value={formData.author}
                  onChange={handleInputChange}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <TextField
                  name='pages'
                  placeholder='Pages'
                  type='number'
                  value={formData.pages}
                  onChange={handleInputChange}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='read'
                        checked={formData.read}
                        onChange={handleInputChange}
                      />
                    }
                    label='Read'
                  />
                </FormGroup>
                <Button type='submit' variant='contained' color='primary'>
                  Submit
                </Button>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Library;
