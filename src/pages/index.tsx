import Layout from '@components/common/layout';
import anime from 'animejs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';

export default function Home() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    const textWrapper = document.querySelector('.title');
    if (!textWrapper) return;
    textWrapper.innerHTML = textWrapper?.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );
    anime
      .timeline({ loop: false })
      .add({
        targets: '.title .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: (el, i) => 50 * (i + 1),
      })
      .add({
        targets: '.reveal',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: () => {
          // complete callback
          setButtonRender(true);
        },
      });

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
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="w-full absolute top-44 text-[#403227] title text-xl my-auto font-medium text-center">
          The story of a little dugeong, MIRAE
        </div>
        <div className="absolute bottom-0 origin-bottom left-16">
          <Image
            className="leaf-1"
            src="/svg/leaf-green-1.svg"
            width={40}
            height={40}
            alt="leaf-1"
          />
        </div>
        <div className="absolute bottom-0 origin-bottom right-16 leaf-2">
          <Image
            src="/svg/leaf-green-2.svg"
            width={10}
            height={10}
            alt="leaf-2"
          />
        </div>
        <div className="reveal bg-center bg-[length:110%_110%] bg-[url('/mirae/background.png')] opacity-0 scale-110 mx-auto h-96 w-96 z-10 translate-y-60 items-center flex-col relative flex justify-center trnaslate-y-1/2">
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
        </div>

        {buttonRender && (
          <Button nextPage="/scene01" text="E N T E R" className="bottom-1/4" />
        )}

        <div className="absolute bottom-0 origin-bottom right-24 leaf-3">
          <Image
            src="/svg/leaf-green-3.svg"
            width={16}
            height={16}
            alt="leaf-3"
          />
        </div>
        <div className="relative" id="snow"></div>
      </div>
    </Layout>
  );
}
