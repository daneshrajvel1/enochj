'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProjectsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guess: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6">
            Submit Your Project Guess
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-200"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-200"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white">
                Your Guess
              </label>
              <input
                type="text"
                placeholder="What's your guess?"
                value={formData.guess}
                onChange={(e) =>
                  setFormData({ ...formData, guess: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#0E0E0E] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-[#A1A1A1] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition-all duration-200"
              />
            </div>
            
            <Button type="submit" className="w-full mt-6" size="lg">
              Submit Guess
            </Button>
          </form>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
