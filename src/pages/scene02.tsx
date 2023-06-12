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
      <div className="relative h-screen w-full overflow-hidden flex-col justify-center items-center">
        <div className="mo:hidden w-full font-Ubuntu font-normal mt-16  text-[#403227] title text-md mo:text-2xl my-auto text-center">
          The story of a little dugong, MIRAE
        </div>
        <motion.img
          src="/scene02/mirae-mom.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 4, delay: 2 }}
          className="mirae scale-90 mo:w-full mo:h-full mo:top-0 mo:scale-100  right-0 absolute z-10 opacity-50"
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
          className="background mo:w-full mo:h-full top-24 mo:top-0 scale-90 mo:scale-100 rounded-md absolute opacity-50"
        ></motion.img>
        <div className="mo:scale-100 scale-75 flex flex-col absolute mo:top-0 bottom-16 mo:my-12 z-50  w-full mx-auto">
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
        <div className="w-full h-20 flex justify-center items-center absolute bottom-4">
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
      </div>
    </Layout>
  );
}
