import clsx from 'clsx';
import {
  JetBrains_Mono as JetBrainsMono,
  Pixelify_Sans as PixelifySans,
} from 'next/font/google';

import Providers from '@/providers';
import Header from '@/components/header';
import WalletManager from '@/components/WalletManager';

import '../styles/main.css';
import '@rainbow-me/rainbowkit/styles.css';

const jetbrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const pixelifySans = PixelifySans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'MineVM',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx([
          jetbrainsMono.variable,
          pixelifySans.variable,
          'font-sans',
        ])}
      >
        <Providers>
          <Header />
          <WalletManager />
          {children}
        </Providers>
      </body>
    </html>
  );
}
