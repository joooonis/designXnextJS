import anime from 'animejs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  nextPage?: string;
  message: string;
  color?: 'green' | 'blue' | 'purple' | 'lavender';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  nextPage,
  message,
  className,
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

  const handleClick = () => {
    if (onClick) onClick();
    nextPage && router.push(`${nextPage}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`button z-10 opacity-0 items-center flex-col ${className} flex justify-center`}
    >
      <div className="flex cursor-pointer  text-sm h-16 w-48 bg-contain bg-no-repeat bg-center bg-[url('/svg/button-ver2.png')] text-white justify-center items-center">
        <motion.div
          whileHover={{
            translateY: [0, 4, -2, 0],
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
        >
          {message}
        </motion.div>
      </div>
    </button>
  );
}
