import { useEffect } from 'react';

export const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15, // Gatilho dispara quando 15% do elemento estiver visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    // A linha abaixo garante que anima só na 1ª vez que aparece na tela
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
