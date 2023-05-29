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
          src="/scene03/scene03.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="background w-full absolute opacity-50"
        ></motion.img>
        <div className="mx-24 my-12 z-20 space-y-6">
          <Chats
            chats={[
              {
                message:
                  '내가 살던 바다 아래에는 쓰레기가 쌓이고, 더 이상 예전처럼은 살 수 없게 되었어.',
                isLoading: true,
              },
              {
                message:
                  '친구들도 하나둘씩 사라지고, 엄마와도 결국 헤어지고야 말았지...',
              },
              {
                message: '이제는 나 혼자밖에는 없어. 어떻게 하면 좋을까?',
              },
            ]}
            durations={[6, 10, 14, 18]}
          />
        </div>
        <Button
          nextPage="/scene04"
          text="N E X T"
          color="green"
          className={`bottom-[160px] ${buttonRender ? 'visible' : 'invisible'}`}
        />
      </div>
    </Layout>
  );
}
