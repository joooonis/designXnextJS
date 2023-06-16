import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const bgm2Ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (router.route === '/mission' || router.route === '/field') {
      if (!audioRef.current?.paused) audioRef.current?.pause();
      bgm2Ref.current?.play();
    }

    if (router.route === '/') {
      if (!bgm2Ref.current?.paused) bgm2Ref.current?.pause();
      audioRef.current?.play();
    }
  }, [router.route]);

  const handlePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="mx-auto w-full cursor-circle hover:cursor-[url('/asset/hover.png') 8 8]">
      <AnimatePresence mode="sync">
        <div className="hidden">
          <audio controls loop ref={audioRef}>
            <source src="/audio/bgm1.mp3" type="audio/mp3" />
          </audio>
          <audio controls loop ref={bgm2Ref}>
            <source src="/audio/bgm2.mp3" type="audio/mp3" />
          </audio>
        </div>
        {router.route === '/' && (
          <>
            <button
              className="bg-[#88bfa5] bottom-12 flex justify-center items-center right-12  z-[999] absolute w-10 aspect-square rounded-full"
              onClick={handlePlay}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              )}{' '}
            </button>
          </>
        )}

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
