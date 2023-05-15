import anime from 'animejs';
import { useEffect, useState } from 'react';
import Wait from './wait';

export default function Chat({ isRight = false }) {
  const [isChatLoad, setIsChatLoad] = useState(false);
  useEffect(() => {
    anime({
      targets: '.message',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 2000,
    });

    if (isChatLoad) return;
    setTimeout(() => {
      setIsChatLoad(true);
    }, 5000);
  }, [isChatLoad]);

  return (
    <div
      className={`w-full flex space-x-4 ${
        isRight ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isRight && <div className="rounded-full bg-gray-50 w-16 h-16"></div>}
      <div className="rounded-full text-slate-600 font-semibold w-fit flex justify-center items-center px-8 py-2 bg-gray-50 h-16">
        {isChatLoad ? (
          <div className="message opacity-0">여긴 어디지?</div>
        ) : (
          <Wait />
        )}
      </div>
      {isRight && <div className="rounded-full bg-gray-50 w-16 h-16"></div>}{' '}
    </div>
  );
}
