import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

import {
  AppGroup,
  appGroupLabels,
  dashboardApps,
  DashboardApp,
} from './appCatalog';

const dashboardFontFamily = [
  'Inter',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'sans-serif',
].join(', ');

const appGroups: AppGroup[] = ['featured', 'advanced', 'interaction', 'layout'];
const repoUrl = 'https://github.com/itkrivoshei/react-typescript-web-apps';
const liveUrl = 'https://itkrivoshei.github.io/react-typescript-web-apps/';

const projectStats = [
  { label: 'Live demos', value: dashboardApps.length.toString() },
  { label: 'Stack', value: 'React + TS' },
  { label: 'Routing', value: 'HashRouter' },
  { label: 'Deploy', value: 'GitHub Pages' },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#020617',
    },
    primary: {
      main: '#f8fafc',
    },
  },
  typography: {
    fontFamily: dashboardFontFamily,
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 900 },
  },
});

const Dashboard: React.FunctionComponent = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Box
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
        color: '#e5e7eb',
        background:
          'linear-gradient(135deg, #071013 0%, #122023 45%, #1b1f2a 100%)',
      }}
    >
      <Container component='main' maxWidth='xl' sx={{ py: { xs: 3, md: 5 } }}>
        <HeroSection />
        <AppCollection />
      </Container>
    </Box>
  </ThemeProvider>
);

const HeroSection: React.FC = () => (
  <Box
    component='header'
    sx={{
      position: 'relative',
      mb: { xs: 5, md: 7 },
      py: { xs: 2, md: 4 },
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.08), transparent 70%)',
        pointerEvents: 'none',
      },
    }}
  >
    <Box sx={{ position: 'relative', display: 'grid', gap: { xs: 4, lg: 6 } }}>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={{ xs: 4, lg: 8 }}
        alignItems={{ xs: 'flex-start', lg: 'center' }}
        justifyContent='space-between'
      >
        <Box sx={{ maxWidth: 820 }}>
          <Stack
            direction='row'
            spacing={1}
            useFlexGap
            flexWrap='wrap'
            sx={{ mb: 2 }}
          >
            {['React 19', 'TypeScript', 'Redux', 'GitHub Pages'].map(
              (label) => (
                <Chip
                  key={label}
                  label={label}
                  size='small'
                  sx={{
                    border: '1px solid rgba(125, 211, 252, 0.18)',
                    background: 'rgba(14, 165, 233, 0.08)',
                    color: '#bae6fd',
                    fontWeight: 900,
                  }}
                />
              )
            )}
          </Stack>

          <Typography
            component='p'
            sx={{
              mb: 1.5,
              color: '#38bdf8',
              fontSize: '0.76rem',
              fontWeight: 900,
              letterSpacing: 0,
              textTransform: 'uppercase',
            }}
          >
            App collection
          </Typography>

          <Typography
            variant='h1'
            sx={{
              maxWidth: 820,
              color: '#f8fafc',
              fontSize: 'clamp(3.4rem, 8vw, 7.75rem)',
              letterSpacing: 0,
              lineHeight: 0.86,
            }}
          >
            React TypeScript Web Apps
          </Typography>

          <Typography
            component='p'
            sx={{
              mt: 3,
              maxWidth: 700,
              color: 'rgba(226, 232, 240, 0.74)',
              fontSize: { xs: '1rem', md: '1.16rem' },
              lineHeight: 1.75,
            }}
          >
            My React + TypeScript apps in one place.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ mt: 3.5 }}
          >
            <Button
              href={liveUrl}
              target='_blank'
              rel='noreferrer'
              variant='contained'
              sx={{
                minHeight: 48,
                px: 2.5,
                borderRadius: 999,
                background: '#f8fafc',
                color: '#020617',
                fontWeight: 900,
                textTransform: 'none',
                '&:hover': { background: '#dbeafe' },
              }}
            >
              Live app
            </Button>
            <Button
              href={repoUrl}
              target='_blank'
              rel='noreferrer'
              variant='outlined'
              sx={{
                minHeight: 48,
                px: 2.5,
                borderRadius: 999,
                borderColor: 'rgba(226, 232, 240, 0.22)',
                color: '#f8fafc',
                fontWeight: 900,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.08)',
                },
              }}
            >
              Source
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', lg: 380 },
            flexShrink: 0,
            p: 2,
            border: '1px solid rgba(226, 232, 240, 0.12)',
            borderRadius: 1,
            background: 'rgba(2, 6, 23, 0.56)',
          }}
        >
          <Stack spacing={1.25}>
            {projectStats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 2,
                  p: 1.5,
                  border: '1px solid rgba(148, 163, 184, 0.12)',
                  borderRadius: 1,
                  background: 'rgba(15, 23, 42, 0.74)',
                }}
              >
                <Typography sx={{ color: 'rgba(226, 232, 240, 0.58)' }}>
                  {stat.label}
                </Typography>
                <Typography sx={{ color: '#f8fafc', fontWeight: 900 }}>
                  {stat.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  </Box>
);

const AppCollection: React.FC = () => (
  <Box component='section'>
    <SectionHeader title='Apps' />
    <Stack spacing={4}>
      {appGroups.map((group) => {
        const apps = dashboardApps.filter((app) => app.group === group);
        return (
          <Box key={group}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='space-between'
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={1}
              sx={{ mb: 1.5 }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: '#f8fafc',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  letterSpacing: 0,
                }}
              >
                {appGroupLabels[group]}
              </Typography>
              <Chip
                label={`${apps.length} ${apps.length === 1 ? 'app' : 'apps'}`}
                size='small'
                sx={{
                  background: 'rgba(148, 163, 184, 0.12)',
                  color: 'rgba(226, 232, 240, 0.74)',
                  fontWeight: 900,
                }}
              />
            </Stack>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, minmax(0, 1fr))',
                  lg: 'repeat(3, minmax(0, 1fr))',
                },
                gap: 2,
              }}
            >
              {apps.map((app, index) => (
                <ProjectCard key={app.path} app={app} index={index + 1} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Stack>
  </Box>
);

const SectionHeader: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
}> = ({ eyebrow, title, description }) => (
  <Box sx={{ mb: 2.5 }}>
    {eyebrow && (
      <Typography
        component='p'
        sx={{
          mb: 0.75,
          color: '#7dd3fc',
          fontSize: '0.72rem',
          fontWeight: 900,
          letterSpacing: 0,
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      variant='h2'
      sx={{
        color: '#f8fafc',
        fontSize: { xs: '1.8rem', md: '2.5rem' },
        letterSpacing: 0,
        lineHeight: 1,
      }}
    >
      {title}
    </Typography>
    {description && (
      <Typography
        sx={{
          mt: 1,
          maxWidth: 760,
          color: 'rgba(226, 232, 240, 0.62)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>
    )}
  </Box>
);

const ProjectCard: React.FC<{
  app: DashboardApp;
  index: number;
  featured?: boolean;
}> = ({ app, index, featured = false }) => (
  <Card
    sx={{
      position: 'relative',
      minHeight: featured ? 292 : 224,
      border: '1px solid rgba(226, 232, 240, 0.12)',
      borderRadius: 1,
      background:
        'linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.78))',
      boxShadow: '0 22px 70px rgba(2, 6, 23, 0.32)',
      overflow: 'hidden',
      transition:
        'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 12% 0%, ${app.accent}3d, transparent 17rem)`,
        pointerEvents: 'none',
      },
      '&:hover': {
        transform: 'translateY(-6px)',
        borderColor: `${app.accent}99`,
        boxShadow: `0 28px 90px rgba(2, 6, 23, 0.54), 0 0 0 1px ${app.accent}55`,
      },
    }}
  >
    <CardActionArea
      component={RouterLink}
      to={app.path}
      aria-label={`Open live demo: ${app.name}`}
      sx={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        minHeight: featured ? 292 : 224,
        display: 'flex',
        alignItems: 'stretch',
        p: featured ? 2.5 : 2,
      }}
    >
      <Stack spacing={2} justifyContent='space-between' sx={{ width: '100%' }}>
        <Box>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={1}
            sx={{ mb: 2 }}
          >
            <Chip
              label={app.badge}
              size='small'
              sx={{
                height: 26,
                border: `1px solid ${app.accent}4d`,
                background: `${app.accent}1a`,
                color: app.accent,
                fontWeight: 900,
              }}
            />
            <Typography
              component='span'
              sx={{
                color: 'rgba(226, 232, 240, 0.36)',
                fontSize: '0.8rem',
                fontWeight: 900,
              }}
            >
              {String(index).padStart(2, '0')}
            </Typography>
          </Stack>

          <Typography
            variant='h3'
            sx={{
              color: '#f8fafc',
              fontSize: featured ? 'clamp(1.65rem, 3vw, 2.3rem)' : '1.35rem',
              letterSpacing: 0,
              lineHeight: 1,
            }}
          >
            {app.name}
          </Typography>
          <Typography
            component='p'
            sx={{
              mt: 1.25,
              color: 'rgba(226, 232, 240, 0.66)',
              fontSize: featured ? '0.98rem' : '0.9rem',
              lineHeight: 1.6,
            }}
          >
            {app.summary}
          </Typography>
        </Box>

        <Box>
          <Divider sx={{ mb: 1.5, borderColor: 'rgba(226, 232, 240, 0.1)' }} />
          <Stack direction='row' spacing={0.75} useFlexGap flexWrap='wrap'>
            {app.stack.map((tag) => (
              <Chip
                key={tag}
                size='small'
                label={tag}
                sx={{
                  height: 24,
                  border: '1px solid rgba(226, 232, 240, 0.1)',
                  backgroundColor: 'rgba(15, 23, 42, 0.76)',
                  color: 'rgba(226, 232, 240, 0.76)',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                }}
              />
            ))}
          </Stack>
          <Typography
            component='p'
            sx={{
              mt: 1.4,
              color: 'rgba(148, 163, 184, 0.7)',
              fontSize: '0.72rem',
              fontWeight: 800,
            }}
          >
            Source: {app.sourcePath}
          </Typography>
          <Typography
            component='span'
            sx={{
              display: 'inline-flex',
              mt: 1.4,
              color: app.accent,
              fontSize: '0.76rem',
              fontWeight: 900,
              letterSpacing: 0,
              textTransform: 'uppercase',
            }}
          >
            Open live demo
          </Typography>
        </Box>
      </Stack>
    </CardActionArea>
  </Card>
);

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
