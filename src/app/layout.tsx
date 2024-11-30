import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from '@/components/navigation'
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LeapForChange',
  description: 'Learn about sustainability with our froggy friends!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThirdwebProvider>
          <div className="flex flex-col h-screen bg-green-50">
            <aside className="w-64 hidden md:block">
              <Navigation />
            </aside>
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
