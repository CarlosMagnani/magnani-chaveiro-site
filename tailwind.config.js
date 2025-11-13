/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    midnight: '#04060f',
                    steel: '#101933',
                    ember: '#ff3b3f',
                    emberDark: '#cc1d26',
                    aurora: '#f5f1e6',
                },
                accent: {
                    neon: '#21ffd3',
                    chrome: '#7f8bad',
                },
            },
            backgroundImage: {
                'hero-mesh':
                    'radial-gradient(circle at 20% 20%, rgba(33, 255, 211, 0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(255, 59, 63, 0.28), transparent 45%), linear-gradient(135deg, #050a17 0%, #0c162f 60%, #05070f 100%)',
                'service-fiber':
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(33, 255, 211, 0.12) 45%, rgba(255, 59, 63, 0.12) 100%)',
                'contact-grid':
                    'radial-gradient(circle at 15% 20%, rgba(33, 255, 211, 0.12), transparent 55%), radial-gradient(circle at 85% 80%, rgba(255, 59, 63, 0.12), transparent 45%), linear-gradient(120deg, rgba(4, 6, 15, 0.95), rgba(16, 25, 51, 0.85))',
            },
            boxShadow: {
                'brand-glow': '0 35px 120px rgba(33, 255, 211, 0.15)',
                'brand-soft': '0 12px 40px rgba(15, 23, 42, 0.35)',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                'russo-one': ['var(--font-russo-one)'],
            },
        },
    },
    plugins: [],
};
