import anime from 'animejs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

interface ButtonProps {
  nextPage?: string;
  text: string;
  color?: 'g1' | 'g2' | 'g3' | 'g4' | 'brown';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export default function Button({
  nextPage,
  text,
  className,
  color = 'g2',
  size,
  onClick,
}: ButtonProps) {
  const router = useRouter();

  useEffect(() => {
    anime({
      targets: '.button',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
    });
  }, []);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playBGM = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
  };

  return (
    (color === 'g1' && (
      <div
        onClick={() => {
          if (onClick) {
            playBGM();
            onClick();
            return;
          }
          playBGM();
          router.push(`${nextPage}`);
        }}
        className={`button z-[100] w-fit opacity-0 items-center flex  ${className}  flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer bg-[url('/button/button-g1.png')] bg-contain bg-no-repeat">
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className=" flex z-100 h-full justify-center text-center items-center text-white"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'g3' && (
      <div
        onClick={() => {
          if (onClick) {
            onClick();
            return;
          }
          router.push(`${nextPage}`);
        }}
        className={`button z-10 w-fit opacity-0 items-center flex-col  ${className}  flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-g3.png'}
            fill
            alt="button"
            className="object-contain"
          ></Image>
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="flex absolute w-full h-full justify-center items-center text-white"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'g4' && (
      <div
        onClick={() => {
          if (onClick) {
            onClick();
            return;
          }
          router.push(`${nextPage}`);
        }}
        className={`button z-10 w-fit opacity-0 items-center flex-col  ${className}  flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-g4.png'}
            fill
            alt="button"
            className="object-contain"
          ></Image>
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="flex absolute w-full h-full justify-center items-center text-white"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'brown' && size === 'large' && (
      <div
        onClick={() => {
          playBGM();
          router.push(`${nextPage}`);
        }}
        className={`button z-10 w-fit opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-brown.png'}
            fill
            alt="button"
            className="object-contain scale-x-125"
          ></Image>
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="flex absolute w-full h-full justify-center items-center"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'brown' && (
      <div
        onClick={() => {
          playBGM();
          router.push(`${nextPage}`);
        }}
        className={`button z-10 w-fit opacity-0 items-center mo:scale-100   flex-col scale-75 ${className} w-full flex justify-center`}
      >
        <audio src="/audio/transition.wav" ref={audioRef}></audio>
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-brown.png'}
            fill
            alt="button"
            className="object-contain"
          ></Image>
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="flex absolute w-full h-full justify-center items-center"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) || (
      <div
        onClick={() => router.push(`${nextPage}`)}
        className={`button z-10 w-fit opacity-0 items-center flex-col  ${className}  flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-g2.png'}
            fill
            alt="button"
            className="object-contain"
          ></Image>
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="flex absolute w-full h-full justify-center items-center text-white"
          >
            {text}
          </motion.div>
        </div>
      </div>
    )
  );
}
