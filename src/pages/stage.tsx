import Layout from '@components/common/layout-ver2';
import anime from 'animejs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@components/common/button';
import Chat from '@components/chat/chat';
import { useRouter } from 'next/router';

export default function Stage() {
  const [buttonRender, setButtonRender] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  const router = useRouter();

  const container = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="mt-32 font-PoorStory text-xl leading-10 text-center">
          매주 환경 미션을 클리어 하고 <br />
          미래가 친구들을 만날 수 있도록 도와주세요!
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          className="absolute bottom-60 left-40 cursor-pointer flex flex-col items-center"
          onClick={() => {
            router.push('/mission01');
          }}
        >
          <motion.div whileHover="hover" variants={container}>
            <Image
              className="girl"
              src="/scene04/girl.png"
              width={240}
              height={240}
              alt="grass-1"
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: hovered ? [1, 0.5, 1] : 1,
            }}
            transition={{ duration: 1, yoyo: Infinity }}
            className="font-PoorStory text-[18px]"
          >
            이번주에는 어떤 미션이 있을까?
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          className="absolute bottom-80 cursor-pointer right-40 flex flex-col items-center"
          onClick={() => {
            router.push('/field');
          }}
        >
          <motion.div whileHover="hover" variants={container}>
            <Image
              className="mirae"
              src="/scene04/mirae.png"
              width={220}
              height={220}
              alt="mirae"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: hovered ? [1, 0.5, 1] : 1 }}
            transition={{ duration: 1, yoyo: Infinity }}
            className="font-PoorStory text-[18px]"
          >
            미래를 만나러 가요!
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
