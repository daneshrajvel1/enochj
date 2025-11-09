'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <main className="flex-1 ml-[260px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="p-6"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
