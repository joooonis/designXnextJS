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
    }, 17000);
  }, []);

  return (
    <Layout>
      <div className="relative w-full overflow-hidden flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
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
        <div className="mx-24 my-12 z-20 space-y-6">
          <Chats
            chats={[
              {
                message: '내가 어릴때는 바다가 정말 아름다웠어!',
                isLoading: true,
              },
              {
                isLoading: true,
                message: '엄마 등에 매달려서 이곳저곳을 돌아다녔지.',
              },
              {
                isLoading: true,
                message:
                  '그때는 친구들고 많고 먹이도 많았는데, 바다가 점점 더러워지면서 친구들이 사라지고 먹이도 없어졌어..',
              },
              {
                message: '그러다가 결국에는...',
              },
            ]}
            durations={[3, 7, 11, 15]}
          />
        </div>
        <Button
          nextPage="/scene03"
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
