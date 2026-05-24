import React, { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Paper,
  Stack,
  Box,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import MoodBadIcon from '@mui/icons-material/MoodBad';

type Weapon = 'ROCK' | 'PAPER' | 'SCISSORS';

interface GameState {
  gamesPlayed: number;
  ties: number;
  playerScore: number;
  computerScore: number;
  message: string;
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#50fa7b',
    },
    secondary: {
      main: '#ff79c6',
    },
    background: {
      default: '#282a36',
      paper: '#44475a',
    },
    text: {
      primary: '#f8f8f2',
      secondary: '#bdc2d9',
    },
  },
});

export const RockPaperScissors: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    gamesPlayed: 0,
    ties: 0,
    playerScore: 0,
    computerScore: 0,
    message: '',
  });

  const getComputerChoice = (): Weapon => {
    const weaponNum = Math.floor(Math.random() * 3 + 1);

    switch (weaponNum) {
      case 1:
        return 'ROCK';
      case 2:
        return 'PAPER';
      default:
        return 'SCISSORS';
    }
  };

  const playOneRound = (playerWeapon: Weapon) => {
    const computerWeapon = getComputerChoice();
    if (computerWeapon === playerWeapon) {
      setGameState((prev) => ({
        ...prev,
        ties: prev.ties + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `TIE: between your ${playerWeapon} and computer's ${computerWeapon}`,
      }));
    } else if (
      (computerWeapon === 'PAPER' && playerWeapon === 'SCISSORS') ||
      (computerWeapon === 'ROCK' && playerWeapon === 'PAPER') ||
      (computerWeapon === 'SCISSORS' && playerWeapon === 'ROCK')
    ) {
      setGameState((prev) => ({
        ...prev,
        playerScore: prev.playerScore + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `WIN: Machine died with ${computerWeapon}, you killed it with ${playerWeapon}`,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        computerScore: prev.computerScore + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `LOSE: You died with ${playerWeapon}, computer killed you with ${computerWeapon}`,
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      gamesPlayed: 0,
      ties: 0,
      playerScore: 0,
      computerScore: 0,
      message: '',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(circle at top, rgba(80, 250, 123, 0.12), transparent 32rem), #282a36',
        }}
      >
        <Container maxWidth='sm'>
          <Paper
            elevation={10}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              textAlign: 'center',
              border: '1px solid rgba(248, 248, 242, 0.08)',
            }}
          >
            <Typography variant='overline' color='primary'>
              Quick round
            </Typography>
            <Typography variant='h3' gutterBottom>
              Rock Paper Scissors
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={() => playOneRound('ROCK')}
              >
                Rock
              </Button>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={() => playOneRound('PAPER')}
              >
                Paper
              </Button>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={() => playOneRound('SCISSORS')}
              >
                Scissors
              </Button>
            </Stack>

            <Typography
              variant='h6'
              sx={{
                minHeight: 32,
                mt: 4,
                color: gameState.message.includes('WIN')
                  ? '#50fa7b'
                  : gameState.message.includes('TIE')
                    ? '#f1fa8c'
                    : '#ff5555',
              }}
            >
              {gameState.message}
            </Typography>

            {gameState.message.includes('WIN') && (
              <EmojiEventsIcon sx={{ mt: 1, color: '#50fa7b' }} />
            )}
            {gameState.message.includes('TIE') && (
              <PeopleIcon sx={{ mt: 1, color: '#f1fa8c' }} />
            )}
            {gameState.message.includes('LOSE') && (
              <MoodBadIcon sx={{ mt: 1, color: '#ff5555' }} />
            )}

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent='center'
              sx={{ mt: 3 }}
            >
              <Typography>Games: {gameState.gamesPlayed}</Typography>
              <Typography>Ties: {gameState.ties}</Typography>
              <Typography>You: {gameState.playerScore}</Typography>
              <Typography>Computer: {gameState.computerScore}</Typography>
            </Stack>

            <Button
              variant='outlined'
              color='secondary'
              onClick={resetGame}
              sx={{ mt: 4 }}
            >
              Reset
            </Button>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RockPaperScissors;
