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
    }, 17000);
  }, []);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b w-full from-[#D3CCE3] to-[#F6F3FA]  flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5">
        <div className="chat-box mx-24 my-12 space-y-6">
          <Chats
            chats={[
              {
                isRight: true,
                isLoading: true,
                message:
                  '시간이 흐르고 친구들과 가족들은 점점 내 곁을 떠나갔어',
              },
              {
                isRight: false,
                message: '이럴수가 왜 그런거야?',
              },
              {
                isRight: true,
                isLoading: true,
                message: '환경이 파괴되고 먹이를 점점 구할 수가 없게 되었거든',
              },
              {
                isRight: false,
                message: '...내가 무언가 할 수 있는게 없을까?',
              },
            ]}
            durations={[3, 8, 11, 16]}
          />
        </div>
        <div className="absolute w-full -right-20 top-20">
          {/* <Mirae /> */}
        </div>
        {buttonRender && (
          <Button
            nextPage="/scene04"
            text="N E X T"
            className="bottom-[160px]"
            color="purple"
          />
        )}
      </div>
    </Layout>
  );
}
