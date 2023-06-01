import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Mirae from '@components/mirae/mirae';
import ChatWithTail from '@components/chat/chatWithTail';
import Leaf from '@components/leaf/leaf';
import HomeButton from '@components/common/home-button';
import Chevron from '@components/common/chevron';
export default function Field() {
  const [fieldNumber, setFieldNumber] = useState(0);
  const title = [
    '스크린 속에서 미래를 찾아보세요.',
    '바다가 더러워서 미래가 꽁꽁 숨어 있어요. 오늘의 미션을 완료해주세요!',
    '분리수거 미션을 완료했어요! 이제 다시 미래를 만나러 가요!',
    '깨끗해진 바다를 보고 미래가 기뻐하고 있어요. 앞으로도 미래를 지켜주세요.',
  ];

  return (
    <Layout>
      <div className="relative bg-gradient-to-b w-full flex-col py-16 items-center justify-between  from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% overflow-hidden  h-[calc(100vh-2.5rem)] m-5">
        <Leaf />
        <div>
          {fieldNumber === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="font-PoorStory mt-8 mb-16 text-center text-xl"
            >
              {title[fieldNumber]}
            </motion.div>
          )}
          {fieldNumber === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="font-PoorStory mt-8 mb-16 text-center text-xl"
            >
              {title[fieldNumber]}
            </motion.div>
          )}
          {fieldNumber === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="font-PoorStory mt-8 mb-16 text-center text-xl"
            >
              {title[fieldNumber]}
            </motion.div>
          )}
          {fieldNumber === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="font-PoorStory mt-8 mb-16 text-center text-xl"
            >
              {title[fieldNumber]}
            </motion.div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="relative">
            {fieldNumber === 0 && (
              <motion.img
                src="/field/mirae-hide.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="background shadow-lg ml-16 max-w-[1024px]"
              ></motion.img>
            )}
            {fieldNumber === 1 && (
              <motion.img
                src="/field/mirae-sad.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="background shadow-lg ml-16 max-w-[1024px]"
              ></motion.img>
            )}
            {fieldNumber === 2 && (
              <motion.img
                src="/field/mission.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="background shadow-lg ml-16 max-w-[1024px]"
              ></motion.img>
            )}
            {fieldNumber === 3 && (
              <motion.img
                src="/field/mirae-happy.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="background shadow-lg ml-16 max-w-[1024px]"
              ></motion.img>
            )}
          </div>
          <div className="w-full relative flex-col mx-8 justify-center items-center">
            <div className="-translate-x-16 translate-y-10">
              <Mirae />
              {fieldNumber === 0 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={3}
                    message="내가 어디에 있을까?"
                    isLoading
                  />
                </div>
              )}
              {fieldNumber === 1 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={1}
                    message="기분이 별로야... 어서 오늘의 환경 미션을 수행해줘."
                    isLoading
                  />
                </div>
              )}
              {fieldNumber === 2 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={1}
                    message="오늘은 분리수거 하는 날이야!"
                    isLoading
                  />
                </div>
              )}
              {fieldNumber === 3 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={1}
                    message="우아 덕분에 방이 깨끗해졌어. 다음에도 미션을 잘 수행해줘!"
                    isLoading
                  />
                </div>
              )}
            </div>
            <div className="w-full flex justify-between absolute -bottom-24">
              <div className="flex space-x-3">
                <Chevron
                  isRight={false}
                  onClick={() => {
                    if (fieldNumber === 0) return;
                    setFieldNumber((prev) => prev - 1);
                  }}
                />
                <Chevron
                  isRight
                  onClick={() => {
                    if (fieldNumber === 3) return;
                    setFieldNumber((prev) => prev + 1);
                  }}
                />
              </div>
              <div className="mr-6">
                <HomeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
