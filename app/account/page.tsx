'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/lib/store';

export default function AccountPage() {
  const user = useAppStore((state) => state.user);
  const [name, setName] = useState(user?.name || '');

  return (
    <LayoutWrapper>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>

        {/* Profile Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Profile</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#A1A1A1] opacity-50 cursor-not-allowed"
              />
            </div>
            <Button variant="secondary">Save Changes</Button>
          </div>
        </Card>

        {/* Plan Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Your Plan</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium capitalize">{user?.plan} Plan</p>
              <p className="text-[#A1A1A1] text-sm">
                {user?.plan === 'free' ? 'Limited features' : 'Full access'}
              </p>
            </div>
            {user?.plan === 'free' && (
              <Button>Upgrade to Pro</Button>
            )}
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20 p-6">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h2>
          <p className="text-[#A1A1A1] text-sm mb-4">
            Once you delete your account, there is no going back.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
