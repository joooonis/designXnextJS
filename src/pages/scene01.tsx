import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
import { motion } from 'framer-motion';
import anime from 'animejs';

export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
        },
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 28000);
  }, []);

  return (
    <Layout>
      <div className="relative h-screen w-full overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="/scene01/mirae.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="  scale-90 mo:w-full mo:h-full  top-24 mo:top-0 mo:scale-100 rounded-md absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/scene01/bg.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 6 }}
          className="background mo:w-full mo:h-full top-24 mo:top-0 scale-90 mo:scale-100 rounded-md absolute opacity-50"
        ></motion.img>

        <div className="mo:scale-100 scale-75 flex flex-col absolute mo:top-[5%] bottom-[12.5%] mo:my-12 z-10 w-full mx-auto">
          <Chats
            chats={[
              {
                message: '안녕 나는 미래라고해!',
                isLoading: true,
                url: '/tts/scene1/01.wav',
              },
              {
                isLoading: true,
                message: '지금 우리 듀공들은 힘든 시기를 보내고 있어..',
                url: '/tts/scene1/02.wav',
              },
              {
                isLoading: true,
                message:
                  '이전에는 먹이를 쉽게 구할 수 있었지만, 점점 찾기가 힘들어지고 있거든..',
                url: '/tts/scene1/03.wav',
              },
              {
                isLoading: true,
                message: '그동안 무슨일이 있었는지 알려줄게. 나를 따라와줘!',
                url: '/tts/scene1/04.wav',
              },
            ]}
            durations={[6, 13, 16, 22]}
          />
        </div>
      </div>
      <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-4">
        <div className="relative">
          {buttonRender && (
            <Button
              nextPage="/scene02"
              color="brown"
              text="다음"
              className={`bottom-[160px] font-PoorStory ${
                buttonRender ? 'visible' : 'invisible'
              }`}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
