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
    }, 20000);
  }, []);

  return (
    <Layout>
      <div className="relative w-full overflow-hidden flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <motion.img
          src="/scene04/scene04.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="background w-full absolute opacity-50"
        ></motion.img>
        <div className="mx-24 my-12 z-20 space-y-6">
          <Chats
            chats={[
              {
                message: '하지만 나는 포기하지 않아!',
                isLoading: true,
              },
              {
                isLoading: true,
                message:
                  '네가 도와준다면 분명 다시 깨끗한 바다로 만들 수 있어!',
              },
              {
                message: '그렇게 되면 나도 다시 친구들을 만날 수 있을거야!',
              },
              {
                message: '바다살리기를 도와주겠어?',
              },
            ]}
            durations={[6, 10, 14, 18]}
          />
        </div>
        <Button
          nextPage="/scene04"
          text="N E X T"
          color="brown"
          className={`bottom-[160px] ${buttonRender ? 'visible' : 'invisible'}`}
        />
      </div>
    </Layout>
  );
}
