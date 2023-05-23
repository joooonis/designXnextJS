import React from 'react';
import { motion } from 'framer-motion';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="w-full relative overflow-hidden bg-[#ebebeb] font-Balsamiq h-full flex justify-center items-center">
        {children}
      </div>
    </motion.div>
  );
}
