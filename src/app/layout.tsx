import type { Metadata } from 'next';
import './global.css';

import { ThemeProvider } from '@/components/provider/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
