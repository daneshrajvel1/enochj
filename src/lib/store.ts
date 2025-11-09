import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'premium';
  avatar?: string;
}

interface AppState {
  user: User | null;
  setUser: (user: User) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: {
    name: 'Student',
    email: 'student@example.com',
    plan: 'free',
  },
  setUser: (user) => set({ user }),
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));
