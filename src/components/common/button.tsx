import anime from 'animejs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ButtonProps {
  nextPage?: string;
  text: string;
  color?: 'green' | 'blue' | 'yellow' | 'brown';
  className?: string;
}

export default function Button({
  nextPage,
  text,
  className,
  color = 'green',
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

  return (
    (color === 'blue' && (
      <div
        onClick={() => router.push(`${nextPage}`)}
        className={`button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
      >
        <div className="flex cursor-pointer  text-sm h-16 w-64 bg-contain bg-no-repeat bg-center bg-[url('/button/button-blue.png')] text-white justify-center items-center">
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'yellow' && (
      <div
        onClick={() => router.push(`${nextPage}`)}
        className={`button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
      >
        <div className="flex cursor-pointer  text-sm h-16 w-64 bg-contain bg-no-repeat bg-center bg-[url('/button/button-yellow.png')] text-white justify-center items-center">
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) ||
    (color === 'brown' && (
      <div
        onClick={() => router.push(`${nextPage}`)}
        className={`button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
      >
        <div className="flex cursor-pointer text-base font-medium h-16 w-64 bg-contain bg-no-repeat bg-center bg-[url('/button/button-brown.png')] text-black justify-center items-center">
          <motion.div
            whileHover={{
              translateY: [0, 4, -2, 0],
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    )) || (
      <div
        onClick={() => router.push(`${nextPage}`)}
        className={`button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
      >
        <div className="relative h-16 w-44 cursor-pointer ">
          <Image
            src={'/button/button-green.png'}
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
