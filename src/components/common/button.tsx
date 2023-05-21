import anime from 'animejs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ButtonProps {
  nextPage: string;
  text: string;
  className: string;
}

export default function Button({ nextPage, text, className }: ButtonProps) {
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
    <div
      onClick={() => router.push(`${nextPage}`)}
      className={`button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
    >
      <div className="flex cursor-pointer  text-sm h-14 w-52 bg-contain bg-no-repeat bg-center bg-[url('/svg/enter-button.svg')] text-white justify-center items-center">
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
  );
}
