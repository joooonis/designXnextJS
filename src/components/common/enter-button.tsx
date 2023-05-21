import anime from 'animejs';
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
      targets: '.enter-button',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
    });
  }, []);

  return (
    <div
      onClick={() => router.push(`${nextPage}`)}
      className={`enter-button z-10 opacity-0 items-center flex-col absolute ${className} w-full flex justify-center`}
    >
      <div className="flex cursor-pointer hover:opacity-80 text-sm h-14 w-52 bg-contain bg-no-repeat bg-center bg-[url('/svg/enter-button.svg')] text-white justify-center items-center">
        {text}
      </div>
    </div>
  );
}
