import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full bg-[#ebebeb] font-Balsamiq h-full flex justify-center items-center ">
      {children}
    </div>
  );
}
