import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from './components/Header';
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Frooxi',
  description: 'Frooxi builds clean, efficient software that solves real problems. No complexity, just results.',
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/FrooxiLogoIcon.svg', type: 'image/svg+xml' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Frooxi',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
