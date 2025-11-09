import LayoutWrapper from '@/components/layout/LayoutWrapper';

export default function AtlasPage() {
  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Search the web with Atlas.
          </h1>
          <p className="text-[#A1A1A1] text-lg">
            AI-powered web search coming soon
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
}
