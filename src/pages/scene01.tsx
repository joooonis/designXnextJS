import Layout from '@components/common/layout';
import Image from 'next/image';
import { useEffect } from 'react';
import anime from 'animejs';
import Chat from '@components/chat/chat';
export default function Scene01() {
  useEffect(() => {
    //animation on classname grass-1 when load
    // fade in duraiton 2s
    anime({
      targets: '.grass-1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 3000,
    });
    anime({
      targets: '.grass-2',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      delay: 1000,
      duration: 3000,
    });
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="absolute -bottom-8 origin-bottom right-12">
          <Image
            className="grass-1"
            src="/background/grass/01.png"
            width={500}
            height={500}
            alt="grass-1"
          />
        </div>
        <div className="absolute -bottom-8 origin-bottom left-12">
          <Image
            className="grass-2"
            src="/background/grass/02.png"
            width={500}
            height={500}
            alt="grass-1"
          />
        </div>
        <Chat />
      </div>
    </Layout>
  );
}
