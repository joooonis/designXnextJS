import Layout from '@components/common/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 16000);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[#98C1D9] to-[#F0FCF9] from-7% to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="chat-box mx-24 my-12 space-y-6">
          <Chats
            chats={[
              {
                isRight: false,
                isLoading: true,
                message: '저 어린 아이가 너니?',
              },
              {
                isRight: true,
                isLoading: true,
                message:
                  '맞아 저때는 좋았지.. 친구들과 함께 바다를 마음껏 헤엄치고는 했어 하지만..',
              },
              {
                isRight: false,
                message: '무슨일이 일어난거야?',
              },
              {
                isRight: true,
                message: '. . . 나를 따라와줘!',
              },
            ]}
            durations={[3, 8, 13, 15]}
          />
        </div>
        <div className="absolute w-full -right-20 top-20">
          {/* <Mirae /> */}
        </div>
        {buttonRender && (
          <Button
            nextPage="/scene03"
            text="N E X T"
            className="bottom-[160px]"
            color="blue"
          />
        )}
      </div>
    </Layout>
  );
}
