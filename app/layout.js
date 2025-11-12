import { Inter, Montserrat, Russo_One } from 'next/font/google';
import './globals.css';

// Configuração otimizada das fontes usando next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Define uma variável CSS para a fonte Inter
});

const russoOne = Russo_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-russo-one', // Define uma variável CSS para a fonte Russo One
  weight: '400',
});

const headingFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

// Metadados para SEO
export const metadata = {
  metadataBase: new URL('https://magnanichaveiro.com.br'),
  title: 'Magnani Chaveiro - Especialista em Chaves Automotivas',
  description:
    'Soluções completas em chaves codificadas, canivete e reparos automotivos em Jundiaí e região com atendimento rápido e profissional.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'chaveiro automotivo',
    'chaves codificadas',
    'chave canivete',
    'reparo de telecomando',
    'Jundiaí',
    'Magnani Chaveiro',
  ],
  openGraph: {
    title: 'Magnani Chaveiro - Especialista em Chaves Automotivas',
    description:
      'Programação de chaves codificadas, conversão para chave canivete e reparos completos para telecomandos em Jundiaí e região.',
    url: 'https://magnanichaveiro.com.br',
    siteName: 'Magnani Chaveiro',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/image7.jpeg',
        width: 1200,
        height: 630,
        alt: 'Profissional da Magnani Chaveiro trabalhando em chave automotiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnani Chaveiro - Especialista em Chaves Automotivas',
    description:
      'Atendimento especializado em chaves automotivas com suporte para Jundiaí e região. Fale pelo WhatsApp (11) 94712-0891.',
    images: ['/images/image7.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/logo.png',
    apple: '/icon.png',
  },
  other: {
    phone: '(11) 94712-0891',
    serviceArea: 'Jundiaí e Região',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* As variáveis das fontes são adicionadas aqui para que o Tailwind as possa usar */}
      <body className={`${inter.variable} ${russoOne.variable} ${headingFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

