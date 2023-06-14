import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="mx-auto w-full cursor-circle hover:cursor-[url('/asset/hover.png') 8 8]">
      <AnimatePresence mode="sync">
        <audio src="/audio/bgm1.mp3" autoPlay ref={audioRef} loop></audio>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
