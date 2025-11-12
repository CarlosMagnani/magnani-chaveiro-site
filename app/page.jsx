"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';

const TESTIMONIALS = [
    {
        quote: 'Perdi a chave do meu Cruze à noite e o Anderson chegou em menos de 40 minutos. Fez a chave codificada e testou tudo antes de ir embora. Atendimento impecável!',
        name: 'Patrícia Lima',
        location: 'Anhangabaú, Jundiaí',
    },
    {
        quote: 'Meu telecomando parou depois da chuva. O reparo ficou pronto no mesmo dia e recebi orientações claras de uso. Recomendo pela honestidade.',
        name: 'Rogério Matos',
        location: 'Centro, Várzea Paulista',
    },
    {
        quote: 'Fizemos a conversão da frota da empresa para chave canivete. Serviço rápido, com nota fiscal e garantia de 6 meses. Excelente parceiro!',
        name: 'Luciana Prado',
        location: 'Distrito Industrial, Jundiaí',
    },
];

const FAQ_ITEMS = [
    {
        question: 'Vocês atendem quais cidades?',
        answer: 'Nosso deslocamento cobre Jundiaí, Várzea Paulista, Campo Limpo Paulista, Louveira, Itupeva e Cajamar. Para outras regiões, consulte disponibilidade.',
    },
    {
        question: 'Qual o prazo para uma cópia de chave codificada?',
        answer: 'Em situações emergenciais, concluímos em até 60 minutos após a chegada no local. Em atendimentos agendados, a programação leva cerca de 30 minutos por veículo.',
    },
    {
        question: 'Existe garantia para os serviços?',
        answer: 'Sim, oferecemos 90 dias para programação eletrônica e até 6 meses para carcaças e botões substituídos. A garantia inclui suporte remoto para sincronização adicional.',
    },
    {
        question: 'Quais formas de pagamento vocês aceitam?',
        answer: 'Aceitamos Pix, cartões de crédito e débito, dinheiro e faturamento corporativo mediante cadastro. Em emergências noturnas, priorizamos pagamentos digitais.',
    },
];


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
                <h1 className="heading-font text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
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


const ServiceCard = ({ imgSrc, title, description, features, cta }) => (
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
        <h3 className="heading-font text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {features?.length > 0 && (
            <ul className="space-y-2 text-sm text-gray-300 mb-6 list-disc list-inside">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        )}
        {cta && (
            <a
                href={cta.href}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105"
            >
                {cta.label}
            </a>
        )}
    </div>
);

const ServicesSection = () => (
    <section id="servicos" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                    Tecnologia de ponta para todos os tipos de chaves, com estoque de chips e carcaças originais. Cada atendimento inclui diagnóstico eletrônico antes da entrega para garantir que a chave funcione perfeitamente no veículo.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    <span className="font-semibold text-gray-300">Serviço móvel:</span> vamos até você em Jundiaí, Várzea Paulista, Campo Limpo Paulista, Itupeva e regiões vizinhas.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    imgSrc="/images/image11.jpeg"
                    title="Chaves Codificadas"
                    description="Criação e programação de chaves com transponder (chip) para a maioria dos veículos nacionais e importados. Segurança e compatibilidade total com o módulo eletrônico."
                    features={[
                        'Programação via OBD com ferramentas homologadas',
                        'Reposição de chave perdida em até 60 minutos',
                        'Garantia de 90 dias contra falhas eletrônicas',
                    ]}
                    cta={{
                        href: 'https://api.whatsapp.com/send/?phone=5511947120891&text=Quero%20uma%20chave%20codificada&type=phone_number&app_absent=0',
                        label: 'Solicitar chave codificada',
                    }}
                />
                <ServiceCard
                    imgSrc="/images/image12.jpeg"
                    title="Chaves Canivete"
                    description="Conversão da sua chave simples para o modelo canivete, unindo alarme e lâmina em um design moderno e resistente. Também realizamos cópias sob medida."
                    features={[
                        'Substituição da carcaça com montagem reforçada',
                        'Soldagem de botões e revisão do controle remoto',
                        'Modelos compatíveis com Chevrolet, Volkswagen, Fiat, Ford e mais',
                    ]}
                    cta={{
                        href: 'https://api.whatsapp.com/send/?phone=5511947120891&text=Quero%20converter%20minha%20chave%20para%20canivete&type=phone_number&app_absent=0',
                        label: 'Converter minha chave',
                    }}
                />
                <ServiceCard
                    imgSrc="/images/image13.jpeg"
                    title="Reparo de Telecomandos"
                    description="Reparo completo de telecomandos automotivos com troca de botões, carcaças e baterias, recuperando a funcionalidade original."
                    features={[
                        'Limpeza ultrassônica da placa eletrônica',
                        'Regravação de código e sincronização com o alarme',
                        'Peças originais ou premium com garantia de 6 meses',
                    ]}
                    cta={{
                        href: 'https://api.whatsapp.com/send/?phone=5511947120891&text=Preciso%20reparar%20meu%20telecomando&type=phone_number&app_absent=0',
                        label: 'Agendar reparo agora',
                    }}
                />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Como funciona?</h3>
                    <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
                        <li>Você solicita pelo WhatsApp e recebe orçamento com fotos de referência.</li>
                        <li>Confirmamos disponibilidade de agenda e vamos até o local ou marcamos na loja.</li>
                        <li>Entregamos a chave testada no contato e partimos.</li>
                    </ol>
                </div>
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Diferenciais Magnani</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                        <li>Atendimento 24h para emergências automotivas.</li>
                        <li>Pagamento via Pix, cartão ou faturamento PJ cadastrado.</li>
                        <li>Equipe treinada com certificação em imobilizadores avançados.</li>
                    </ul>
                </div>
                <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Garantias claras</h3>
                    <p className="text-sm text-gray-300">
                        Todas as peças substituídas possuem rastreabilidade com número de série e laudo fotográfico. Caso haja algum defeito dentro do período de garantia, refazemos o serviço sem custo adicional.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const HighlightsSection = () => (
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Por que escolher a Magnani?</h2>
                <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
                    Atendimento local especializado para resolver imprevistos com rapidez e segurança. Nossa equipe chega com oficina móvel equipada para atender carros de passeio, utilitários, caminhões leves e motos premium.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        title: 'Resposta em até 30 minutos',
                        description: 'Cobertura em bairros centrais de Jundiaí com rastreamento da equipe pelo WhatsApp.',
                    },
                    {
                        title: 'Atendimento no local',
                        description: 'Oficina móvel com duplicadoras, cortadora laser e programadores de chip a bordo.',
                    },
                    {
                        title: 'Peças originais e premium',
                        description: 'Trabalhamos com fornecedores homologados para garantir durabilidade e compatibilidade.',
                    },
                    {
                        title: 'Suporte pós-serviço',
                        description: 'Checklist digital enviado por e-mail com orientações de uso e manutenção preventiva.',
                    },
                ].map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
                <a
                    href="https://api.whatsapp.com/send/?phone=5511947120891&text=Preciso%20de%20um%20chaveiro%20agora&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    Chamar chaveiro agora
                </a>
                <a
                    href="#faq"
                    className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                    Ver perguntas frequentes
                </a>
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
                    <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Galeria de Trabalhos</h2>
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
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">Mais de 20 anos de experiência</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                    Com uma longa trajetória de dedicação e profissionalismo, a Magnani Chaveiro estabeleceu-se como referência em soluções automotivas, construindo uma sólida reputação baseada na confiança e na satisfação do cliente.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Nosso compromisso é com a agilidade no atendimento e o uso de equipamentos de última geração, garantindo um serviço de excelência para o seu veículo.
                </p>
                <div className="mt-6 grid gap-4 text-left">
                    <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white">Valores que seguimos</h3>
                        <p className="text-sm text-gray-300">
                            Ética no atendimento, transparência no orçamento e respeito ao patrimônio do cliente em cada visita.
                        </p>
                    </div>
                    <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white">Equipamentos certificados</h3>
                        <p className="text-sm text-gray-300">
                            Utilizamos cortadoras Silca, programadores Xhorse e Autel, além de estoques atualizados com chips Megamos, ID48, ID46 e mais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Depoimentos reais</h2>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                    Clientes de Jundiaí e região confiam na Magnani para resolver emergências com profissionalismo e atenção aos detalhes.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">“{testimonial.quote}”</p>
                        <div className="text-left">
                            <p className="text-white font-semibold">{testimonial.name}</p>
                            <p className="text-xs text-gray-400">{testimonial.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Perguntas frequentes</h2>
                <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
                    Reunimos respostas objetivas para as dúvidas mais comuns sobre chaves automotivas e nosso atendimento móvel. Caso não encontre o que precisa, fale conosco pelo WhatsApp.
                </p>
            </div>
            <div className="space-y-6">
                {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="bg-gray-900/70 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <a
                    href="https://api.whatsapp.com/send/?phone=5511947120891&text=Tenho%20outras%20d%C3%BAvidas&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
                >
                    Tire suas dúvidas agora mesmo
                </a>
            </div>
        </div>
    </section>
);
const ContactSection = () => (
    <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Precisa de um Chaveiro Agora?</h2>
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

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Magnani Chaveiro',
        description:
            'Chaveiro automotivo em Jundiaí especializado em chaves codificadas, chaves canivete e reparo de telecomandos com atendimento móvel.',
        url: 'https://magnanichaveiro.com.br',
        telephone: '+55-11-94712-0891',
        image: 'https://magnanichaveiro.com.br/logo.png',
        priceRange: '$$',
        areaServed: ['Jundiaí', 'Várzea Paulista', 'Campo Limpo Paulista', 'Itupeva', 'Louveira', 'Cajamar'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Vigário J. J. Rodrigues, 101',
            addressLocality: 'Jundiaí',
            addressRegion: 'SP',
            postalCode: '13201-005',
            addressCountry: 'BR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -23.188553,
            longitude: -46.884112,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
            },
        ],
        sameAs: [
            'https://www.facebook.com/magnanichaveiro',
            'https://www.instagram.com/magnani.chaveiro',
            'https://api.whatsapp.com/send/?phone=5511947120891&text&type=phone_number&app_absent=0',
        ],
        makesOffer: [
            {
                '@type': 'Offer',
                name: 'Chaves codificadas automotivas',
                priceCurrency: 'BRL',
                availability: 'https://schema.org/InStock',
            },
            {
                '@type': 'Offer',
                name: 'Conversão para chave canivete',
                priceCurrency: 'BRL',
                availability: 'https://schema.org/InStock',
            },
            {
                '@type': 'Offer',
                name: 'Reparo de telecomandos',
                priceCurrency: 'BRL',
                availability: 'https://schema.org/InStock',
            },
        ],
    };

    return (
        <div className="bg-gray-900 text-gray-200 font-sans">
            <Header onMenuToggle={toggleMenu} />
            <MobileMenu isOpen={isMenuOpen} />
            <main>
                <HeroSection />
                <HighlightsSection />
                <ServicesSection />
                <TestimonialsSection />
                <GallerySection />
                <AboutSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
            <Script id="local-business-schema" type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </Script>
            <Script id="faq-schema" type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </Script>
        </div>
    );
}
