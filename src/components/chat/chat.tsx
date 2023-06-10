import { useEffect, useState } from 'react';
import Wait from './wait';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface ChatProps {
  duration?: number;
  message?: string;
  isLoading?: boolean;
}

export default function Chat({
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
      className="w-full flex justify-start"
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="rounded-full bg-gray-50 w-1/6 aspect-square relative overflow-hidden"
      >
        <Image
          src="/mirae/mirae.png"
          alt="mirae"
          fill
          className="object-cover scale-[1.5] -translate-x-4 translate-y-2"
        />
      </motion.div>
      <div className="ml-4 rounded-full w-5/6 justify-start text-xs mo:text-base text-slate-600 z-30 flex  items-center px-8 py-2 bg-gray-50">
        {startChat ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-PoorStory"
          >
            {message}
          </motion.div>
        ) : (
          <Wait />
        )}
      </div>
    </motion.div>
  );
}
