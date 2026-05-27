import React, { useEffect, useRef } from 'react';
import './DrumKit.scss';

import clapSound from '../../assets/DrumKit/sounds/clap.wav';
import hihatSound from '../../assets/DrumKit/sounds/hihat.wav';
import kickSound from '../../assets/DrumKit/sounds/kick.wav';
import openhatSound from '../../assets/DrumKit/sounds/openhat.wav';
import rideSound from '../../assets/DrumKit/sounds/ride.wav';
import snareSound from '../../assets/DrumKit/sounds/snare.wav';
import tomSound from '../../assets/DrumKit/sounds/tom.wav';
import tinkSound from '../../assets/DrumKit/sounds/tink.wav';

type DrumPad = {
  keyChar: string;
  soundName: string;
  keyCode: number;
  sound: string;
  volume?: number;
  playbackRate?: number;
};

const drumPads: DrumPad[] = [
  { keyChar: 'A', soundName: 'clap', keyCode: 65, sound: clapSound },
  { keyChar: 'S', soundName: 'hihat', keyCode: 83, sound: hihatSound },
  { keyChar: 'D', soundName: 'kick', keyCode: 68, sound: kickSound },
  { keyChar: 'F', soundName: 'openhat', keyCode: 70, sound: openhatSound },
  {
    keyChar: 'G',
    soundName: 'low kick',
    keyCode: 71,
    sound: kickSound,
    volume: 0.6,
    playbackRate: 0.82,
  },
  { keyChar: 'H', soundName: 'ride', keyCode: 72, sound: rideSound },
  { keyChar: 'J', soundName: 'snare', keyCode: 74, sound: snareSound },
  { keyChar: 'K', soundName: 'tom', keyCode: 75, sound: tomSound },
  { keyChar: 'L', soundName: 'tink', keyCode: 76, sound: tinkSound },
];

type DrumKeyProps = {
  pad: DrumPad;
};

const DrumKey: React.FC<DrumKeyProps> = ({ pad }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const keyRef = useRef<HTMLButtonElement | null>(null);

  const playSound = () => {
    if (!keyRef.current || !audioRef.current) return;

    const audio = audioRef.current;

    keyRef.current.classList.add('playing');
    audio.pause();
    audio.currentTime = 0;
    audio.volume = pad.volume ?? 0.82;
    audio.playbackRate = pad.playbackRate ?? 1;
    audio.play().catch((err: unknown) => {
      console.error('Failed to play drum sample:', err);
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.keyCode !== pad.keyCode) return;
      playSound();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pad.keyCode]);

  useEffect(() => {
    const keyElement = keyRef.current;

    const removeTransition = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') return;
      keyElement?.classList.remove('playing');
    };

    keyElement?.addEventListener('transitionend', removeTransition);
    return () => {
      keyElement?.removeEventListener('transitionend', removeTransition);
    };
  }, []);

  return (
    <>
      <button
        ref={keyRef}
        type='button'
        data-key={pad.keyCode}
        className='key'
        aria-label={`Play ${pad.soundName}`}
        onClick={playSound}
      >
        <kbd>{pad.keyChar}</kbd>
        <span className='sound'>{pad.soundName}</span>
      </button>
      <audio
        ref={audioRef}
        data-key={pad.keyCode}
        src={pad.sound}
        preload='auto'
        onError={(event) => {
          const target = event.target as HTMLAudioElement;
          console.error(
            `Error playing ${target.src}: ${target.error?.message}`
          );
        }}
      />
    </>
  );
};

const DrumKit: React.FC = () => {
  return (
    <main className='drum-kit-container'>
      <section className='drum-kit-panel' aria-label='Keyboard drum kit'>
        <div className='drum-kit-heading'>
          <p>Keyboard sampler</p>
          <h1>Drum Kit</h1>
          <span>Use A–L keys or click pads</span>
        </div>

        <div className='keys'>
          {drumPads.map((pad) => (
            <DrumKey key={pad.keyChar} pad={pad} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DrumKit;
