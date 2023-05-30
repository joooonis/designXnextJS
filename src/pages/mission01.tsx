import Layout from '@components/common/layout-ver2';
import { motion } from 'framer-motion';
import Button from '@components/common/button';
import { useState } from 'react';
import Image from 'next/image';

export default function Stage() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full flex justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col h-[calc(100vh-2.5rem)] m-5">
        <div className="absolute bottom-0 origin-bottom left-40">
          <Image
            className="leaf-1"
            src="/svg/leaf-green-1.svg"
            width={40}
            height={40}
            alt="leaf-1"
          />
        </div>
        <div className="absolute bottom-0 origin-bottom right-40 leaf-2">
          <Image
            src="/svg/leaf-green-2.svg"
            width={10}
            height={10}
            alt="leaf-2"
          />
        </div>
        <div className="absolute bottom-0 origin-bottom right-60 leaf-3">
          <Image
            src="/svg/leaf-green-3.svg"
            width={16}
            height={16}
            alt="leaf-3"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ duration: 1.5, easings: 'easeInOut' }}
          className=" font-PoorStory text-xl leading-10 text-center"
        >
          이번주의 미션을 확인 하시겠어요?
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, easings: 'easeInOut' }}
          className="w-full flex justify-center space-x-10 items-center"
        >
          <Button text="네" className="bottom-40" nextPage="/mission02" />
          <Button
            text="아니요"
            className="bottom-40"
            color="g3"
            onClick={handleClick}
          />
        </motion.div>
        {isClicked && (
          <motion.div
            onBlur={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, easings: 'easeInOut' }}
            className="font-PoorStory flex flex-col items-center"
          >
            미래가 슬퍼해요 이번주도 미션을 수행해주세요 😞
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
