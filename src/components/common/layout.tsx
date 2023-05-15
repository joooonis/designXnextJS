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
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      <div className="w-full bg-[#ebebeb] font-Balsamiq h-full flex justify-center items-center">
        {children}
      </div>
    </motion.div>
  );
}
