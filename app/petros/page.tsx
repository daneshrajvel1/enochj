import LayoutWrapper from '@/components/layout/LayoutWrapper';

export default function PetrosPage() {
  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hi, I'm your Private Tutor.
          </h1>
          <p className="text-2xl text-[#A1A1A1]">
            How can I help, Chief?
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
}
