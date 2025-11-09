'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MessageSquare, 
  Globe, 
  FolderKanban, 
  Users, 
  MessageCircle,
  Settings,
  HelpCircle,
  User
} from 'lucide-react';
import NavItem from './NavItem';

const navigation = [
  { name: 'New Chat', href: '/petros', icon: MessageSquare },
  { name: 'Atlas', href: '/atlas', icon: Globe },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Explore Tutors', href: '/explore-tutors', icon: Users },
  { name: 'Chats', href: '/chats', icon: MessageCircle },
];

const bottomNavigation = [
  { name: 'Settings', href: '/account', icon: Settings },
  { name: 'Help', href: '/help', icon: HelpCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-[#0E0E0E] border-r border-[rgba(255,255,255,0.1)] flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">AI Tutor</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navigation.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            icon={item.icon}
            label={item.name}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 space-y-1 mb-4">
        {bottomNavigation.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            icon={item.icon}
            label={item.name}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      {/* User Profile Section */}
      <div className="p-4 border-t border-[rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Student</p>
            <p className="text-xs text-[#A1A1A1] truncate">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
