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
    }, 28000);
  }, []);

  return (
    <Layout>
      <div className="relative h-screen w-full overflow-hidden flex-col justify-center items-center">
        <motion.img
          src="/scene03/mm.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="mirae w-[1280px] right-0 absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/scene03/bg.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 6 }}
          className="background w-full absolute opacity-50"
        ></motion.img>
        <div className="mo:scale-100 scale-75 flex flex-col absolute mo:top-[5%] bottom-[12.5%] mo:my-12 z-10 w-full mx-auto">
          <Chats
            chats={[
              {
                message:
                  '내가 살던 바다 아래에는 쓰레기가 쌓이고, 놀이터처럼 돌아다니던 해안도 쓰레기로 가득 차버렸어.',
                isLoading: true,
                url: '/tts/scene3/01.wav',
              },
              {
                message:
                  '더는 먹이를 구할 수 없어서 친구들도 하나둘씩 사라지고, 엄마와도 결국 헤어지고야 말았지...',
                isLoading: true,
                url: '/tts/scene3/02.wav',
              },

              {
                isLoading: true,
                message:
                  '이제는 나 혼자 이 바다를 떠돌아다니고 있어. 어떻게 하면 좋을까?',
                url: '/tts/scene3/03.wav',
              },
            ]}
            durations={[4, 14, 22]}
          />
        </div>
        <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-[10%]">
          <div className="relative">
            {buttonRender && (
              <Button
                nextPage="/scene04"
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
