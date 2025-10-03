import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MarketingInfoGraphics - Marketing That Speaks Logistics',
  description: 'Specialist logistics marketing agency across asset and non-asset operations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
