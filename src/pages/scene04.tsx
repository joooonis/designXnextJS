import Layout from '@components/common/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import anime from 'animejs';
import Button from '@components/common/button';
import Chats from '@components/chat/chats';
export default function Scene() {
  const [buttonRender, setButtonRender] = useState(false);

  useEffect(() => {
    anime({
      targets: '.grass-1',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      delay: 300,
      duration: 3000,
    });
    anime({
      targets: '.grass-2',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      delay: 600,
      duration: 3000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setButtonRender(true);
    }, 16000);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[#C9D6FF]  to-[#E2E2E2]  flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="chat-box mx-24 my-12 space-y-6">
          <Chats
            chats={[
              {
                isRight: true,
                isLoading: true,
                message: '하지만 나는 포기하지 않아..',
              },
              {
                isRight: true,
                isLoading: true,
                message:
                  '이 넓은 바다 어디엔가 나를 기다리는 곳이 있을거야 같이 가주겠어?',
              },
              {
                isRight: false,
                isLoading: true,
                message: '물론이지! 함께라면 분명 괜찮을거야',
              },
            ]}
            durations={[3, 8, 12]}
          />
        </div>
        <div className="absolute w-full -right-20 top-20">
          {/* <Mirae /> */}
        </div>
        {buttonRender && (
          <Button
            nextPage="/scene04"
            text="E N D"
            className="bottom-[160px]"
            color="lavender"
          />
        )}
      </div>
    </Layout>
  );
}
