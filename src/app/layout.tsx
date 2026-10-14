import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Radha Kushwah | Professional Portfolio',
  description: 'Official portfolio of Radha Kushwah - B.A. Scholar at R.B.S. College Agra, M.S. Office & AI Tools Specialist.',
  keywords: ['Radha Kushwah', 'Portfolio', 'RBS College Agra', 'AI Tools', 'MS Office', 'Agra'],
  authors: [{ name: 'Radha Kushwah' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#030717] text-slate-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
