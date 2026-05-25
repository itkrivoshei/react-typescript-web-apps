import React, { useEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';

import pressGeneric from '../../assets/Calculator/audio/pressGeneric.mp3';
import releaseGeneric from '../../assets/Calculator/audio/releaseGeneric.mp3';
import pressLongKey from '../../assets/Calculator/audio/pressLongKey.mp3';
import releaseLongKey from '../../assets/Calculator/audio/releaseLongKey.mp3';
import { ReactComponent as AcSvg } from '../../assets/Calculator/svg/ac.svg';
import { ReactComponent as Csvg } from '../../assets/Calculator/svg/c.svg';
import { ReactComponent as DivideSvg } from '../../assets/Calculator/svg/divide.svg';
import { ReactComponent as DotSvg } from '../../assets/Calculator/svg/dot.svg';
import { ReactComponent as EightSvg } from '../../assets/Calculator/svg/eight.svg';
import { ReactComponent as EnterSvg } from '../../assets/Calculator/svg/enter.svg';
import { ReactComponent as FiveSvg } from '../../assets/Calculator/svg/five.svg';
import { ReactComponent as FourSvg } from '../../assets/Calculator/svg/four.svg';
import { ReactComponent as GitSvg } from '../../assets/Calculator/svg/git.svg';
import { ReactComponent as MinusSvg } from '../../assets/Calculator/svg/minus.svg';
import { ReactComponent as MultiplySvg } from '../../assets/Calculator/svg/multiply.svg';
import { ReactComponent as NineSvg } from '../../assets/Calculator/svg/nine.svg';
import { ReactComponent as NumLockSvg } from '../../assets/Calculator/svg/numLock.svg';
import { ReactComponent as OneSvg } from '../../assets/Calculator/svg/one.svg';
import { ReactComponent as PlusSvg } from '../../assets/Calculator/svg/plus.svg';
import { ReactComponent as SevenSvg } from '../../assets/Calculator/svg/seven.svg';
import { ReactComponent as SixSvg } from '../../assets/Calculator/svg/six.svg';
import { ReactComponent as ThreeSvg } from '../../assets/Calculator/svg/three.svg';
import { ReactComponent as TwoSvg } from '../../assets/Calculator/svg/two.svg';
import { ReactComponent as VolSvg } from '../../assets/Calculator/svg/vol.svg';
import { ReactComponent as ZeroSvg } from '../../assets/Calculator/svg/zero.svg';
import Button from './Button';
import './Calculator.scss';

type Operator = '+' | '-' | '*' | '/';

type LastOperation = {
  operand: number;
  operator: Operator;
};

const MAX_INPUT_DIGITS = 12;
const MAX_DISPLAY_CHARS = 16;

const supportedKeys = new Set([
  '+',
  '-',
  '*',
  '/',
  '=',
  '.',
  'dot',
  'g',
  'v',
  'n',
  'c',
  'Enter',
  'Escape',
  'Backspace',
  'Delete',
  'NumLock',
  'Clear',
  'ac',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]);

const calculatorButtons = [
  { id: 'ac', dataValue: 'Delete', SvgComponent: AcSvg },
  { id: 'c', dataValue: 'Clear', SvgComponent: Csvg },
  { id: 'divide', dataValue: '/', SvgComponent: DivideSvg },
  { id: 'dot', dataValue: '.', SvgComponent: DotSvg },
  { id: 'eight', dataValue: '8', SvgComponent: EightSvg },
  {
    id: 'enter',
    dataValue: '=',
    SvgComponent: EnterSvg,
    isLongKey: true,
  },
  { id: 'five', dataValue: '5', SvgComponent: FiveSvg },
  { id: 'four', dataValue: '4', SvgComponent: FourSvg },
  { id: 'git', dataValue: 'g', SvgComponent: GitSvg },
  { id: 'minus', dataValue: '-', SvgComponent: MinusSvg },
  { id: 'multiply', dataValue: '*', SvgComponent: MultiplySvg },
  { id: 'nine', dataValue: '9', SvgComponent: NineSvg },
  { id: 'numLock', dataValue: 'NumLock', SvgComponent: NumLockSvg },
  { id: 'one', dataValue: '1', SvgComponent: OneSvg },
  {
    id: 'plus',
    dataValue: '+',
    SvgComponent: PlusSvg,
    isLongKey: true,
  },
  { id: 'seven', dataValue: '7', SvgComponent: SevenSvg },
  { id: 'six', dataValue: '6', SvgComponent: SixSvg },
  { id: 'three', dataValue: '3', SvgComponent: ThreeSvg },
  { id: 'two', dataValue: '2', SvgComponent: TwoSvg },
  { id: 'vol', dataValue: 'v', SvgComponent: VolSvg },
  {
    id: 'zero',
    dataValue: '0',
    SvgComponent: ZeroSvg,
    isLongKey: true,
  },
];

const isDigit = (value: string) => /^\d$/.test(value);
const isOperator = (value: string): value is Operator =>
  ['+', '-', '*', '/'].includes(value);

const getDigitCount = (value: string) => value.replace(/[-.]/g, '').length;

const parseDisplayValue = (value: string) => {
  if (value === 'Error' || value === '-') return null;

  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : null;
};

const formatResult = (value: number) => {
  if (!Number.isFinite(value)) return 'Error';

  const normalizedValue = Math.abs(value) < Number.EPSILON ? 0 : value;
  const roundedValue = Number(normalizedValue.toPrecision(12));
  let output = String(roundedValue);

  if (output.length > MAX_DISPLAY_CHARS) {
    output = roundedValue.toExponential(8).replace(/\.0+e/, 'e');
  }

  return output.length > MAX_DISPLAY_CHARS
    ? roundedValue.toExponential(6)
    : output;
};

const performCalculation = (a: number, b: number, op: Operator) => {
  switch (op) {
    case '+':
      return formatResult(a + b);
    case '-':
      return formatResult(a - b);
    case '*':
      return formatResult(a * b);
    case '/':
      return b === 0 ? 'Error' : formatResult(a / b);
    default:
      return 'Error';
  }
};

const normalizeKeyboardKey = (key: string) => {
  switch (key) {
    case 'c':
    case 'Backspace':
      return 'Clear';
    case 'Enter':
      return '=';
    case 'Escape':
    case 'n':
      return 'NumLock';
    default:
      return key;
  }
};

const Calculator: React.FC = () => {
  const [currentVal, setCurrentVal] = useState('0');
  const [storedVal, setStoredVal] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [git, setGit] = useState(false);
  const [sound, setSound] = useState(false);
  const [power, setPower] = useState(true);
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [lastOperation, setLastOperation] = useState<LastOperation | null>(
    null
  );

  const pGenericButton = useRef<Howl | null>(null);
  const rGenericButton = useRef<Howl | null>(null);
  const pLongButton = useRef<Howl | null>(null);
  const rLongButton = useRef<Howl | null>(null);

  const initializeAudio = () => {
    if (audioInitialized) return;

    pGenericButton.current = new Howl({ src: [pressGeneric], volume: 0.72 });
    rGenericButton.current = new Howl({ src: [releaseGeneric], volume: 0.72 });
    pLongButton.current = new Howl({ src: [pressLongKey], volume: 0.72 });
    rLongButton.current = new Howl({ src: [releaseLongKey], volume: 0.72 });

    if (Howler.ctx?.state === 'suspended') {
      Howler.ctx.resume();
    }

    setAudioInitialized(true);
  };

  const resetCalculator = () => {
    setCurrentVal('0');
    setStoredVal(null);
    setOperator(null);
    setWaitingForOperand(false);
    setLastOperation(null);
  };

  const isClickValid = (value: string) => supportedKeys.has(value);

  const handleSound = (key: string, direction: string) => {
    if (!audioInitialized) return;

    if (direction === 'down' && !isKeyDown && supportedKeys.has(key)) {
      if (['0', '+', 'Enter', '='].includes(key)) {
        pLongButton.current?.play();
      } else {
        pGenericButton.current?.play();
      }
      setIsKeyDown(true);
    } else if (direction === 'up' && supportedKeys.has(key)) {
      if (['0', '+', 'Enter', '='].includes(key)) {
        rLongButton.current?.play();
      } else {
        rGenericButton.current?.play();
      }
      setIsKeyDown(false);
    }
  };

  const appendDigit = (value: string) => {
    setCurrentVal((currentValue) => {
      if (currentValue === 'Error' || waitingForOperand) {
        setWaitingForOperand(false);
        return value;
      }

      if (getDigitCount(currentValue) >= MAX_INPUT_DIGITS) {
        return currentValue;
      }

      if (currentValue === '0') return value;
      if (currentValue === '-0') return `-${value}`;

      return `${currentValue}${value}`;
    });
  };

  const appendDecimal = () => {
    setCurrentVal((currentValue) => {
      if (currentValue === 'Error' || waitingForOperand) {
        setWaitingForOperand(false);
        return '0.';
      }

      if (currentValue.includes('.')) return currentValue;

      return `${currentValue}.`;
    });
  };

  const handleBackspace = () => {
    if (currentVal === 'Error' || waitingForOperand) {
      setCurrentVal('0');
      setWaitingForOperand(false);
      return;
    }

    if (
      currentVal.length <= 1 ||
      (currentVal.length === 2 && currentVal[0] === '-')
    ) {
      setCurrentVal('0');
      return;
    }

    setCurrentVal((currentValue) => currentValue.slice(0, -1));
  };

  const handleOperator = (value: Operator | '=') => {
    if (value === '-' && operator && waitingForOperand) {
      setCurrentVal('-');
      setWaitingForOperand(false);
      return;
    }

    if (value !== '=' && currentVal === 'Error') {
      resetCalculator();
      setOperator(value);
      setWaitingForOperand(true);
      return;
    }

    const inputValue = parseDisplayValue(currentVal);

    if (inputValue === null) return;

    if (value === '=') {
      if (operator && storedVal !== null) {
        const result = performCalculation(storedVal, inputValue, operator);
        setCurrentVal(result);
        setLastOperation(
          result === 'Error' ? null : { operand: inputValue, operator }
        );
        setStoredVal(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }

      if (lastOperation) {
        const result = performCalculation(
          inputValue,
          lastOperation.operand,
          lastOperation.operator
        );
        setCurrentVal(result);
        setWaitingForOperand(true);
      }

      return;
    }

    if (operator && storedVal !== null && !waitingForOperand) {
      const result = performCalculation(storedVal, inputValue, operator);
      setCurrentVal(result);
      setStoredVal(result === 'Error' ? null : Number(result));
      setOperator(result === 'Error' ? null : value);
      setWaitingForOperand(true);
      setLastOperation(null);
      return;
    }

    setStoredVal(inputValue);
    setOperator(value);
    setWaitingForOperand(true);
    setLastOperation(null);
  };

  const handleInput = (value: string) => {
    if (!power || value === 'NumLock' || value === 'g' || value === 'v') return;

    if (value === 'Clear') {
      handleBackspace();
      return;
    }

    if (value === 'Delete') {
      resetCalculator();
      return;
    }

    if (isOperator(value) || value === '=') {
      handleOperator(value);
      return;
    }

    if (isDigit(value)) {
      appendDigit(value);
      return;
    }

    if (value === '.') {
      appendDecimal();
    }
  };

  const handleCommandButtons = (value: string) => {
    switch (value) {
      case 'g':
        setGit(true);
        window.open('https://github.com/itkrivoshei', '_blank', 'noreferrer');
        break;
      case 'v':
        initializeAudio();
        setSound((currentSound) => !currentSound);
        break;
      case 'NumLock':
        setPower((currentPower) => {
          if (currentPower) resetCalculator();
          return !currentPower;
        });
        break;
      default:
        break;
    }
  };

  const handleMouseDown = (dataValue: string) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'down');
    handleInput(dataValue);
  };

  const handleMouseUp = (dataValue: string) => {
    if (sound || dataValue === 'v') handleSound(dataValue, 'up');
    if (['g', 'NumLock', 'v'].includes(dataValue)) {
      handleCommandButtons(dataValue);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || !isClickValid(event.key)) return;

      const finalKey = normalizeKeyboardKey(event.key);
      if (sound || event.key === 'v') handleSound(event.key, 'down');
      handleInput(finalKey);

      if (['g', 'NumLock', 'v'].includes(finalKey)) {
        handleCommandButtons(finalKey);
      }

      setLastKeyPressed(finalKey);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!isClickValid(event.key)) return;
      if (sound || event.key === 'v') handleSound(event.key, 'up');
      setLastKeyPressed(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    initializeAudio();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    sound,
    isKeyDown,
    power,
    audioInitialized,
    currentVal,
    operator,
    storedVal,
  ]);

  return (
    <div className='calculator-container'>
      <div className='statusPanel'>
        <div>
          Num
          <br />
          Lock
          <div className={`light ${power ? 'flash' : ''}`} />
        </div>
        <div>
          Volume
          <div className={`light ${sound ? 'flash' : ''}`} />
        </div>
        <div>
          Git
          <br />
          Check
          <div className={`light ${git ? 'flash' : ''}`} />
        </div>
      </div>
      <div className={`display ${power ? '' : 'lock'}`} title={currentVal}>
        {currentVal}
      </div>
      <div className='buttons'>
        {calculatorButtons.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            dataValue={button.dataValue}
            SvgComponent={button.SvgComponent}
            isLongKey={button.isLongKey}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            isActive={button.dataValue === lastKeyPressed}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
