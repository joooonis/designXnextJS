import anime from 'animejs';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Mirae() {
  useEffect(() => {
    anime({
      targets: '.mirae',
      translateX: 10,
      loop: true,
      duration: 3000,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.fin',
      rotate: [
        { value: '-2deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
        { value: '2deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <div className="mirae">
      <div className="mx-auto z-99 w-full z-10 items-center relative justify-center">
        <Image
          className="absolute "
          src="/scene01/mirae-body.png"
          width={500}
          height={400}
          alt="mirae-body"
        />
        <Image
          className="fin absolute left-4 top-24  origin-top-left"
          src="/scene01/mirae-fin.png"
          width={400}
          height={400}
          alt="fin"
        />
      </div>
    </div>
  );
}
