import { useEffect, useState } from 'react';
import Wait from './wait';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

interface ChatProps {
  duration?: number;
  message?: string;
  isLoading?: boolean;
  url?: string;
}

export default function ChatWithTail({
  duration = 0,
  message,
  isLoading = false,
  url,
}: ChatProps) {
  const [startChat, setStartChat] = useState(!isLoading);
  useEffect(() => {
    if (startChat) return;
    setTimeout(() => {
      setStartChat(true);
    }, 1000);
  }, [startChat, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', delay: duration }}
      className="w-full flex space-x-4 'justify-start"
    >
      <div className="rounded-full text-slate-600 z-30 w-fit flex justify-center relative items-center px-8 py-4 bg-gray-100 ">
        {startChat ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-PoorStory"
          >
            {message}
            <div className="hidden">
              <ReactPlayer url={url} playing />
            </div>
          </motion.div>
        ) : (
          <>
            <Wait />
          </>
        )}
      </div>
    </motion.div>
  );
}
