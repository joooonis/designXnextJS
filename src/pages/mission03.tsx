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

  useEffect(() => {
    if (miraeText === 3) {
      router.push('/mission04');
    }
  }, [miraeText]);

  return (
    <Layout>
      <div className="relative overflow-hidden space-y-24 bg-gradient-to-b w-full justify-center items-center from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-7% to-70% flex h-[calc(100vh-2.5rem)] m-5">
        <Leaf />

        <div className="w-full mr-20">
          <div className="w-full relative flex-col mx-8 justify-center items-center">
            <div className="-translate-x-16 translate-y-10">
              <div className="scale-125">
                <Mirae />
              </div>
              {miraeText % 4 === 0 && (
                <div className="absolute -top-12 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="일주일 동안 환경미션을 잘 수행해줘서 고마워!"
                    isLoading
                  />
                </div>
              )}
              {miraeText % 4 === 1 && (
                <div className="absolute -top-12 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message="덕분에 친구들을 만날 수 있게 되었어!"
                    isLoading
                  />
                </div>
              )}
              {miraeText % 4 === 2 && (
                <div className="absolute -top-12 left-1/2">
                  <ChatWithTail
                    duration={0}
                    message=" 나를 따라와줘! 다음주에도 환경미션을 수행해줄거지?"
                    isLoading
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
