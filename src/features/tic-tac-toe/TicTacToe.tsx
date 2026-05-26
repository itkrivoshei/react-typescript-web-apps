import React, { useState } from 'react';
import './TicTacToe.scss';

type Player = {
  name: string;
  mark: 'X' | 'O';
};

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>({
    name: 'Player 1',
    mark: 'X',
  });
  const [aiGame, setAiGame] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [isTie, setIsTie] = useState(false);
  const [boardVisible, setBoardVisible] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkGameOver = (currentBoard: Array<'X' | 'O' | null>): boolean => {
    for (const combination of winningCombinations) {
      if (
        currentBoard[combination[0]] &&
        currentBoard[combination[0]] === currentBoard[combination[1]] &&
        currentBoard[combination[1]] === currentBoard[combination[2]]
      ) {
        setGameOver(true);
        setWinningCells(combination);
        return true;
      }
    }

    if (currentBoard.every((cell) => cell !== null)) {
      setGameOver(true);
      setIsTie(true);
      return true;
    }

    return false;
  };

  const playTurn = (index: number) => {
    if (!(board[index] === null && !gameOver)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer.mark;
    setBoard(newBoard);

    const isGameOver = checkGameOver(newBoard);
    switchPlayer();

    if (!(aiGame && !isGameOver)) {
      return;
    }
    playAiTurn(newBoard, 'O');
    checkGameOver(newBoard);
    switchPlayer();
  };

  const playAiTurn = (
    currentBoard: Array<'X' | 'O' | null>,
    aiMark: 'X' | 'O'
  ) => {
    const emptyCells: number[] = [];
    currentBoard.forEach((cell, index) => {
      if (cell === null) {
        emptyCells.push(index);
      }
    });
    if (!(emptyCells.length > 0)) {
      return;
    }
    const randomIndex =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    currentBoard[randomIndex] = aiMark;
    setBoard(currentBoard);
    checkGameOver(currentBoard);
  };

  const switchPlayer = () => {
    setCurrentPlayer((prev) =>
      prev.mark === 'X'
        ? { name: 'AI', mark: 'O' }
        : { name: 'Player 1', mark: 'X' }
    );
  };

  const startGame = (isAiGame: boolean | null) => {
    setBoardVisible(true);
    setBoard(Array(9).fill(null));
    setCurrentPlayer({ name: 'Player 1', mark: 'X' });
    setAiGame(isAiGame || false);
    setGameOver(false);
    setWinningCells([]);
    setIsTie(false);
  };

  const resetGame = () => {
    startGame(aiGame);
  };

  return (
    <div className='tic-tac-toe-container'>
      <section className='game-panel' aria-label='Tic Tac Toe game'>
        <p className='eyebrow'>Classic grid game</p>
        <h1>Tic Tac Toe</h1>
        <div className='mode-controls'>
          <button
            type='button'
            className={aiGame === true ? 'active-mod' : ''}
            onClick={() => startGame(true)}
          >
            Play against AI
          </button>
          <button
            type='button'
            className={aiGame === false ? 'active-mod' : ''}
            onClick={() => startGame(false)}
          >
            2 Player Game
          </button>
        </div>
        <div id='gameboard' className={boardVisible ? 'visible' : ''}>
          {board.map((cell, index) => (
            <button
              key={index}
              type='button'
              onClick={() => playTurn(index)}
              className={
                winningCells.includes(index) ? 'winner' : isTie ? 'tie' : ''
              }
              aria-label={`Cell ${index + 1}${cell ? ` marked ${cell}` : ''}`}
            >
              {cell}
            </button>
          ))}
        </div>
        {boardVisible && (
          <button type='button' onClick={resetGame}>
            Reset Game
          </button>
        )}
      </section>
    </div>
  );
};

export default TicTacToe;
