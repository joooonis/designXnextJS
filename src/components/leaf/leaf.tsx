import Image from 'next/image';
import { useEffect } from 'react';

import anime from 'animejs';

export default function Leaf() {
  useEffect(() => {
    // leaf animation
    anime({
      targets: '.leaf-1',
      rotate: [
        { value: '10deg', duration: 2000 },
        { value: '5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.leaf-2',
      rotate: [
        { value: '5deg', duration: 1000 },
        { value: '0deg', duration: 1000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.leaf-3',
      rotate: [
        { value: '-10deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <>
      <div className="absolute bottom-0 origin-bottom left-40">
        <Image
          className="leaf-1"
          src="/svg/leaf-green-1.svg"
          width={40}
          height={40}
          alt="leaf-1"
        />
      </div>
      <div className="absolute bottom-0 origin-bottom right-40 leaf-2">
        <Image
          src="/svg/leaf-green-2.svg"
          width={10}
          height={10}
          alt="leaf-2"
        />
      </div>
      <div className="absolute bottom-0 origin-bottom right-60 leaf-3">
        <Image
          src="/svg/leaf-green-3.svg"
          width={16}
          height={16}
          alt="leaf-3"
        />
      </div>
    </>
  );
}
