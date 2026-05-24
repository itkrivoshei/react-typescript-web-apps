import React, { useMemo, useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Container,
  Box,
  Stack,
  Chip,
  Divider,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type Book = {
  title: string;
  author: string;
  pages: number;
  read: boolean;
};

type BookFormData = {
  title: string;
  author: string;
  pages: string;
  read: boolean;
};

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
    text: {
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.07em',
    },
    h6: {
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 18,
  },
});

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

const initialFormData: BookFormData = {
  title: '',
  author: '',
  pages: '',
  read: false,
};

const Library: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<BookFormData>(initialFormData);

  const readBooksCount = useMemo(
    () => books.filter((book) => book.read).length,
    [books]
  );

  const totalPages = useMemo(
    () => books.reduce((total, book) => total + book.pages, 0),
    [books]
  );

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const addBookToLibrary = (book: Book) => {
    setBooks((currentBooks) => [...currentBooks, book]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = formData.title.trim();
    const author = formData.author.trim();
    const pages = Number(formData.pages);

    if (!title || !author || !Number.isFinite(pages) || pages < 1) {
      return;
    }

    addBookToLibrary({ title, author, pages, read: formData.read });
    setShowForm(false);
    resetForm();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleRead = (index: number) => {
    setBooks((currentBooks) =>
      currentBooks.map((book, bookIndex) =>
        bookIndex === index ? { ...book, read: !book.read } : book
      )
    );
  };

  const removeBook = (index: number) => {
    setBooks((currentBooks) =>
      currentBooks.filter((_, bookIndex) => bookIndex !== index)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          py: { xs: 4, md: 6 },
          background:
            'radial-gradient(circle at 15% 0, rgba(139, 233, 253, 0.16), transparent 32rem), radial-gradient(circle at 90% 10%, rgba(189, 147, 249, 0.12), transparent 28rem), #1f2335',
        }}
      >
        <Container component='main' maxWidth='lg'>
          <Paper
            elevation={12}
            sx={{
              p: { xs: 3, md: 4 },
              width: '100%',
              border: '1px solid rgba(139, 233, 253, 0.14)',
              borderRadius: 5,
              background:
                'linear-gradient(145deg, rgba(40, 42, 54, 0.96), rgba(31, 35, 53, 0.98))',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.34)',
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
              spacing={3}
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography
                  variant='overline'
                  color='primary'
                  sx={{ fontWeight: 900, letterSpacing: '0.18em' }}
                >
                  Reading tracker
                </Typography>
                <Typography
                  variant='h1'
                  color='secondary'
                  sx={{
                    fontSize: { xs: '3rem', md: '4.8rem' },
                    lineHeight: 0.95,
                  }}
                >
                  My Library
                </Typography>
                <Typography
                  color='text.secondary'
                  sx={{ mt: 2, maxWidth: 620 }}
                >
                  Keep a compact list of books, reading status, and page count
                  without extra navigation or storage complexity.
                </Typography>
              </Box>

              <Button
                variant='contained'
                color='secondary'
                onClick={() => setShowForm((current) => !current)}
                sx={{ minWidth: 160, borderRadius: 999, fontWeight: 900 }}
              >
                {showForm ? 'Close Form' : 'Add Book'}
              </Button>
            </Stack>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: showForm ? '1.2fr 0.8fr' : '1fr',
                },
                gap: 3,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(3, minmax(0, 1fr))',
                    },
                    gap: 1.5,
                    mb: 3,
                  }}
                >
                  <StatCard label='Books' value={books.length} />
                  <StatCard label='Read' value={readBooksCount} />
                  <StatCard label='Pages' value={totalPages} />
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      md: 'repeat(2, minmax(0, 1fr))',
                    },
                    gap: 2,
                  }}
                >
                  {books.map((book, index) => (
                    <Paper
                      key={`${book.title}-${book.author}`}
                      variant='outlined'
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        p: 2.5,
                        minHeight: 210,
                        borderRadius: 4,
                        borderColor: book.read
                          ? 'rgba(80, 250, 123, 0.28)'
                          : 'rgba(255, 121, 198, 0.22)',
                        background: 'rgba(68, 71, 90, 0.45)',
                      }}
                    >
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        spacing={1}
                        alignItems='flex-start'
                      >
                        <Box>
                          <Typography color='primary' variant='h6'>
                            {book.title}
                          </Typography>
                          <Typography color='text.secondary'>
                            {book.author}
                          </Typography>
                        </Box>
                        <Chip
                          size='small'
                          label={book.read ? 'Read' : 'Unread'}
                          color={book.read ? 'success' : 'secondary'}
                          variant='outlined'
                        />
                      </Stack>

                      <Typography color='text.secondary'>
                        {book.pages} pages
                      </Typography>

                      <Divider sx={{ mt: 'auto' }} />

                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        spacing={1}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={book.read}
                              onChange={() => toggleRead(index)}
                            />
                          }
                          label='Read'
                        />
                        <Button
                          variant='outlined'
                          color='error'
                          onClick={() => removeBook(index)}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </Paper>
                  ))}
                </Box>
              </Box>

              {showForm && (
                <Paper
                  component='form'
                  onSubmit={handleFormSubmit}
                  variant='outlined'
                  sx={{
                    p: 2.5,
                    borderRadius: 4,
                    borderColor: 'rgba(139, 233, 253, 0.14)',
                    background: 'rgba(40, 42, 54, 0.72)',
                  }}
                >
                  <Typography variant='h6' color='primary' gutterBottom>
                    Add a book
                  </Typography>
                  <Stack spacing={2}>
                    <TextField
                      name='title'
                      label='Title'
                      value={formData.title}
                      onChange={handleInputChange}
                      fullWidth
                      required
                    />
                    <TextField
                      name='author'
                      label='Author'
                      value={formData.author}
                      onChange={handleInputChange}
                      fullWidth
                      required
                    />
                    <TextField
                      name='pages'
                      label='Pages'
                      type='number'
                      value={formData.pages}
                      onChange={handleInputChange}
                      inputProps={{ min: 1 }}
                      fullWidth
                      required
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name='read'
                          checked={formData.read}
                          onChange={handleInputChange}
                        />
                      }
                      label='Already read'
                    />
                    <Button type='submit' variant='contained' color='primary'>
                      Save Book
                    </Button>
                  </Stack>
                </Paper>
              )}
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

type StatCardProps = {
  label: string;
  value: number;
};

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <Paper
      variant='outlined'
      sx={{
        p: 2,
        borderRadius: 3,
        borderColor: 'rgba(139, 233, 253, 0.14)',
        background: 'rgba(139, 233, 253, 0.05)',
      }}
    >
      <Typography variant='caption' color='text.secondary'>
        {label}
      </Typography>
      <Typography variant='h4' sx={{ fontWeight: 900 }}>
        {value}
      </Typography>
    </Paper>
  );
};

export default Library;
