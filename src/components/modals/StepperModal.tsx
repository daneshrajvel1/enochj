'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface StepperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subjects = ['Math', 'History', 'Physics', 'Coding', 'Other'];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

export default function StepperModal({ isOpen, onClose }: StepperModalProps) {
  const [step, setStep] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [uploadSyllabus, setUploadSyllabus] = useState<boolean | null>(null);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirm = () => {
    console.log({
      subject: selectedSubject,
      level: selectedLevel,
      syllabus: uploadSyllabus,
    });
    onClose();
    // Reset state
    setStep(1);
    setSelectedSubject('');
    setSelectedLevel('');
    setUploadSyllabus(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-lg"
        >
          <Card className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Create Custom Tutor
              </h2>
              <button
                onClick={onClose}
                className="text-[#A1A1A1] hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      step >= i
                        ? 'bg-[#6C63FF] text-white'
                        : 'bg-[#0E0E0E] text-[#A1A1A1]'
                    }`}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i}
                  </div>
                  {i < 4 && (
                    <div
                      className={`w-12 h-1 mx-2 transition-colors ${
                        step > i ? 'bg-[#6C63FF]' : 'bg-[#0E0E0E]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="min-h-[200px] mb-6">
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Choose a Subject
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => setSelectedSubject(subject)}
                        className={`p-4 rounded-xl transition-all ${
                          selectedSubject === subject
                            ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                            : 'bg-[#0E0E0E] text-[#A1A1A1] hover:text-white'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Choose Your Level
                  </h3>
                  <div className="space-y-3">
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`w-full p-4 rounded-xl transition-all ${
                          selectedLevel === level
                            ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                            : 'bg-[#0E0E0E] text-[#A1A1A1] hover:text-white'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Upload Syllabus?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Yes', value: true },
                      { label: 'No', value: false },
                    ].map((option) => (
                      <button
                        key={option.label}
                        onClick={() => setUploadSyllabus(option.value)}
                        className={`w-full p-4 rounded-xl transition-all ${
                          uploadSyllabus === option.value
                            ? 'bg-[#6C63FF] text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]'
                            : 'bg-[#0E0E0E] text-[#A1A1A1] hover:text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Confirmation
                  </h3>
                  <div className="space-y-3 bg-[#0E0E0E] p-4 rounded-xl">
                    <div>
                      <p className="text-[#A1A1A1] text-sm">Subject</p>
                      <p className="text-white font-medium">{selectedSubject}</p>
                    </div>
                    <div>
                      <p className="text-[#A1A1A1] text-sm">Level</p>
                      <p className="text-white font-medium">{selectedLevel}</p>
                    </div>
                    <div>
                      <p className="text-[#A1A1A1] text-sm">Syllabus</p>
                      <p className="text-white font-medium">
                        {uploadSyllabus ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedSubject) ||
                    (step === 2 && !selectedLevel) ||
                    (step === 3 && uploadSyllabus === null)
                  }
                >
                  Next
                </Button>
              ) : (
                <Button onClick={handleConfirm}>Confirm</Button>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
