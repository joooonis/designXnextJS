import anime from 'animejs';
import Image from 'next/image';
import { useEffect } from 'react';
import { delay, motion } from 'framer-motion';

export default function Mirae() {
  useEffect(() => {
    anime({
      targets: '.reveal',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
    });

    anime({
      targets: '.fin-1',
      rotate: [
        { value: '-5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
        { value: '5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.fin-2',
      skewX: [
        { value: '-5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
        { value: '5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.fin-3',
      skewX: [
        { value: '7deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
        { value: '-7deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 2 }}
      className="reveal transform scale-x-[-1] mx-auto h-96 w-96 z-10  items-center flex-col relative flex justify-center trnaslate-y-1/2"
    >
      <Image
        className="absolute translate-y-1"
        src="/mirae/body.png"
        width={440}
        height={440}
        alt="mirae-body"
      />
      <Image
        className="fin-1 absolute left-40 origin-top-left"
        src="/mirae/fin-1.svg"
        width={70}
        height={70}
        alt="fin-1"
      />
      <Image
        className="fin-2 absolute -z-10 left-[13.5rem] top-40 origin-top"
        src="/mirae/fin-2.svg"
        width={36}
        height={36}
        alt="fin-2"
      />
      <Image
        className="fin-3 absolute -z-20 left-60 top-36 origin-top"
        src="/mirae/fin-3.svg"
        width={48}
        height={48}
        alt="fin-3"
      />
    </motion.div>
  );
}
