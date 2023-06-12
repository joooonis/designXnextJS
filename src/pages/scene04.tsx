import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
import { motion } from 'framer-motion';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 25000);
  }, []);

  return (
    <Layout>
      <div className="relative h-screen w-full overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="/scene04/mirae.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="mirae w-[1280px] right-0 absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/scene04/bg.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 6 }}
          className="background w-full absolute opacity-50"
        ></motion.img>
        <div className="mo:scale-100 scale-75 flex flex-col absolute mo:top-[5%] bottom-[12.5%] mo:my-12 z-10 w-full mx-auto">
          <Chats
            chats={[
              {
                message: '하지만 나는 포기하지 않아!',
                isLoading: true,
                url: '/tts/scene4/01.wav',
              },
              {
                isLoading: true,
                message:
                  '네가 도와준다면 분명 다시 깨끗한 바다로 만들 수 있어!',
                url: '/tts/scene4/02.wav',
              },
              {
                message: '그렇게 되면 나도 다시 친구들을 만날 수 있을거야!',
                isLoading: true,
                url: '/tts/scene4/03.wav',
              },
              {
                message: '너의 도움이 필요해! 바다살리기를 도와줄래?',
                isLoading: true,
                url: '/tts/scene4/04.wav',
              },
            ]}
            durations={[4, 9, 15, 20]}
          />
        </div>
        <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-4">
          <div className="relative">
            {buttonRender && (
              <Button
                nextPage="/scene04"
                color="brown"
                text="미래를 만나러 가요"
                className={`bottom-[160px] font-PoorStory ${
                  buttonRender ? 'visible' : 'invisible'
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
