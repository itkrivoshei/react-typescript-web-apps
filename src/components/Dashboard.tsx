import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Stack,
} from '@mui/material';

import { dashboardApps } from '../config/appCatalog';

const dashboardFontFamily = [
  'Inter',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'sans-serif',
].join(', ');

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a',
    },
    primary: {
      main: '#f8fafc',
    },
  },
  typography: {
    fontFamily: dashboardFontFamily,
    h1: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
  },
});

const Dashboard: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(circle at 12% 8%, rgba(76, 201, 240, 0.18), transparent 26rem), radial-gradient(circle at 88% 18%, rgba(167, 139, 250, 0.16), transparent 28rem), linear-gradient(135deg, #0f172a, #111827 58%, #020617)',
        }}
      >
        <Container component='main' maxWidth='lg' sx={{ py: { xs: 4, md: 7 } }}>
          <Box
            component='header'
            sx={{
              maxWidth: 860,
              mx: 'auto',
              mb: { xs: 4, md: 6 },
              textAlign: 'center',
            }}
          >
            <Typography
              component='p'
              sx={{
                mb: 1.5,
                color: '#38bdf8',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              React · TypeScript · {dashboardApps.length} apps
            </Typography>
            <Typography
              variant='h1'
              sx={{
                mb: 2,
                color: 'primary.main',
                fontSize: 'clamp(2.75rem, 7vw, 5.75rem)',
                letterSpacing: '-0.06em',
                lineHeight: 0.95,
              }}
            >
              Web Apps Collection
            </Typography>
            <Typography
              component='p'
              sx={{
                mx: 'auto',
                maxWidth: 620,
                color: 'rgba(226, 232, 240, 0.72)',
                fontSize: { xs: '0.98rem', md: '1.08rem' },
                lineHeight: 1.7,
              }}
            >
              A compact launcher for small frontend apps, each with its own
              visual direction and shared React/TypeScript setup.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              justifyContent='center'
              sx={{ mt: 3 }}
            >
              {['UI demos', 'Shared CI', 'GitHub Pages'].map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    border: '1px solid rgba(226, 232, 240, 0.14)',
                    borderRadius: 2,
                    background: 'rgba(15, 23, 42, 0.52)',
                    color: 'rgba(226, 232, 240, 0.76)',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Box>

          <Grid container spacing={3} justifyContent='center'>
            {dashboardApps.map((project) => (
              <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    position: 'relative',
                    height: 226,
                    backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.44) 34%, rgba(15, 23, 42, 0.94)), url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '1px solid rgba(226, 232, 240, 0.12)',
                    borderRadius: 3,
                    boxShadow: '0 18px 52px rgba(2, 6, 23, 0.34)',
                    overflow: 'hidden',
                    transition:
                      'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      backgroundColor: project.accent,
                      zIndex: 1,
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(226, 232, 240, 0.24)',
                      boxShadow: `0 24px 70px rgba(2, 6, 23, 0.46), 0 0 0 1px ${project.accent}`,
                    },
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to={project.path}
                    aria-label={`Open ${project.name}`}
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        variant='h3'
                        sx={{
                          color: 'primary.main',
                          fontSize: '1.28rem',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.12,
                          textShadow: '0 2px 14px rgba(0, 0, 0, 0.82)',
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 1,
                          mt: 1.4,
                        }}
                      >
                        <Box
                          sx={{
                            width: 36,
                            height: 2,
                            backgroundColor: project.accent,
                          }}
                        />
                        <Typography
                          component='span'
                          sx={{
                            color: 'rgba(226, 232, 240, 0.72)',
                            fontSize: '0.72rem',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Open
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
