import Layout from '@components/common/layout-ver2';
import { motion } from 'framer-motion';
import Button from '@components/common/button';
import { useState } from 'react';
import Leaf from '@components/leaf/leaf';

export default function Stage() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full flex justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col h-[calc(100vh-2.5rem)] m-5">
        <Leaf />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ duration: 1.5, easings: 'easeInOut' }}
          className=" font-PoorStory text-xl leading-10 text-center"
        >
          매주 일상 속에서 환경을 지키는 미션을 수행해요!
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, easings: 'easeInOut' }}
          className="w-full flex justify-center space-x-10 items-center"
        >
          <Button text="네" className="bottom-40" nextPage="/mission02" />
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
