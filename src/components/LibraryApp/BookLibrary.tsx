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
      main: '#a7f3d0',
    },
    secondary: {
      main: '#c4b5fd',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.075em',
    },
    h6: {
      fontWeight: 900,
      letterSpacing: '-0.025em',
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

  const unreadBooksCount = books.length - readBooksCount;

  const totalPages = useMemo(
    () => books.reduce((total, book) => total + book.pages, 0),
    [books]
  );

  const readProgress = books.length
    ? Math.round((readBooksCount / books.length) * 100)
    : 0;

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
          py: { xs: 3, md: 6 },
          px: { xs: 2, md: 3 },
          background:
            'radial-gradient(circle at 16% 0, rgba(167, 243, 208, 0.18), transparent 34rem), radial-gradient(circle at 88% 8%, rgba(196, 181, 253, 0.16), transparent 30rem), linear-gradient(135deg, #0f172a, #111827 52%, #1e1b4b)',
        }}
      >
        <Container component='main' maxWidth='lg' disableGutters>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              p: { xs: 2.5, md: 4 },
              width: '100%',
              border: '1px solid rgba(167, 243, 208, 0.14)',
              borderRadius: { xs: 4, md: 6 },
              background:
                'linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.86))',
              boxShadow: '0 32px 110px rgba(0, 0, 0, 0.38)',
              '&::before': {
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                content: '""',
                background:
                  'linear-gradient(90deg, rgba(167, 243, 208, 0.08), transparent 28%, rgba(196, 181, 253, 0.08))',
              },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems={{ xs: 'flex-start', md: 'flex-end' }}
                spacing={3}
                sx={{ mb: { xs: 3, md: 4 } }}
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
                    sx={{
                      mt: 0.5,
                      fontSize: { xs: '3.2rem', md: '5.4rem' },
                      lineHeight: 0.9,
                      color: '#f8fafc',
                    }}
                  >
                    Book Library
                  </Typography>
                  <Typography
                    color='text.secondary'
                    sx={{ mt: 2.25, maxWidth: 640, lineHeight: 1.8 }}
                  >
                    A compact library board for tracking books, reading status,
                    and total page count with a small, focused interface.
                  </Typography>
                </Box>

                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => setShowForm((current) => !current)}
                  sx={{
                    minWidth: 168,
                    minHeight: 46,
                    borderRadius: 999,
                    color: '#111827',
                    fontWeight: 900,
                    boxShadow: '0 18px 40px rgba(196, 181, 253, 0.2)',
                    '&:hover': {
                      boxShadow: '0 22px 50px rgba(196, 181, 253, 0.3)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {showForm ? 'Close Form' : 'Add Book'}
                </Button>
              </Stack>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    lg: showForm ? 'minmax(0, 1.25fr) 360px' : '1fr',
                  },
                  gap: 3,
                  alignItems: 'start',
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
                      mb: 2,
                    }}
                  >
                    <StatCard label='Books' value={books.length} />
                    <StatCard label='Read' value={readBooksCount} />
                    <StatCard label='Pages' value={totalPages} />
                  </Box>

                  <Paper
                    variant='outlined'
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 4,
                      borderColor: 'rgba(167, 243, 208, 0.12)',
                      background: 'rgba(15, 23, 42, 0.52)',
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent='space-between'
                      spacing={1.5}
                      sx={{ mb: 1.5 }}
                    >
                      <Typography fontWeight={900}>Reading progress</Typography>
                      <Typography color='text.secondary'>
                        {readBooksCount} read · {unreadBooksCount} unread
                      </Typography>
                    </Stack>
                    <Box
                      aria-label={`Reading progress ${readProgress}%`}
                      sx={{
                        height: 10,
                        overflow: 'hidden',
                        borderRadius: 999,
                        background: 'rgba(148, 163, 184, 0.16)',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${readProgress}%`,
                          height: '100%',
                          borderRadius: 999,
                          background:
                            'linear-gradient(90deg, #a7f3d0, #c4b5fd)',
                        }}
                      />
                    </Box>
                  </Paper>

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
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.5,
                          minHeight: 230,
                          overflow: 'hidden',
                          p: 2.5,
                          pl: 3,
                          borderRadius: 4,
                          borderColor: book.read
                            ? 'rgba(167, 243, 208, 0.3)'
                            : 'rgba(196, 181, 253, 0.24)',
                          background: book.read
                            ? 'linear-gradient(145deg, rgba(20, 83, 45, 0.28), rgba(30, 41, 59, 0.82))'
                            : 'linear-gradient(145deg, rgba(76, 29, 149, 0.22), rgba(30, 41, 59, 0.82))',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.22)',
                          '&::before': {
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            width: 8,
                            content: '""',
                            background: book.read
                              ? 'linear-gradient(180deg, #a7f3d0, #34d399)'
                              : 'linear-gradient(180deg, #c4b5fd, #818cf8)',
                          },
                        }}
                      >
                        <Stack
                          direction='row'
                          justifyContent='space-between'
                          spacing={1.5}
                          alignItems='flex-start'
                        >
                          <Box sx={{ minWidth: 0 }}>
                            <Typography
                              color='primary'
                              variant='h6'
                              sx={{ lineHeight: 1.2 }}
                            >
                              {book.title}
                            </Typography>
                            <Typography color='text.secondary' sx={{ mt: 0.5 }}>
                              {book.author}
                            </Typography>
                          </Box>
                          <Chip
                            size='small'
                            label={book.read ? 'Read' : 'Unread'}
                            color={book.read ? 'success' : 'secondary'}
                            variant='outlined'
                            sx={{ fontWeight: 900 }}
                          />
                        </Stack>

                        <Typography color='text.secondary'>
                          {book.pages} pages
                        </Typography>

                        <Divider sx={{ mt: 'auto', borderColor: 'divider' }} />

                        <Stack
                          direction={{ xs: 'column', sm: 'row' }}
                          justifyContent='space-between'
                          spacing={1.25}
                          alignItems={{ xs: 'stretch', sm: 'center' }}
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
                            sx={{ borderRadius: 999, fontWeight: 900 }}
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
                      position: { lg: 'sticky' },
                      top: { lg: 24 },
                      p: 2.5,
                      borderRadius: 4,
                      borderColor: 'rgba(167, 243, 208, 0.16)',
                      background:
                        'linear-gradient(180deg, rgba(30, 41, 59, 0.92), rgba(15, 23, 42, 0.9))',
                      boxShadow: '0 22px 70px rgba(0, 0, 0, 0.24)',
                    }}
                  >
                    <Typography variant='h6' color='primary'>
                      Add a book
                    </Typography>
                    <Typography
                      color='text.secondary'
                      sx={{ mt: 0.5, mb: 2, lineHeight: 1.6 }}
                    >
                      Add a title, author, and page count to extend the board.
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
                      <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        sx={{
                          minHeight: 44,
                          borderRadius: 999,
                          color: '#111827',
                          fontWeight: 900,
                        }}
                      >
                        Save Book
                      </Button>
                    </Stack>
                  </Paper>
                )}
              </Box>
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
        borderColor: 'rgba(167, 243, 208, 0.16)',
        background:
          'linear-gradient(145deg, rgba(167, 243, 208, 0.08), rgba(30, 41, 59, 0.62))',
        boxShadow: '0 16px 45px rgba(0, 0, 0, 0.16)',
      }}
    >
      <Typography
        variant='caption'
        color='text.secondary'
        sx={{
          fontWeight: 900,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Typography>
      <Typography variant='h4' sx={{ mt: 0.5, fontWeight: 900 }}>
        {value}
      </Typography>
    </Paper>
  );
};

export default Library;
