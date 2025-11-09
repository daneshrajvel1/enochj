import LayoutWrapper from '@/components/layout/LayoutWrapper';

export default function ChatsPage() {
  return (
    <LayoutWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Chats
          </h1>
          <p className="text-[#A1A1A1] text-lg">
            No chats yet. Start a conversation!
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
}
