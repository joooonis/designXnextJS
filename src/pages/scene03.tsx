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
    }, 15000);
  }, []);

  return (
    <Layout>
      <div className="relative w-full overflow-hidden flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
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
        <div className="mx-24 my-12 z-20 space-y-6">
          <Chats
            chats={[
              {
                message:
                  '내가 살던 바다 아래에는 쓰레기가 쌓이고, 놀이터처럼 돌아다니던 해안도 쓰레기로 가득 차버렸어.',
                isLoading: true,
              },
              {
                message:
                  '더는 먹이를 구할 수 없어서 친구들도 하나둘씩 사라지고, 엄마와도 결국 헤어지고야 말았지...',
              },
              {
                isLoading: true,
                message:
                  '이제는 나 혼자 이 바다를 떠돌아다니고 있어. 어떻게 하면 좋을까?',
              },
            ]}
            durations={[4, 9, 11]}
          />
        </div>
        <Button
          nextPage="/scene04"
          text="다음"
          color="brown"
          className={`bottom-[160px] font-PoorStory ${
            buttonRender ? 'visible' : 'invisible'
          }`}
        />
      </div>
    </Layout>
  );
}
