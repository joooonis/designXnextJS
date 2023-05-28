import Layout from '@components/common/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
import { motion } from 'framer-motion';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  const container = {
    hover: {
      rotateZ: [0, 1, 0, -1, 0],
      x: [0, 5, 0, -5, 0],
      transition: {
        duration: 2,
        yoyo: Infinity,
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 19000);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[#C9D6FF]  to-[#E2E2E2]  flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <motion.div
          className="absolute bottom-60 left-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.1] }}
          transition={{ duration: 5 }}
        >
          <Image
            className="girl"
            src="/scene04/girl.png"
            width={300}
            height={300}
            alt="grass-1"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-80 right-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.1] }}
          transition={{
            duration: 5,
            ease: 'easeOut',
          }}
        >
          <Image
            className="mirae"
            src="/scene04/mirae.png"
            width={250}
            height={250}
            alt="mirae"
          />
        </motion.div>
        <div className="chat-box mx-24 my-12 space-y-6">
          <Chats
            chats={[
              {
                isRight: true,
                isLoading: true,
                message: '하지만 나는 포기하지 않아..',
              },
              {
                isRight: true,
                isLoading: true,
                message:
                  '이 넓은 바다 어디엔가 분명 나를 기다리는 곳이 있을거야 같이 가주겠어?',
              },
              {
                isRight: false,
                isLoading: true,
                message: '물론이지. 함께라면 분명 찾을 수 있어!',
              },
            ]}
            durations={[6, 11, 15]}
          />
        </div>
        {buttonRender && (
          <Button
            nextPage="/stage"
            text="E N D"
            className="bottom-[160px]"
            color="lavender"
          />
        )}
      </div>
    </Layout>
  );
}
