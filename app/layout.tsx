import "../src/styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Tutor Dashboard",
  description: "Your intelligent learning companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0D0D0D] text-white antialiased">{children}</body>
    </html>
  );
}
