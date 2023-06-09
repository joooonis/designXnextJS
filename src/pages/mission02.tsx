import Layout from '@components/common/layout-ver2';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Mirae from '@components/mirae/mirae';
import ChatWithTail from '@components/chat/chatWithTail';

export default function Stage() {
  const [fieldNumber, setFieldNumber] = useState(0);

  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full flex justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex h-[calc(100vh-2.5rem)] m-5">
        <div className="w-3/4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
            transition={{ duration: 1.5, easings: 'easeInOut' }}
            className=" font-PoorStory text-xl mb-20 leading-10 text-center "
          >
            미션 카드를 선택해주세요!
          </motion.div>
          <div className="flex space-x-8 justify-center">
            {[1, 2, 3].map((_, value) => (
              <motion.div
                key={value}
                onClick={() => {
                  setIsFlipped((prev) => {
                    const temp = [...prev];
                    temp[value] = !temp[value];
                    return temp;
                  });
                }}
              >
                <motion.div className="relative w-60 hover:scale-105 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden">
                  {!isFlipped[value] ? (
                    <Image
                      className={`object-contain`}
                      fill
                      src="/card/back.png"
                      alt="card"
                    />
                  ) : (
                    <Image
                      className={`object-contain`}
                      fill
                      src="/card/card1.png"
                      alt="card"
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-1/4 mr-20">
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
            {/* <div className="w-full flex justify-between absolute -bottom-24">
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
