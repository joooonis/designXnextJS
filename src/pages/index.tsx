import Layout from '@components/common/layout';
import anime from 'animejs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Leaf from '@components/leaf/leaf';

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
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="w-full font-Ubuntu font-normal absolute top-44 text-[#403227] title text-2xl my-auto text-center">
          The story of a little dugeong, MIRAE
        </div>
        <Leaf />
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
          <div className="absolute bottom-40 flex w-full space-x-8 justify-center items-center">
            <Button nextPage="/scene01" color="g2" text="S T O R Y" />
            <Button nextPage="/field" color="g3" text="M I R A E" />
            <Button nextPage="/mission01" color="g4" text="M I S S I O N" />
          </div>
        )}
        <div className="relative" id="snow"></div>
      </div>
    </Layout>
  );
}
