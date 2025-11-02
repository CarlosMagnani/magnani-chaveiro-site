"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const Header = ({ onMenuToggle }) => (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
                <a href="#" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Magnani Chaveiro Logo"
                        width={90}
                        height={80}
                        priority
                    />
                    {/* <span className="font-russo-one tracking-wider">Magnani Chaveiro</span> */}
                </a>
            </div>
            <nav className="hidden md:flex space-x-8">
                <a href="#servicos" className="transition-colors duration-300">Serviços</a>
                <a href="#galeria" className=" transition-colors duration-300">Galeria</a>
                <a href="#sobre" className="transition-colors duration-300">Sobre</a>
                <a href="#contato" className=" transition-colors duration-300">Contato</a>
            </nav>
            <a href="#contato" className="hidden md:block hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Orçamento Rápido
            </a>
            <button onClick={onMenuToggle} className="md:hidden text-white focus:outline-none" aria-label="Abrir menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>
);


const MobileMenu = ({ isOpen }) => (
    <div
        className={`md:hidden px-6 pb-4 bg-gray-900/90 fixed top-[72px] left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
    >
        <a href="#servicos" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Serviços</a>
        <a href="#galeria" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Galeria</a>
        <a href="#sobre" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Sobre</a>
        <a href="#contato" className="block py-2 text-center hover:text-red-500 transition-colors duration-300">Contato</a>
        <a href="#contato" className="block mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-center">
            Orçamento Rápido
        </a>
    </div>
);

const HeroSection = () => {
    const images = [
        '/images/image7.jpeg',
        '/images/image15.jpeg',
        '/images/image14.jpeg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">

            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"}`}
                    style={{ position: "absolute" }}
                >
                    <Image
                        src={src}
                        alt={`Imagem ${index + 1}`}
                        fill
                        priority={index === 0}
                        quality={90}
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            ))}

   
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div className="relative z-20 container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                    <span className="font-russo-one tracking-wider block mb-2 text-red-500">
                        Magnani Chaveiro
                    </span>
                    Especialista em Chaves Automotivas
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Soluções completas em codificação, cópias e reparos para a chave do seu veículo.
                    Atendimento rápido e profissional.
                </p>
                <a
                    href="https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 inline-block transform hover:scale-105"
                >
                    Fale pelo WhatsApp
                </a>
            </div>
        </section>
    );
};


const ServiceCard = ({ imgSrc, title, description }) => (
    <div className="bg-gray-900 rounded-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col">
        <div className="relative w-full h-48 mb-6">
            <Image
                src={imgSrc}
                alt={`Serviço de ${title}`}
                fill
                sizes="100vw"
                className="object-cover rounded-md"
            />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const ServicesSection = () => (
    <section id="servicos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h2>
                <p className="text-gray-400 mt-2">Tecnologia de ponta para todos os tipos de chaves.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    imgSrc="/images/image11.jpeg"
                    title="Chaves Codificadas"
                    description="Criação e programação de chaves com transponder (chip) para a maioria dos veículos nacionais e importados. Segurança e compatibilidade total."
                />
                <ServiceCard
                    imgSrc="/images/image12.jpeg"
                    title="Chaves Canivete"
                    description="Fazemos a conversão da sua chave simples para o modelo canivete, unindo alarme e chave em um design moderno e prático. Também fazemos cópias."
                />
                <ServiceCard
                    imgSrc="/images/image13.jpeg"
                    title="Reparo de Telecomandos"
                    description="Sua chave parou de funcionar? Realizamos a troca de botões, carcaças e baterias, recuperando a funcionalidade do seu telecomando original."
                />
            </div>
        </div>
    </section>
);

const GallerySection = () => {
    const galleryImages = [
        '/images/image1.jpeg',
        '/images/image2.jpeg',
        '/images/image3.jpeg',
        '/images/image4.jpeg',
        '/images/image5.jpeg',
        '/images/image6.jpeg',
        '/images/image7.jpeg',
        '/images/image8.jpeg',
    ];

    return (
        <section id="galeria" className="py-20 md:pb-20 pb-10 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Galeria de Trabalhos</h2>
                    <p className="text-gray-400 mt-2">Confira alguns dos nossos serviços realizados.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={src}
                                alt={`Trabalho realizado ${index + 1}`}
                                fill
                                sizes="33vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const AboutSection = () => (
    <section id="sobre" className="py-20 md:pt-20 pt-10 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
                <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden">
                    <Image
                        src="/images/image10.jpeg"
                        alt="Retrato do chaveiro profissional"
                        fill
                        sizes="50vw"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mais de 20 anos de experiência</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Com uma longa trajetória de dedicação e profissionalismo, a Magnani Chaveiro estabeleceu-se como referência em soluções automotivas, construindo uma sólida reputação baseada na confiança e na satisfação do cliente.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Nosso compromisso é com a agilidade no atendimento e o uso de equipamentos de última geração, garantindo um serviço de excelência para o seu veículo.
                </p>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Precisa de um Chaveiro Agora?</h2>
            <p className="text-gray-400 mt-2 mb-8 max-w-2xl mx-auto">
                Entre em contato para um orçamento sem compromisso. Atendimento de emergência disponível.
            </p>
            <div className="bg-gray-800 rounded-lg p-8 max-w-sm mx-auto shadow-lg">
                <p className="text-lg text-gray-300 mb-2">Ligue ou mande uma mensagem:</p>
                <a
                    href="https://api.whatsapp.com/send?phone=11947120891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-red-500 hover:text-red-400 transition-colors duration-300"
                >
                    (11) 94712-0891
                </a>
                <p className="text-gray-500 mt-4 text-sm">Clique no número para falar pelo WhatsApp!</p>
            </div>
            <div className="mt-8">
                <p className="text-gray-400">Atendemos em Jundiaí e Região</p>
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
                <GallerySection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
