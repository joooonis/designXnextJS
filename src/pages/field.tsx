import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Leaf from '@components/leaf/leaf';
import ChatWithTail from '@components/chat/chatWithTailNodelay';
import Mirae from '@components/mirae/mirae';
import Button from '@components/common/button';

export default function Field() {
  const [fieldNumber, setFieldNumber] = useState(0);

  const [animation, setAnimation] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [buttonRender, setButtonRender] = useState(false);
  const [buttonRender2, setButtonRender2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[0] = true;
        return temp;
      });
    }, 4000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[0] = false;
        temp[1] = true;
        return temp;
      });
    }, 7000);

    setTimeout(() => {
      setButtonRender(true);
    }, 9000);
  }, []);

  useEffect(() => {
    if (fieldNumber === 1) {
      setButtonRender2(false);

      setTimeout(() => {
        setFieldNumber(2);
      }, 10000);
    }

    if (fieldNumber !== -1) return;
    setTimeout(() => {
      setButtonRender2(true);
    }, 5000);
  }, [fieldNumber]);

  console.log(fieldNumber);
  return (
    <Layout>
      <div className="relative h-screen bg-gradient-to-b w-full flex-col py-16 items-center justify-between  from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% overflow-hidden ">
        <Leaf />
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <div className="w-full absolute bottom-0 ">
              <div className={`translate-x-[500px] translate-y-20 transition`}>
                <Mirae />
                {fieldNumber === 0 && (
                  <div className="absolute -top-10 left-1/2">
                    <ChatWithTail
                      duration={3}
                      message="내가 어디에 있을까?"
                      isLoading
                      url="/tts/field/01.wav"
                    />
                  </div>
                )}
                {fieldNumber === -1 && (
                  <div className="absolute -top-10 left-1/2">
                    <ChatWithTail
                      duration={1}
                      message="기분이 별로야... 어서 오늘의 환경 미션을 수행해줘."
                      isLoading
                      url="/tts/field/02.wav"
                    />
                  </div>
                )}
                {fieldNumber === 1 && (
                  <div className="absolute -top-10 left-1/2">
                    <ChatWithTail
                      duration={1}
                      message="오늘은 분리수거 하는 날이야!"
                      isLoading
                      url="/tts/field/03.wav"
                    />
                  </div>
                )}
                {fieldNumber === 2 && (
                  <div className="absolute -top-10 left-1/2">
                    <ChatWithTail
                      duration={1}
                      message="우아 덕분에 방이 깨끗해졌어. 다음에도 미션을 잘 수행해줘!"
                      isLoading
                      url="/tts/field/04.wav"
                    />
                  </div>
                )}
              </div>
            </div>
            {fieldNumber === 0 && (
              <motion.img
                src="/field/mirae-hide.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="rounded-xl shadow-lg max-w-[1440px]"
              ></motion.img>
            )}
            {fieldNumber === -1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="rounded-xl shadow-lg overflow-hidden w-[1440px]"
              >
                <video autoPlay className="w-full ">
                  <source src="/videos/sad.mp4" type="video/mp4" />
                </video>
              </motion.div>
            )}
            {fieldNumber === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="rounded-xl shadow-lg overflow-hidden w-[1440px]"
              >
                <video autoPlay className="w-full ">
                  <source src="/videos/03.mp4" type="video/mp4" />
                </video>
              </motion.div>
            )}
            {fieldNumber === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="rounded-xl shadow-lg overflow-hidden w-[1440px]"
              >
                <video autoPlay loop className="w-full ">
                  <source src="/videos/02.mp4" type="video/mp4" />
                </video>
              </motion.div>
            )}
          </div>
          {animation[0] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory mt-8 text-xl mb-20 leading-10 text-center "
            >
              이 곳은 우리 집 거실! 유리창 안 쪽은 미래가 살고 있는 바다에요
            </motion.div>
          )}
          {animation[1] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory mt-8 text-xl mb-20 leading-10 text-center "
            >
              미션을 수행하시겠어요?
            </motion.div>
          )}
          {fieldNumber === -1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory mt-8 text-xl mb-20 leading-10 text-center "
            >
              바다가 더러워서 미래가 숨어있어요. 미션을 수행해주시겠어요?
            </motion.div>
          )}
          {fieldNumber === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 1, 1, 0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory mt-8 text-xl mb-20 leading-10 text-center "
            >
              스마트 AI 쓰레기통을 사용해서 분리수거를 하는 중이에요
            </motion.div>
          )}
          {fieldNumber === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 1, 1, 0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory mt-8 text-xl mb-20 leading-10 text-center "
            >
              미래가 기뻐하고 있어요 다음에도 미션을 잘 수행해주세요.
            </motion.div>
          )}
        </div>
        <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-[10%]">
          <div className="relative">
            {buttonRender && (
              <div className="flex space-x-24 relative">
                <Button
                  color="g1"
                  text="아니요"
                  onClick={() => {
                    setFieldNumber(-1);
                    setAnimation([false, false, true]);

                    setButtonRender(false);
                  }}
                  className={`bottom-[160px] font-PoorStory ${
                    buttonRender ? 'visible' : 'invisible'
                  }`}
                />
                <Button
                  color="g1"
                  text="네"
                  onClick={() => {
                    setFieldNumber((prev) => prev + 1);
                    setAnimation([false, false, true]);
                    setButtonRender(false);
                  }}
                  className="bottom-[160px] font-PoorStory"
                />
              </div>
            )}
            {buttonRender2 && (
              <div className="flex justify-center space-x-24 relative">
                <Button
                  color="g1"
                  text="네"
                  onClick={() => {
                    setFieldNumber(1);

                    setButtonRender2(false);
                  }}
                  className="bottom-[160px] font-PoorStory"
                />
              </div>
            )}
            {fieldNumber === 2 && (
              <div className="flex justify-center space-x-24 relative">
                <Button
                  color="g1"
                  text="돌아가기"
                  onClick={() => {
                    setFieldNumber(1);

                    setButtonRender2(false);
                  }}
                  className="bottom-[160px] font-PoorStory"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
