import LayoutWrapper from '@/components/layout/LayoutWrapper';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Shield } from 'lucide-react';

export default function HelpPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8">Help & Support</h1>

        {/* Legal Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Legal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="ghost" className="justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Button>
            <Button variant="ghost" className="justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Privacy Policy
            </Button>
            <Button variant="ghost" className="justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Cookie Policy
            </Button>
            <Button variant="ghost" className="justify-start">
              <FileText className="w-4 h-4 mr-2" />
              User Conduct
            </Button>
          </div>
        </Card>

        {/* Contact Support */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Support
          </h2>
          <p className="text-[#A1A1A1] mb-4">
            Need help? Our support team is here for you.
          </p>
          <Button>Send Message</Button>
        </Card>

        {/* Quick Tips */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Tips</h2>
          <ul className="space-y-3 text-[#A1A1A1]">
            <li>• Use Atlas to search the web with AI assistance</li>
            <li>• Create custom tutors for specific subjects</li>
            <li>• Upload syllabus for personalized learning</li>
            <li>• Track your progress in the Projects section</li>
          </ul>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
