'use client';

import { useState } from 'react';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import StepperModal from '@/components/modals/StepperModal';
import { Button } from '@/components/ui/button';

export default function ExploreTutorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore AI Tutors
          </h1>
          <p className="text-[#A1A1A1] text-lg mb-8">
            Find the perfect tutor for your learning needs
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Create Custom Tutor
          </Button>
        </div>
      </div>

      <StepperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </LayoutWrapper>
  );
}
