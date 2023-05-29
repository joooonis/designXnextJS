import Layout from '@components/common/layout-ver2';
import { animate, motion } from 'framer-motion';
import Button from '@components/common/b';
import { useState } from 'react';

export default function Stage() {
  const [isClicked, setIsClicked] = useState(false);
  const container = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full flex justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col h-[calc(100vh-2.5rem)] m-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{ duration: 1.5, easings: 'easeInOut' }}
          className=" font-PoorStory text-xl leading-10 text-center "
        >
          미션 카드를 선택해주세요!
        </motion.div>
        <div className="">
          {!isClicked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1, easings: 'easeInOut' }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="flex space-x-4"
            >
              {[1, 2, 3, 4, 5].map((_, i) => (
                <motion.div
                  key={i}
                  // whileHover="hover"
                  // variants={container}
                  onClick={() => {
                    setIsClicked(true);
                  }}
                  className="w-36 hover:scale-105 rounded-md cursor-pointer flex justify-center items-center aspect-[2/3] bg-[#c4d9c1] border-8 border-[#88bfa5]"
                >
                  미션 카드 입니당
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
