import { useEffect, useState } from 'react';
import Wait from './wait';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface ChatProps {
  duration?: number;
  message?: string;
  isLoading?: boolean;
}

export default function ChatWithTail({
  duration = 0,
  message,
  isLoading = false,
}: ChatProps) {
  const [startChat, setStartChat] = useState(!isLoading);
  useEffect(() => {
    if (startChat) return;
    setTimeout(() => {
      setStartChat(true);
    }, duration * 1000 + 3000);
  }, [startChat, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', delay: duration }}
      className="w-full flex space-x-4 'justify-start"
    >
      <div className="rounded-full text-slate-600 z-30 w-fit flex justify-center relative items-center px-8 py-2 bg-gray-100 h-16">
        {startChat ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-PoorStory"
          >
            {message}
            <div
              className="w-0 h-0 absolute  -bottom-3 left-4
   border-l-[10px] border-l-transparent
   border-t-[15px] border-t-gray-100
   border-r-[10px] border-r-transparent
    "
            ></div>
          </motion.div>
        ) : (
          <>
            <Wait />
            <div
              className="w-0 h-0 absolute  -bottom-3 left-4
border-l-[10px] border-l-transparent
border-t-[15px] border-t-gray-100
border-r-[10px] border-r-transparent
"
            ></div>
          </>
        )}
      </div>
    </motion.div>
  );
}
