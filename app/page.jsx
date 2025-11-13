"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = ({ onMenuToggle }) => (
    <header className="bg-brand-midnight/85 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-brand-aurora">
                <a href="#" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Magnani Chaveiro Logo" width={118} height={104} priority />
                </a>
            </div>
            <nav className="hidden md:flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent-chrome">
                {[
                    { href: '#servicos', label: 'Serviços' },
                    { href: '#galeria', label: 'Galeria' },
                    { href: '#sobre', label: 'Sobre' },
                    { href: '#contato', label: 'Contato' },
                ].map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2 rounded-full transition-colors duration-300 hover:text-white hover:bg-white/10"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
                <a
                    href="#contato"
                    className="cta-glow inline-flex items-center gap-2 rounded-full bg-brand-ember px-6 py-2 text-sm font-semibold text-white shadow-brand-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-ember/90"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75 12 12.75l9.75-6" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 17.25 12 11.25l9.75 6M3 6.75h18"
                        />
                    </svg>
                    Orçamento Rápido
                </a>
            </div>
            <button onClick={onMenuToggle} className="md:hidden text-white focus:outline-none" aria-label="Abrir menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </header>
);

const MobileMenu = ({ isOpen }) => (
    <div
        className={`md:hidden px-6 pb-4 bg-brand-steel/95 border-b border-white/5 fixed top-[88px] left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
    >
        <a href="#servicos" className="block py-2 text-center text-brand-aurora hover:text-accent-neon transition-colors duration-300">
            Serviços
        </a>
        <a href="#galeria" className="block py-2 text-center text-brand-aurora hover:text-accent-neon transition-colors duration-300">
            Galeria
        </a>
        <a href="#sobre" className="block py-2 text-center text-brand-aurora hover:text-accent-neon transition-colors duration-300">
            Sobre
        </a>
        <a href="#contato" className="block py-2 text-center text-brand-aurora hover:text-accent-neon transition-colors duration-300">
            Contato
        </a>
        <a
            href="https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0"
            className="block mt-3 rounded-full bg-brand-ember text-white font-semibold py-3 px-4 text-center shadow-brand-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
            Orçamento Rápido
        </a>
    </div>
);

const HeroSection = () => {
    const images = ['/images/image7.jpeg', '/images/image15.jpeg', '/images/image14.jpeg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    const highlights = [
        {
            title: 'Tecnologia de Fábrica',
            description: 'Programação avançada para imobilizadores e telecomandos',
        },
        {
            title: 'Atendimento Imediato',
            description: 'Equipe móvel em Jundiaí e região metropolitana',
        },
        {
            title: 'Garantia Total',
            description: 'Cobertura para falhas de chip, bateria e carcaça',
        },
    ];

    return (
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 bg-hero-mesh text-white">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-25' : 'opacity-0'}`}
                >
                    <Image src={src} alt={`Imagem ${index + 1}`} fill priority={index === 0} sizes="100vw" style={{ objectFit: 'cover' }} />
                </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-brand-midnight/70 to-brand-midnight pointer-events-none" />

            <div className="relative z-20 container mx-auto px-6 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent-neon/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent-neon">
                        Atendimento 24h
                        <span className="inline-flex h-2 w-2 rounded-full bg-accent-neon"></span>
                    </span>
                    <h1 className="heading-font text-4xl md:text-6xl font-bold text-white leading-tight mt-6">
                        Segurança automotiva com precisão de fábrica.
                    </h1>
                    <p className="text-lg md:text-xl text-accent-chrome mt-6 max-w-2xl">
                        Especialistas em chaves automotivas, clonagem de transponders e reparos de telecomandos com equipamentos de última geração.
                    </p>

                    <div className="mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-brand-soft">
                        <p className="text-sm uppercase tracking-[0.35em] text-accent-neon">Ação imediata</p>
                        <p className="mt-3 text-base text-accent-chrome">
                            Nossa equipe móvel está pronta para responder agora mesmo e garantir a segurança do seu veículo.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-glow inline-flex items-center justify-center gap-3 rounded-full bg-brand-ember px-7 py-3 text-base font-semibold text-white shadow-brand-glow transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-ember/90"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3h15a1.5 1.5 0 0 1 1.5 1.5v15L16.5 15h-12A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3Z" />
                                    </svg>
                                </span>
                                Fale pelo WhatsApp
                            </a>
                            <a
                                href="#servicos"
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-base font-semibold text-brand-aurora transition-colors duration-300 hover:border-accent-neon/60 hover:bg-accent-neon/10"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Conheça os serviços
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-3">
                        {highlights.map((item) => (
                            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                                <span className="text-sm font-semibold text-accent-neon uppercase tracking-[0.25em]">{item.title}</span>
                                <p className="text-sm text-accent-chrome leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -top-16 -left-10 hidden md:block h-40 w-40 rounded-full border border-accent-neon/20" />
                    <div className="grid hero-showcase grid-cols-4 md:grid-cols-6 gap-4">
                        <div className="hero-panel col-span-4 md:col-span-3 md:row-span-2">
                            <span className="hero-panel__badge text-accent-neon">Tecnologia</span>
                            <div className="hero-panel__glow" />
                            <div className="relative h-full w-full min-h-[220px]">
                                <Image src="/images/image14.jpeg" alt="Equipamentos de codificação" fill className="object-cover" sizes="40vw" />
                            </div>
                        </div>
                        <div className="hero-panel col-span-4 md:col-span-3 flex flex-col justify-between p-6">
                            <div className="flex items-center gap-3 text-accent-neon">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75m1.5 0H18m-3.75-3H18m-9 3h.008v.008H9Zm0-3h.008v.008H9Zm0-3h6.75M9 9h.008v.008H9Zm9-3H6a1.5 1.5 0 0 0-1.5 1.5v12L7.5 18h9A1.5 1.5 0 0 0 18 16.5v-9A1.5 1.5 0 0 0 16.5 6Z" />
                                </svg>
                                <span className="text-sm font-semibold uppercase tracking-[0.3em]">Protocolos OEM</span>
                            </div>
                            <p className="mt-6 text-base text-accent-chrome">
                                Atualizações constantes das principais montadoras para garantir total compatibilidade com o seu veículo.
                            </p>
                            <a href="#galeria" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-aurora hover:text-white">
                                Ver projetos recentes
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="hero-panel col-span-2 md:col-span-2 flex flex-col justify-center gap-2 p-6 text-brand-aurora">
                            <span className="text-3xl font-bold">+25</span>
                            <p className="text-xs uppercase tracking-[0.35em] text-accent-chrome">anos de experiência</p>
                        </div>
                        <div className="hero-panel col-span-2 md:col-span-4 flex flex-col justify-center gap-4 p-6 md:p-8 bg-white/10">
                            <div className="flex items-center gap-3 text-accent-neon">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ember/30 text-white">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-chrome">confiança comprovada</p>
                                    <p className="text-2xl font-bold text-brand-aurora">Atendimento premiado</p>
                                </div>
                            </div>
                            <p className="text-sm text-accent-chrome leading-relaxed">
                                Reconhecimento dos clientes corporativos e residenciais pela precisão em cada programação e reparo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const servicesData = [
    {
        imgSrc: '/images/image11.jpeg',
        title: 'Chaves Codificadas',
        description: 'Programação de transponders com garantia de sincronização total com a central eletrônica.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6h1.125a2.625 2.625 0 1 1 0 5.25H13.5M8.25 6H7.125a2.625 2.625 0 0 0 0 5.25H8.25m3.75-5.25v12.75M8.25 18.75h6" />
            </svg>
        ),
    },
    {
        imgSrc: '/images/image12.jpeg',
        title: 'Chaves Canivete',
        description: 'Conversão para modelos retráteis com integração de alarme e acabamento premium.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15 8.954-8.955a1.125 1.125 0 0 1 1.591 0l6.16 6.16a1.125 1.125 0 0 1 0 1.59L10 21H3.75A1.5 1.5 0 0 1 2.25 19.5V15Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h.008v.008H6V18Z" />
            </svg>
        ),
    },
    {
        imgSrc: '/images/image13.jpeg',
        title: 'Reparo de Telecomandos',
        description: 'Substituição de carcaças, botões e ressoldagem de trilhas com microscópio eletrônico.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042 3 9.75l9 3.708 9-3.708-9-3.708Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 3 15.75l9 3.75 9-3.75-1.5-5.25" />
            </svg>
        ),
    },
];

const ServiceCard = ({ imgSrc, title, description, icon }) => (
    <div className="diagonal-card bg-brand-steel/80 text-brand-aurora shadow-brand-soft transition-transform duration-500 hover:-translate-y-1 flex flex-col">
        <div className="diagonal-card__icon text-accent-neon">{icon}</div>
        <h3 className="heading-font text-2xl font-semibold mt-6">{title}</h3>
        <p className="text-accent-chrome mt-3 leading-relaxed">{description}</p>
        <div className="relative mt-6 h-40 w-full overflow-hidden rounded-2xl border border-white/5">
            <Image src={imgSrc} alt={`Serviço de ${title}`} fill sizes="100vw" className="object-cover" />
        </div>
    </div>
);

const ServicesSection = () => (
    <section id="servicos" className="relative py-24 bg-brand-steel text-white">
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent via-brand-steel/60 to-brand-steel" />
        <div className="container relative mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-neon">
                    Especialidades
                </span>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-brand-aurora">Nossos Serviços</h2>
                <p className="text-accent-chrome leading-relaxed">
                    Tecnologia de ponta, conhecimento técnico e atendimento personalizado para resolver do chaveiro básico ao mais avançado reparo eletrônico automotivo.
                </p>
            </div>
            <div className="mt-10 max-w-4xl mx-auto flex flex-col gap-4 text-sm text-accent-chrome">
                <div className="flex items-center gap-3 justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-ember/30 text-white">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </span>
                    Programação de chaves reserva e cópia na hora
                </div>
                <div className="flex items-center gap-3 justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-neon/20 text-accent-neon">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75H21M3.75 12h10.5M3.75 17.25h6" />
                        </svg>
                    </span>
                    Soluções integradas com alarmes e rastreadores
                </div>
                <div className="flex items-center gap-3 justify-center">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-aurora">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                        </svg>
                    </span>
                    Atendimento rápido com monitoramento em tempo real
                </div>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {servicesData.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </div>
    </section>
);

const GallerySection = () => {
    const galleryImages = [
        { src: '/images/image1.jpeg', label: 'Chaveiro em campo', layout: 'lg:col-span-2 lg:row-span-2', accent: 'from-brand-ember/50 via-transparent to-transparent' },
        { src: '/images/image2.jpeg', label: 'Codificação OEM', layout: '', accent: 'from-brand-aurora/40 via-transparent to-transparent' },
        { src: '/images/image3.jpeg', label: 'Reparo eletrônico', layout: '', accent: 'from-accent-neon/50 via-transparent to-transparent' },
        { src: '/images/image4.jpeg', label: 'Troca de carcaça', layout: 'lg:row-span-2', accent: 'from-brand-ember/40 via-transparent to-transparent' },
        { src: '/images/image5.jpeg', label: 'Programação de reserva', layout: '', accent: 'from-brand-aurora/40 via-transparent to-transparent' },
        { src: '/images/image6.jpeg', label: 'Controle remoto', layout: '', accent: 'from-accent-neon/40 via-transparent to-transparent' },
        { src: '/images/image7.jpeg', label: 'Diagnóstico avançado', layout: 'lg:col-span-2', accent: 'from-brand-ember/45 via-transparent to-transparent' },
        { src: '/images/image8.jpeg', label: 'Atendimento imediato', layout: '', accent: 'from-brand-aurora/35 via-transparent to-transparent' },
    ];

    return (
        <section id="galeria" className="py-20 md:pb-24 pb-14 bg-gradient-to-b from-black/80 via-brand-midnight/80 to-black/90">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-neon">
                        Resultados reais
                    </span>
                    <h2 className="heading-font text-3xl md:text-4xl font-bold text-brand-aurora mt-6">Galeria de Trabalhos</h2>
                    <p className="text-accent-chrome mt-3">
                        Projetos recentes que combinam precisão técnica, acabamento impecável e atendimento humanizado.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
                    {galleryImages.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-brand-soft transition-transform duration-500 hover:-translate-y-1 ${item.layout}`}
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <Image src={item.src} alt={item.label} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className={`absolute inset-0 bg-gradient-to-tr ${item.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-60`} />
                            </div>
                            <div className="relative z-10 flex h-full flex-col justify-between p-4">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    <span className="h-2 w-2 rounded-full bg-accent-neon"></span>
                                    Portfólio
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white md:text-base">{item.label}</p>
                                    <p className="text-xs text-white/70 mt-1">Detalhes sob medida para cada modelo automotivo.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => (
    <section id="sobre" className="py-24 bg-brand-steel/80">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-white/10 shadow-brand-soft">
                    <Image src="/images/image10.jpeg" alt="Retrato do chaveiro profissional" fill sizes="50vw" className="object-cover" />
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-brand-aurora mb-4">Mais de 20 anos de experiência</h2>
                <p className="text-accent-chrome leading-relaxed mb-6">
                    Com uma longa trajetória de dedicação e profissionalismo, a Magnani Chaveiro estabeleceu-se como referência em soluções automotivas, construindo uma sólida reputação baseada na confiança e na satisfação do cliente.
                </p>
                <p className="text-accent-chrome leading-relaxed">
                    Nosso compromisso é com a agilidade no atendimento e o uso de equipamentos de última geração, garantindo um serviço de excelência para o seu veículo.
                </p>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contato" className="relative py-24 bg-brand-midnight">
        <div className="absolute inset-0 bg-contact-grid opacity-80" />
        <div className="relative container mx-auto px-6">
            <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 shadow-brand-soft">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    <div className="flex-1">
                        <span className="inline-flex items-center gap-2 rounded-full border border-accent-neon/30 bg-brand-steel/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-neon">
                            Atendimento imediato
                        </span>
                        <h2 className="heading-font text-3xl md:text-4xl font-bold text-brand-aurora mt-6">
                            Precisa de um chaveiro agora?
                        </h2>
                        <p className="text-accent-chrome mt-4 leading-relaxed max-w-2xl">
                            Entre em contato para um orçamento sem compromisso. Atendimento de emergência disponível para toda a região de Jundiaí.
                        </p>
                    </div>
                    <div className="flex-1 space-y-6 text-brand-aurora">
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ember/30 text-white">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75 12 12.75l9.75-6" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75 3 7.5m18 0-9 5.25m0 0V21" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-accent-chrome">Telefone & WhatsApp</p>
                                <a
                                    href="https://api.whatsapp.com/send?phone=11947120891"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold text-brand-aurora hover:text-white transition-colors"
                                >
                                    (11) 94712-0891
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-neon/20 text-accent-neon">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m12 18.75 6.75-5.625a1.5 1.5 0 0 0 .532-1.154V5.25A1.5 1.5 0 0 0 17.782 3.8l-5.25-1.75a1.5 1.5 0 0 0-1.064 0l-5.25 1.75A1.5 1.5 0 0 0 5.25 5.25v6.721c0 .45.197.879.532 1.154L12 18.75Z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-accent-chrome">Base operacional</p>
                                <p className="text-brand-aurora font-semibold">Jundiaí - SP e cidades vizinhas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-brand-ember px-7 py-3 text-base font-semibold text-white shadow-brand-soft transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-ember/90"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0-4.5-4.5M12 19.5l4.5-4.5" />
                        </svg>
                        Solicitar retorno agora
                    </a>
                    <a
                        href="tel:+5511947120891"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-base font-semibold text-brand-aurora transition-colors duration-300 hover:border-accent-neon/60 hover:bg-accent-neon/10"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75a.75.75 0 0 1 .75-.75h3.443c.307 0 .575.196.696.485l1.589 3.847a.75.75 0 0 1-.083.712l-1.293 1.723a.75.75 0 0 0 .073.967l2.143 2.143a.75.75 0 0 0 .966.073l1.723-1.293a.75.75 0 0 1 .712-.083l3.847 1.589a.75.75 0 0 1 .485.696V21a.75.75 0 0 1-.75.75H19.5"
                            />
                        </svg>
                        Ligar agora
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const MobileContactCTA = () => (
    <div className="mobile-cta fixed bottom-6 inset-x-4 z-40 md:hidden">
        <a
            href="https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0"
            className="relative flex items-center gap-4 rounded-full bg-brand-ember px-6 py-3 text-base font-semibold text-white shadow-brand-glow"
        >
            <span className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75a.75.75 0 0 1 .75-.75h3.443c.307 0 .575.196.696.485l1.589 3.847a.75.75 0 0 1-.083.712l-1.293 1.723a.75.75 0 0 0 .073.967l2.143 2.143a.75.75 0 0 0 .966.073l1.723-1.293a.75.75 0 0 1 .712-.083l3.847 1.589a.75.75 0 0 1 .485.696V21a.75.75 0 0 1-.75.75H19.5"
                    />
                </svg>
            </span>
            <div className="pl-12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80">Contato imediato</p>
                <p className="text-lg font-semibold">Falar com o chaveiro</p>
            </div>
        </a>
    </div>
);

const Footer = () => (
    <footer className="bg-black py-6 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-accent-chrome">
            <p>&copy; {new Date().getFullYear()} Magnani Chaveiro. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="bg-brand-midnight text-brand-aurora font-sans">
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
            <MobileContactCTA />
        </div>
    );
}
