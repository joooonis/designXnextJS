import Layout from '@components/common/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    anime({
      targets: '.grass-1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      delay: 300,
      duration: 3000,
    });
    anime({
      targets: '.grass-2',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      delay: 600,
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 14000);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="absolute -bottom-20 origin-bottom right-0">
          <Image
            className="grass-1"
            src="/background/grass/01.png"
            width={500}
            height={500}
            alt="grass-1"
          />
        </div>
        <div className="absolute -bottom-20 origin-bottom -left-2">
          <Image
            className="grass-2"
            src="/background/grass/02.png"
            width={500}
            height={500}
            alt="grass-1"
          />
        </div>
        <div className="chat-box mx-24 my-12 space-y-6">
          <Chats
            chats={[
              {
                isRight: false,
                isLoading: true,
                message: '저 어린 아이가 너니?',
              },
              {
                isRight: true,
                isLoading: true,
                message:
                  '맞아 저때는 좋았지.. 친구들과 함께 바다를 마음껏 헤엄치고는 했어 하지만..',
              },
              {
                isRight: false,
                message: '무슨일이 일어난거야?',
              },
              {
                isRight: true,
                message: '나를 따라와줘',
              },
            ]}
            durations={[3, 8, 13, 15]}
          />
        </div>
        <div className="absolute w-full -right-20 top-20">
          {/* <Mirae /> */}
        </div>
        {buttonRender && (
          <Button
            nextPage="/scene03"
            text="N E X T"
            className="bottom-[160px]"
          />
        )}
      </div>
    </Layout>
  );
}
