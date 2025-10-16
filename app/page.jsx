"use client"; // Adiciona esta diretiva para marcar como um Componente de Cliente

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import Image from 'next/image'; // Removido para compatibilidade com o ambiente de pré-visualização

// --- Componentes da Página ---

// Componente do Cabeçalho
const Header = ({ onMenuToggle }) => (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
                <a href="#" className="flex items-center gap-3 font-russo-one tracking-wider">
                    {/* LOGO: Substituímos o componente Image por uma tag <img> padrão */}
                    <Image
                        src="/logo.png" // Caminho para a sua imagem na pasta 'public'
                        alt="Magnani Chaveiro Logo"
                        width={100} // Largura original da imagem em pixels
                        height={100} // Altura original da imagem em pixels
                        className="text-red-500" // A cor do SVG é ignorada, mas mantemos a classe se precisar de estilo
                    />
                    <span className="font-russo-one tracking-wider">Magnani Chaveiro</span>
                </a>
            </div>
            <nav className="hidden md:flex space-x-8">
                <a href="#servicos" className="hover:text-red-500 transition-colors duration-300">Serviços</a>
                <a href="#sobre" className="hover:text-red-500 transition-colors duration-300">Sobre</a>
                <a href="#contato" className="hover:text-red-500 transition-colors duration-300">Contato</a>
            </nav>
            <a href="#contato" className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Orçamento Rápido
            </a>
            <button onClick={onMenuToggle} className="md:hidden text-white focus:outline-none" aria-label="Abrir menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </header>
);

// Componente do Menu Mobile
const MobileMenu = ({ isOpen }) => (
    <div className={`md:hidden px-6 pb-4 bg-gray-900/90 fixed top-[72px] left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <a href="#servicos" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Serviços</a>
        <a href="#sobre" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Sobre</a>
        <a href="#contato" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Contato</a>
        <a href="#contato" className="block mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-center">
            Orçamento Rápido
        </a>
    </div>
);

// Componente da Seção Principal (Hero) com Carrossel
const HeroSection = () => {
    // Para imagens de fundo, a melhor forma continua a ser via CSS.
    // Coloque estas imagens na sua pasta /public/hero/
    const images = [
        '/hero/imagem-fundo-1.jpg',
        '/hero/imagem-fundo-2.jpg',
        '/hero/imagem-fundo-3.jpg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Muda a imagem a cada 5 segundos

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
            <div className="relative z-10 container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                    <span className="font-russo-one tracking-wider block mb-2 text-red-500">Magnani Chaveiro</span>
                    Especialista em Chaves Automotivas
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Soluções completas em codificação, cópias e reparos para a chave do seu veículo. Atendimento rápido e profissional.</p>
                <a href="https://api.whatsapp.com/send?phone=SEUNUMERO" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 inline-block transform hover:scale-105">
                    Fale pelo WhatsApp
                </a>
            </div>
        </section>
    );
};

// Componente da Seção de Serviços
const ServicesSection = () => (
    <section id="servicos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h2>
                <p className="text-gray-400 mt-2">Tecnologia de ponta para todos os tipos de chaves.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    imgSrc="/servicos/chave-codificada.png" // Caminho local
                    title="Chaves Codificadas"
                    description="Criação e programação de chaves com transponder (chip) para a maioria dos veículos nacionais e importados. Segurança e compatibilidade total."
                />
                <ServiceCard
                    imgSrc="/servicos/chave-canivete.png" // Caminho local
                    title="Chaves Canivete"
                    description="Fazemos a conversão da sua chave simples para o modelo canivete, unindo alarme e chave em um design moderno e prático. Também fazemos cópias."
                />
                <ServiceCard
                    imgSrc="/servicos/reparos.png" // Caminho local
                    title="Reparo de Telecomandos"
                    description="Sua chave parou de funcionar? Realizamos a troca de botões, carcaças e baterias, recuperando a funcionalidade do seu telecomando original."
                />
            </div>
        </div>
    </section>
);

const ServiceCard = ({ imgSrc, title, description }) => (
    <div className="bg-gray-900 rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col">
        <div className="relative w-full h-48 mb-6">
            <img 
                src={imgSrc} 
                alt={`Serviço de ${title}`} 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const AboutSection = () => (
    <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden">
                     <img 
                        src="/sobre/chaveiro-trabalhando.png" // Caminho local
                        alt="Retrato do chaveiro profissional" 
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mais de [XX] anos de experiência</h2>
                <p className="text-gray-400 leading-relaxed mb-6">Aqui você pode colocar um texto sobre a história do seu pai, a paixão pelo que faz e a confiança que ele construiu ao longo dos anos. Fale sobre o compromisso com a qualidade e a satisfação do cliente.</p>
                <p className="text-gray-400 leading-relaxed">Mencione a rapidez no atendimento e o uso de equipamentos modernos para garantir um serviço de excelência.</p>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contato" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Precisa de um Chaveiro Agora?</h2>
            <p className="text-gray-400 mt-2 mb-8 max-w-2xl mx-auto">Entre em contato para um orçamento sem compromisso. Atendimento de emergência disponível.</p>
            <div className="bg-gray-900 rounded-lg p-8 max-w-sm mx-auto shadow-lg">
                <p className="text-lg text-gray-300 mb-2">Ligue ou mande uma mensagem:</p>
                <a href="https://api.whatsapp.com/send?phone=SEUNUMERO" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300">
                    (XX) 9XXXX-XXXX
                </a>
                <p className="text-gray-500 mt-4 text-sm">Clique no número para falar pelo WhatsApp!</p>
            </div>
            <div className="mt-8">
                <p className="text-gray-400">Atendemos em [Sua Cidade] e Região</p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-black py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Magnani Chaveiro. Todos os direitos reservados.</p>
        </div>
    </footer>
);

// Componente Principal da Aplicação
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    return (
        <div className="bg-gray-900 text-gray-200 font-sans">
            <Header onMenuToggle={toggleMenu} />
            <MobileMenu isOpen={isMenuOpen} />

            <main>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}
