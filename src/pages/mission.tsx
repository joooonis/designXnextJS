import Layout from '@components/common/layout-ver2';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Leaf from '@components/leaf/leaf';
import Button from '@components/common/button';

export default function Stage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animation, setAnimation] = useState([
    true,
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

  useEffect(() => {
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[1] = true;
        return temp;
      });
    }, 1000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[2] = true;
        return temp;
      });
    }, 2000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[3] = true;
        return temp;
      });
    }, 3000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[0] = false;
        temp[1] = false;
        temp[2] = false;
        temp[3] = false;
        temp[4] = true;
        return temp;
      });
    }, 5000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[5] = true;
        return temp;
      });
    }, 6000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[6] = true;
        return temp;
      });
    }, 7000);
    setTimeout(() => {
      setAnimation((prev) => {
        const temp = [...prev];
        temp[7] = true;
        return temp;
      });
    }, 8000);
    setTimeout(() => {
      setButtonRender(true);
    }, 10000);

    setTimeout(() => {
      setIsFlipped(true);
    }, 5000);
  }, []);

  return (
    <Layout>
      <div className="relative  overflow-hidden space-y-24 bg-gradient-to-b w-full justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex h-[calc(100vh-2.5rem)] m-5">
        <Leaf />
        <div className="w-full -translate-y-20">
          {!isFlipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory text-lg mb-20 leading-10 text-center "
            >
              매주 실생활에서 실천할 수 있는 환경 미션이 주어질 거에요.
            </motion.div>
          )}
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 1.5, easings: 'easeInOut' }}
              className=" font-PoorStory text-lg mb-20 leading-10 text-center "
            >
              미션을 잘 수행하면 미래가 살아가는 미래가 밝아지고, 잘 수행하지
              않으면 미래가 어둡게 됩니다. <br />
              미션을 열심히 수행하고 미래가 살아가는 환경을 지켜주세요.
            </motion.div>
          )}
          <div className="flex justify-center  items-center">
            <div className=" w-[1076px]">
              {' '}
              <div className="flex space-x-8">
                {animation[0] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/back.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[1] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/back.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[2] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/back.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[3] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/back.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
              </div>
              <div className="flex space-x-8">
                {animation[4] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/card1.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[5] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/card2.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[6] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/card3.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
                {animation[7] && (
                  <div
                    className={`relative w-60 rounded-xl cursor-pointer flex justify-center items-center aspect-[2/3] overflow-hidden`}
                  >
                    {
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        transition={{
                          duration: 1,
                          easings: 'easeInOut',
                        }}
                      >
                        <Image
                          className={`object-contain`}
                          fill
                          src="/card/card4.png"
                          alt="card"
                        />
                      </motion.div>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-20 z-20 flex justify-center items-center absolute bottom-[10%]">
          <div className="relative">
            {buttonRender && (
              <Button
                nextPage="/field"
                color="brown"
                text="미션을 수행하러 가요!"
                className={`bottom-[160px] font-PoorStory ${
                  buttonRender ? 'visible' : 'invisible'
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
