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
  title: 'Magnani Chaveiro - Especialista em Chaves Automotivas',
  description: 'Soluções completas em chaves codificadas, canivete e reparos para veículos.',
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

