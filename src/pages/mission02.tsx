import Layout from '@components/common/layout-ver2';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Mirae from '@components/mirae/mirae';
import ChatWithTail from '@components/chat/chatWithTailNodelay';
import Button from '@components/common/button';
import { useRouter } from 'next/router';
import Leaf from '@components/leaf/leaf';

export default function Stage() {
  const [fieldNumber, setFieldNumber] = useState(0);
  const [miraeText, setMiraeText] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setMiraeText((prevCount) => prevCount + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [isFlipped, setIsFlipped] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex h-[calc(100vh-2.5rem)] m-5">
        <Leaf />

        <div className="w-3/5">
          {fieldNumber === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory text-xl mb-20 leading-10 text-center "
            >
              미션 카드를 선택해주세요!
            </motion.div>
          )}
          {fieldNumber === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory text-xl mb-20 leading-10 text-center "
            >
              다음 미션을 수행하시겠요? 아니면 다른 카드를 골라보세요!
            </motion.div>
          )}
          <div className="flex space-x-8 items-center justify-center">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                onClick={() => {
                  // 열고 다시 뒤집기
                  if (isFlipped[index]) {
                    setIsFlipped([false, false, false]);
                    setFieldNumber(0);
                    return;
                  }
                  setFieldNumber(1);

                  setIsFlipped(() => {
                    const temp = [false, false, false];
                    temp[index] = !temp[index];
                    return temp;
                  });
                }}
              >
                <motion.div
                  className={`relative ${
                    isFlipped[index] ? 'w-60' : 'w-60'
                  }   rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                >
                  {!isFlipped[index] ? (
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
          {fieldNumber === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, easings: 'easeInOut' }}
              className="w-full flex mt-12 justify-center space-x-10 items-center"
            >
              <Button
                text="다음"
                className="bottom-40"
                color="g1"
                nextPage="/mission03"
              />
            </motion.div>
          )}
        </div>
        {/* <div className="w-2/5 mr-20">
          <div className="w-full relative flex-col mx-8 justify-center items-center">
            <div className="-translate-x-16 translate-y-10">
              <Mirae />
              {miraeText % 4 === 0 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="오늘은 어떤 환경미션들이 있을까?"
                    isLoading
                  />
                </div>
              )}
              {miraeText % 4 === 1 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="환경미션이 맘에 든다면 카드를 선택해줘!"
                    isLoading
                  />
                </div>
              )}
              {miraeText % 4 === 2 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="환경미션에는 여러 종류가 있어. 카드를 뒤집어서 확인해봐!"
                    isLoading
                  />
                </div>
              )}
              {miraeText % 4 === 3 && (
                <div className="absolute -top-10 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="오늘도 환경미션을 수행해줄거지?"
                    isLoading
                  />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, easings: 'easeInOut' }}
                className="w-full flex justify-center space-x-10 items-center"
              >
                <Button text="네" className="bottom-40" nextPage="/mission02" />
                <Button text="아니요" className="bottom-40" color="g3" />
              </motion.div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
