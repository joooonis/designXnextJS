import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  // console log curren route
  useEffect(() => {
    console.log(router.route);
  }, [router.route]);

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current?.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mx-auto w-full cursor-circle hover:cursor-[url('/asset/hover.png') 8 8]">
      <AnimatePresence mode="sync">
        <div className="hidden">
          <audio controls loop autoPlay ref={audioRef} onPlay={handlePlay}>
            <source src="/audio/bgm1.mp3" type="audio/mp3" />
          </audio>
        </div>

        {!isPlaying && <button onClick={handlePlay}> Play</button>}

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
