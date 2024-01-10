import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abdul Raheem',
  description: "Abdul Raheem's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-dark-primary'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
