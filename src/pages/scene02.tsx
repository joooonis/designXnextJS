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
          src="/scene02/mirae-mom.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="mirae w-[1280px] right-0 absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/scene02/mirae-baby.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="mirae w-[1280px] right-0 absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/scene02/bg.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 6 }}
          className="background w-full absolute opacity-50"
        ></motion.img>
        <div className="mo:scale-100 scale-75 flex flex-col absolute mo:top-[5%] bottom-[12.5%] mo:my-12 z-10 w-full mx-auto">
          <Chats
            chats={[
              {
                message: '내가 어릴때는 바다가 정말 아름다웠어!',
                isLoading: true,
                url: '/tts/scene2/01.wav',
              },
              {
                isLoading: true,
                message: '엄마 등에 매달려서 이곳저곳을 돌아다녔지.',
                url: '/tts/scene2/02.wav',
              },
              {
                isLoading: true,
                message:
                  '그때는 친구들고 많고 먹이도 많았는데, 바다가 점점 더러워지면서 친구들이 사라지고 먹이도 없어졌어..',
                url: '/tts/scene2/03.wav',
              },
              {
                message: '그러다가 결국에는...',
                isLoading: true,
                url: '/tts/scene2/04.wav',
              },
            ]}
            durations={[3, 7, 12, 21]}
          />
        </div>
        <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-[10%]">
          <div className="relative">
            {buttonRender && (
              <Button
                nextPage="/scene03"
                color="brown"
                text="다음"
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
