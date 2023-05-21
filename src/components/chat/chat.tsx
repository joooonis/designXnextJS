import { useEffect, useState } from 'react';
import Wait from './wait';
import { motion } from 'framer-motion';
interface ChatProps {
  duration?: number;
  isRight?: boolean;
  message?: string;
  isLoading?: boolean;
}

export default function Chat({
  duration = 0,
  isRight = false,
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
      className={`w-full flex space-x-4  ${
        isRight ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isRight && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="rounded-full bg-gray-50 w-16 h-16"
        ></motion.div>
      )}
      <div className="rounded-full text-slate-600  w-fit flex justify-center items-center px-8 py-2 bg-gray-50 h-16">
        {startChat ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="message font-PoorStory"
          >
            {message}
          </motion.div>
        ) : (
          <Wait />
        )}
      </div>
      {isRight && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="rounded-full bg-gray-50 w-16 h-16"
        ></motion.div>
      )}
    </motion.div>
  );
}
