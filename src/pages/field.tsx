import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
import { motion } from 'framer-motion';
import Chevron from '@components/common/chevron';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 19000);
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-b w-full flex-col py-16 items-center justify-between  from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% overflow-hidden  h-[calc(100vh-2.5rem)] m-5">
        <div className="font-PoorStory mt-8 mb-16 text-center text-xl">
          스크린 속에서 숨어있는 미래를 찾아보세요!
        </div>
        <div className="flex justify-between items-center">
          <div className="relative">
            <motion.img
              src="/field/mirae-happy.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 3 }}
              className="background shadow-lg ml-16 max-w-[1024px]"
            ></motion.img>
            <div className="absolute -right-40 bottom-0  flex space-x-4">
              <Chevron isRight={false} /> <Chevron isRight />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
