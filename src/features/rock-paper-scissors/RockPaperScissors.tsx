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
  Chip,
  Divider,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import MoodBadIcon from '@mui/icons-material/MoodBad';

type Weapon = 'ROCK' | 'PAPER' | 'SCISSORS';
type Outcome = 'win' | 'loss' | 'tie' | null;
type OutcomeView = Exclude<Outcome, null> | 'idle';

interface GameState {
  gamesPlayed: number;
  ties: number;
  playerScore: number;
  computerScore: number;
  message: string;
  playerWeapon: Weapon | null;
  computerWeapon: Weapon | null;
  outcome: Outcome;
}

const weapons: { value: Weapon; label: string; icon: string }[] = [
  { value: 'ROCK', label: 'Rock', icon: '✊' },
  { value: 'PAPER', label: 'Paper', icon: '✋' },
  { value: 'SCISSORS', label: 'Scissors', icon: '✌️' },
];

const initialGameState: GameState = {
  gamesPlayed: 0,
  ties: 0,
  playerScore: 0,
  computerScore: 0,
  message: 'Choose a weapon to start the round.',
  playerWeapon: null,
  computerWeapon: null,
  outcome: null,
};

const outcomeStyles: Record<OutcomeView, { label: string; color: string }> = {
  idle: { label: 'Ready', color: '#cbd5e1' },
  win: { label: 'Win', color: '#22c55e' },
  loss: { label: 'Loss', color: '#fb7185' },
  tie: { label: 'Tie', color: '#facc15' },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#38bdf8' },
    secondary: { main: '#f97316' },
    background: { default: '#0f172a', paper: '#1e293b' },
    text: { primary: '#f8fafc', secondary: '#cbd5e1' },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-0.07em' },
    h6: { fontWeight: 900 },
  },
  shape: { borderRadius: 10 },
});

const getComputerChoice = (): Weapon => {
  const weaponIndex = Math.floor(Math.random() * weapons.length);
  return weapons[weaponIndex].value;
};

const getRoundResult = (
  playerWeapon: Weapon,
  computerWeapon: Weapon
): Outcome => {
  if (computerWeapon === playerWeapon) return 'tie';

  if (
    (computerWeapon === 'PAPER' && playerWeapon === 'SCISSORS') ||
    (computerWeapon === 'ROCK' && playerWeapon === 'PAPER') ||
    (computerWeapon === 'SCISSORS' && playerWeapon === 'ROCK')
  ) {
    return 'win';
  }

  return 'loss';
};

const getRoundMessage = (
  outcome: Outcome,
  playerWeapon: Weapon,
  computerWeapon: Weapon
) => {
  switch (outcome) {
    case 'win':
      return `${playerWeapon} beats ${computerWeapon}. You win this round.`;
    case 'loss':
      return `${computerWeapon} beats ${playerWeapon}. Computer wins this round.`;
    default:
      return `Both picked ${playerWeapon}. The round is tied.`;
  }
};

const ResultIcon: React.FC<{ outcome: Outcome }> = ({ outcome }) => {
  if (outcome === 'win')
    return <EmojiEventsIcon sx={{ fontSize: 46, color: '#22c55e' }} />;
  if (outcome === 'tie')
    return <PeopleIcon sx={{ fontSize: 46, color: '#facc15' }} />;
  if (outcome === 'loss')
    return <MoodBadIcon sx={{ fontSize: 46, color: '#fb7185' }} />;
  return null;
};

export const RockPaperScissors: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const currentOutcome: OutcomeView = gameState.outcome ?? 'idle';
  const resultStyle = outcomeStyles[currentOutcome];

  const playOneRound = (playerWeapon: Weapon) => {
    const computerWeapon = getComputerChoice();
    const outcome = getRoundResult(playerWeapon, computerWeapon);

    setGameState((prev) => ({
      gamesPlayed: prev.gamesPlayed + 1,
      ties: outcome === 'tie' ? prev.ties + 1 : prev.ties,
      playerScore: outcome === 'win' ? prev.playerScore + 1 : prev.playerScore,
      computerScore:
        outcome === 'loss' ? prev.computerScore + 1 : prev.computerScore,
      message: getRoundMessage(outcome, playerWeapon, computerWeapon),
      playerWeapon,
      computerWeapon,
      outcome,
    }));
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          py: { xs: 4, md: 6 },
          background:
            'radial-gradient(circle at 18% 0, rgba(56, 189, 248, 0.2), transparent 30rem), radial-gradient(circle at 88% 12%, rgba(249, 115, 22, 0.16), transparent 28rem), linear-gradient(135deg, #0f172a, #111827 55%, #312e81)',
        }}
      >
        <Container maxWidth='md'>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 4 },
              borderRadius: 3,
              border: '1px solid rgba(248, 250, 252, 0.12)',
              background:
                'linear-gradient(145deg, rgba(15, 23, 42, 0.94), rgba(30, 41, 59, 0.9))',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.34)',
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems='stretch'
            >
              <Box sx={{ flex: 1.1 }}>
                <Typography
                  variant='overline'
                  color='primary'
                  sx={{ fontWeight: 900, letterSpacing: '0.18em' }}
                >
                  Arcade round
                </Typography>
                <Typography
                  variant='h1'
                  sx={{
                    mt: 1,
                    fontSize: { xs: '3rem', md: '4.6rem' },
                    lineHeight: 0.92,
                  }}
                >
                  Rock Paper Scissors
                </Typography>
                <Typography
                  color='text.secondary'
                  sx={{ mt: 2, maxWidth: 520, lineHeight: 1.8 }}
                >
                  Pick a weapon, compare it against the computer, and track the
                  score through quick repeated rounds.
                </Typography>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(3, minmax(0, 1fr))',
                    },
                    gap: 1.5,
                    mt: 4,
                  }}
                >
                  {weapons.map((weapon) => (
                    <Button
                      key={weapon.value}
                      variant='contained'
                      color='primary'
                      onClick={() => playOneRound(weapon.value)}
                      sx={{
                        minHeight: 116,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 1.25,
                        p: 2,
                        borderRadius: 2,
                        color: '#0f172a',
                        textAlign: 'center',
                        boxShadow: '0 16px 36px rgba(56, 189, 248, 0.16)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 20px 44px rgba(56, 189, 248, 0.24)',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '2.3rem', lineHeight: 1 }}>
                        {weapon.icon}
                      </Typography>
                      <Typography variant='h6' sx={{ lineHeight: 1 }}>
                        {weapon.label}
                      </Typography>
                    </Button>
                  ))}
                </Box>
              </Box>

              <Paper
                variant='outlined'
                sx={{
                  flex: 0.9,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2,
                  borderColor: 'rgba(248, 250, 252, 0.12)',
                  background: 'rgba(15, 23, 42, 0.66)',
                }}
              >
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  spacing={2}
                >
                  <Typography variant='overline' color='text.secondary'>
                    Round status
                  </Typography>
                  <Chip
                    size='small'
                    label={resultStyle.label}
                    sx={{
                      borderRadius: 1.5,
                      borderColor: resultStyle.color,
                      color: resultStyle.color,
                      fontWeight: 900,
                    }}
                    variant='outlined'
                  />
                </Stack>

                <Box
                  sx={{
                    minHeight: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1.5,
                    border: '1px solid rgba(248, 250, 252, 0.1)',
                    borderRadius: 2,
                    background:
                      'radial-gradient(circle at top, rgba(56, 189, 248, 0.12), transparent 15rem)',
                    textAlign: 'center',
                    px: 2,
                  }}
                >
                  <ResultIcon outcome={gameState.outcome} />
                  <Typography
                    variant='h6'
                    sx={{ minHeight: 32, color: resultStyle.color }}
                  >
                    {gameState.message}
                  </Typography>
                  {gameState.playerWeapon && gameState.computerWeapon && (
                    <Typography variant='body2' color='text.secondary'>
                      You: {gameState.playerWeapon} · Computer:{' '}
                      {gameState.computerWeapon}
                    </Typography>
                  )}
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 1.5,
                  }}
                >
                  <ScoreCard label='You' value={gameState.playerScore} />
                  <ScoreCard label='Computer' value={gameState.computerScore} />
                  <ScoreCard label='Ties' value={gameState.ties} />
                  <ScoreCard label='Rounds' value={gameState.gamesPlayed} />
                </Box>

                <Divider />

                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={resetGame}
                  sx={{ borderRadius: 2, fontWeight: 900 }}
                >
                  Reset score
                </Button>
              </Paper>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

type ScoreCardProps = {
  label: string;
  value: number;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ label, value }) => {
  return (
    <Box
      sx={{
        p: 1.5,
        border: '1px solid rgba(248, 250, 252, 0.1)',
        borderRadius: 2,
        background: 'rgba(30, 41, 59, 0.64)',
      }}
    >
      <Typography variant='caption' color='text.secondary'>
        {label}
      </Typography>
      <Typography variant='h5' sx={{ fontWeight: 900 }}>
        {value}
      </Typography>
    </Box>
  );
};

export default RockPaperScissors;
