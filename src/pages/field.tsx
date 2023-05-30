import Layout from '@components/common/layout';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Chevron from '@components/common/chevron';
import anime from 'animejs';
import Image from 'next/image';
import Mirae from '@components/mirae/mirae';
export default function Field() {
  const [fieldNumber, setFieldNumber] = useState(0);
  const title = [
    '스크린 속에서 미래를 찾아보세요.',
    '바다가 더러워서 미래가 꽁꽁 숨어 있어요. 오늘의 미션을 완료해주세요!',
    '분리수거 미션을 완료했어요! 이제 다시 미래를 만나러 가요!',
    '깨끗해진 바다를 보고 미래가 기뻐하고 있어요. 앞으로도 미래를 지켜주세요.',
  ];

  useEffect(() => {
    anime({
      targets: '.leaf-1',
      rotate: [
        { value: '10deg', duration: 2000 },
        { value: '5deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.leaf-2',
      rotate: [
        { value: '5deg', duration: 1000 },
        { value: '0deg', duration: 1000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
    anime({
      targets: '.leaf-3',
      rotate: [
        { value: '-10deg', duration: 2000 },
        { value: '0deg', duration: 2000 },
      ],
      loop: true,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <Layout>
      <div className="relative bg-gradient-to-b w-full flex-col py-16 items-center justify-between  from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% overflow-hidden  h-[calc(100vh-2.5rem)] m-5">
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
            <div className="absolute -right-40 bottom-0 flex space-x-4">
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
          </div>
          <div className="h-full w-full relative flex justify-center items-center">
            <Mirae />
          </div>
        </div>
      </div>
    </Layout>
  );
}
