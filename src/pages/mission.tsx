import Layout from '@components/common/layout-ver2';
import anime from 'animejs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '@components/common/button-ver2';
import Chat from '@components/chat/chat';
import { useRouter } from 'next/router';

export default function Stage() {
  const router = useRouter();

  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full flex justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex-col h-[calc(100vh-2.5rem)] m-5">
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
          transition={{ duration: 2, easings: 'easeInOut' }}
          className="w-full flex justify-center space-x-10 items-center"
        >
          <Button message="네" className="bottom-40" />
          <Button message="아니요" className="bottom-40" />
        </motion.div>
      </div>
    </Layout>
  );
}
