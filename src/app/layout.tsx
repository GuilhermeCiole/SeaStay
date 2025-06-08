import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from '@/providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'SeaStay',
  description: 'Explore as melhores propriedades para aluguel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
