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
    }, 19000);
  }, []);

  return (
    <Layout>
      <div className="relative w-full overflow-hidden flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <motion.img
          src="/last/friend.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="w-full h-full absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/last/mirae.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="w-full h-full absolute z-10 opacity-50"
        ></motion.img>
        <motion.img
          src="/last/bg.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 6 }}
          className="background w-full h-full absolute opacity-50"
        ></motion.img>
        <div className="mx-24 my-12 z-20 space-y-6">
          <Chats
            chats={[
              {
                message: '안녕 나는 미래라고해!',
                isLoading: true,
              },
              {
                isLoading: true,
                message: '지금 우리 듀공들은 힘든 시기를 보내고 있어..',
              },
              {
                isLoading: true,
                message:
                  '이전에는 먹이를 쉽게 구할 수 있었지만, 점점 찾기가 힘들어지고 있거든..',
              },
              {
                message: '그동안 무슨일이 있었는지 알려줄게. 나를 따라와줘!',
              },
            ]}
            durations={[6, 10, 14, 18]}
          />
        </div>
        <Button
          nextPage="/scene02"
          color="brown"
          text="다음"
          className={`bottom-[160px] font-PoorStory ${
            buttonRender ? 'visible' : 'invisible'
          }`}
        />
      </div>
    </Layout>
  );
}
