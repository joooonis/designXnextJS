import React from 'react';
import { motion } from 'framer-motion';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="bg-gradient-to-b  from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-10% to-50% w-full relative overflow-hidden font-Balsamiq h-full flex justify-center items-center">
        {children}
      </div>
    </motion.div>
  );
}
