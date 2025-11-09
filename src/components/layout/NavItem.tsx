'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export default function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl
        transition-all duration-200 ease-in-out
        ${
          isActive
            ? 'bg-[#1A1A1A] text-white border-l-4 border-[#6C63FF] shadow-[0_0_10px_rgba(108,99,255,0.4)]'
            : 'text-[#A1A1A1] hover:text-white hover:bg-[#1A1A1A]'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
