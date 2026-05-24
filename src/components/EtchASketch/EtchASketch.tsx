import React, { useEffect, useMemo, useRef, useState } from 'react';
import './EtchASketch.scss';

type DrawMode = 'color' | 'rainbow' | 'shadow';

const MIN_BOARD_SIZE = 4;
const MAX_BOARD_SIZE = 64;
const DEFAULT_BOARD_SIZE = 24;
const DEFAULT_BOARD_COLOR = '#f8fafc';
const DEFAULT_PIXEL_COLOR = '#6366f1';

const drawModes: Array<{ value: DrawMode; label: string; description: string }> = [
  {
    value: 'color',
    label: 'Color',
    description: 'Draw with the selected color.',
  },
  {
    value: 'rainbow',
    label: 'Rainbow',
    description: 'Use a random color for each cell.',
  },
  {
    value: 'shadow',
    label: 'Shadow',
    description: 'Darken cells step by step.',
  },
];

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16_777_215)
    .toString(16)
    .padStart(6, '0')}`;

const clampBoardSize = (size: number) =>
  Math.min(Math.max(size, MIN_BOARD_SIZE), MAX_BOARD_SIZE);

const EtchASketch: React.FC = () => {
  const [boardSize, setBoardSize] = useState<number>(DEFAULT_BOARD_SIZE);
  const [boardColor, setBoardColor] = useState<string>(DEFAULT_BOARD_COLOR);
  const [pixelColor, setPixelColor] = useState<string>(DEFAULT_PIXEL_COLOR);
  const [drawMode, setDrawMode] = useState<DrawMode>('color');
  const [tempBoardSize, setTempBoardSize] = useState<string>(
    String(DEFAULT_BOARD_SIZE)
  );

  const workspaceRef = useRef<HTMLDivElement | null>(null);
  const rows = useMemo(() => Array.from({ length: boardSize }), [boardSize]);

  const resetPixels = (nextBoardColor = boardColor) => {
    const pixels = workspaceRef.current?.querySelectorAll(
      '.pixel'
    ) as NodeListOf<HTMLDivElement> | undefined;

    pixels?.forEach((pixel) => {
      pixel.style.backgroundColor = nextBoardColor;
      pixel.style.filter = '';
    });
  };

  const handlePixelMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (drawMode === 'rainbow') {
      target.style.backgroundColor = getRandomColor();
      target.style.filter = '';
      return;
    }

    if (drawMode === 'shadow') {
      const currentBrightness = target.style.filter
        ? parseFloat(target.style.filter.split('(')[1])
        : 1;

      target.style.filter = `brightness(${Math.max(
        currentBrightness - 0.12,
        0
      )})`;
      return;
    }

    target.style.backgroundColor = pixelColor;
    target.style.filter = '';
  };

  const handleSetNewBoard = () => {
    const parsedSize = Number(tempBoardSize);
    const nextSize = Number.isFinite(parsedSize)
      ? clampBoardSize(parsedSize)
      : DEFAULT_BOARD_SIZE;

    setBoardSize(nextSize);
    setTempBoardSize(String(nextSize));
  };

  const handleReset = () => {
    setBoardSize(DEFAULT_BOARD_SIZE);
    setTempBoardSize(String(DEFAULT_BOARD_SIZE));
    setBoardColor(DEFAULT_BOARD_COLOR);
    setPixelColor(DEFAULT_PIXEL_COLOR);
    setDrawMode('color');
  };

  useEffect(() => {
    resetPixels(boardColor);
  }, [boardSize, boardColor]);

  return (
    <main className='etch-a-sketch-container'>
      <section className='etch-panel' aria-label='Etch A Sketch drawing app'>
        <div className='etch-header'>
          <p>Grid drawing tool</p>
          <h1>Etch A Sketch</h1>
          <span>
            Hover across the canvas to draw. Tune the grid, background, and brush
            mode.
          </span>
        </div>

        <div className='etch-layout'>
          <aside className='controls' aria-label='Drawing controls'>
            <div className='control-card'>
              <label htmlFor='board-size'>Board size</label>
              <div className='inline-control'>
                <input
                  id='board-size'
                  type='number'
                  min={MIN_BOARD_SIZE}
                  max={MAX_BOARD_SIZE}
                  value={tempBoardSize}
                  onChange={(event) => setTempBoardSize(event.target.value)}
                />
                <button type='button' onClick={handleSetNewBoard}>
                  Apply
                </button>
              </div>
              <small>
                {MIN_BOARD_SIZE}–{MAX_BOARD_SIZE} cells per side
              </small>
            </div>

            <div className='control-card'>
              <label htmlFor='board-color'>Canvas color</label>
              <input
                id='board-color'
                type='color'
                value={boardColor}
                onChange={(event) => setBoardColor(event.target.value)}
              />
            </div>

            <div className='control-card'>
              <label htmlFor='pixel-color'>Brush color</label>
              <input
                id='pixel-color'
                type='color'
                value={pixelColor}
                onChange={(event) => {
                  setPixelColor(event.target.value);
                  setDrawMode('color');
                }}
              />
            </div>

            <div className='control-card'>
              <span className='control-label'>Brush mode</span>
              <div className='mode-grid'>
                {drawModes.map((mode) => (
                  <button
                    key={mode.value}
                    type='button'
                    className={drawMode === mode.value ? 'active-mode' : ''}
                    aria-pressed={drawMode === mode.value}
                    title={mode.description}
                    onClick={() => setDrawMode(mode.value)}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div className='action-row'>
              <button type='button' onClick={() => resetPixels()}>
                Clear canvas
              </button>
              <button type='button' className='secondary' onClick={handleReset}>
                Reset
              </button>
            </div>
          </aside>

          <div className='workspace-wrap'>
            <div
              className='work-space'
              ref={workspaceRef}
              style={{ backgroundColor: boardColor }}
            >
              {rows.map((_, rowIndex) => (
                <div key={rowIndex} className='row'>
                  {rows.map((__, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className='pixel'
                      style={{ backgroundColor: boardColor }}
                      onMouseOver={handlePixelMouseOver}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className='sketch-meta'>
              <span>{boardSize} × {boardSize}</span>
              <span>{drawMode} mode</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EtchASketch;
