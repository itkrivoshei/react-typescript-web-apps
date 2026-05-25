import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Stack,
  Chip,
} from '@mui/material';

import { appGroupLabels, dashboardApps, AppGroup } from '../config/appCatalog';

const dashboardFontFamily = [
  'Inter',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'sans-serif',
].join(', ');

const appGroups: AppGroup[] = ['featured', 'solid', 'practice', 'legacy'];

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
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
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
              maxWidth: 880,
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
                maxWidth: 650,
                color: 'rgba(226, 232, 240, 0.72)',
                fontSize: { xs: '0.98rem', md: '1.08rem' },
                lineHeight: 1.7,
              }}
            >
              A compact launcher for small React/TypeScript apps, grouped by
              current polish and implementation complexity.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              justifyContent='center'
              sx={{ mt: 3 }}
            >
              {['No preview GIFs', 'Shared CI', 'GitHub Pages'].map((item) => (
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

          <Stack spacing={4.5}>
            {appGroups.map((group) => {
              const apps = dashboardApps.filter((app) => app.group === group);
              const isFeatured = group === 'featured';

              return (
                <Box component='section' key={group}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'flex-start', sm: 'end' }}
                    justifyContent='space-between'
                    spacing={1}
                    sx={{ mb: 1.8 }}
                  >
                    <Box>
                      <Typography
                        variant='h2'
                        sx={{
                          color: '#f8fafc',
                          fontSize: isFeatured ? '1.7rem' : '1.18rem',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {appGroupLabels[group]}
                      </Typography>
                      <Typography
                        component='p'
                        sx={{
                          color: 'rgba(226, 232, 240, 0.52)',
                          fontSize: '0.88rem',
                        }}
                      >
                        {apps.length} {apps.length === 1 ? 'app' : 'apps'}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, minmax(0, 1fr))',
                        md: isFeatured
                          ? 'repeat(2, minmax(0, 1fr))'
                          : 'repeat(3, minmax(0, 1fr))',
                      },
                      gap: 2,
                    }}
                  >
                    {apps.map((project) => (
                      <Card
                        key={project.path}
                        sx={{
                          position: 'relative',
                          minHeight: isFeatured ? 210 : 176,
                          border: '1px solid rgba(226, 232, 240, 0.12)',
                          borderRadius: 3,
                          background:
                            'linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.82))',
                          boxShadow: '0 18px 52px rgba(2, 6, 23, 0.28)',
                          overflow: 'hidden',
                          transition:
                            'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background: `radial-gradient(circle at 16% 0%, ${project.accent}33, transparent 16rem)`,
                            pointerEvents: 'none',
                          },
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: `${project.accent}80`,
                            boxShadow: `0 24px 70px rgba(2, 6, 23, 0.44), 0 0 0 1px ${project.accent}66`,
                          },
                        }}
                      >
                        <CardActionArea
                          component={RouterLink}
                          to={project.path}
                          aria-label={`Open ${project.name}`}
                          sx={{
                            position: 'relative',
                            zIndex: 1,
                            height: '100%',
                            minHeight: isFeatured ? 210 : 176,
                            display: 'flex',
                            alignItems: 'stretch',
                            p: isFeatured ? 2.5 : 2,
                          }}
                        >
                          <Stack
                            spacing={1.5}
                            justifyContent='space-between'
                            sx={{ width: '100%' }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  width: 38,
                                  height: 3,
                                  mb: 1.8,
                                  backgroundColor: project.accent,
                                }}
                              />
                              <Typography
                                variant='h3'
                                sx={{
                                  color: '#f8fafc',
                                  fontSize: isFeatured ? '1.65rem' : '1.25rem',
                                  letterSpacing: '-0.03em',
                                  lineHeight: 1.08,
                                }}
                              >
                                {project.name}
                              </Typography>
                              <Typography
                                component='p'
                                sx={{
                                  mt: 1,
                                  color: 'rgba(226, 232, 240, 0.66)',
                                  fontSize: '0.88rem',
                                  lineHeight: 1.55,
                                }}
                              >
                                {project.summary}
                              </Typography>
                            </Box>

                            <Stack
                              direction='row'
                              spacing={0.75}
                              useFlexGap
                              flexWrap='wrap'
                              alignItems='center'
                            >
                              {project.stack.map((tag) => (
                                <Chip
                                  key={tag}
                                  size='small'
                                  label={tag}
                                  sx={{
                                    height: 24,
                                    border:
                                      '1px solid rgba(226, 232, 240, 0.12)',
                                    backgroundColor: 'rgba(15, 23, 42, 0.72)',
                                    color: 'rgba(226, 232, 240, 0.76)',
                                    fontSize: '0.68rem',
                                    fontWeight: 800,
                                  }}
                                />
                              ))}
                              <Typography
                                component='span'
                                sx={{
                                  ml: 'auto',
                                  color: project.accent,
                                  fontSize: '0.72rem',
                                  fontWeight: 900,
                                  letterSpacing: '0.08em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                Open
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardActionArea>
                      </Card>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
