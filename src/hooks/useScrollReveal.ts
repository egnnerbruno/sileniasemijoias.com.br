import { useEffect } from 'react';

/**
 * Revela elementos com classe .reveal-* quando entram na tela (uma única vez).
 * O rootMargin negativo faz o gatilho disparar um pouco depois da borda inferior,
 * para a animação acontecer com o elemento já visível.
 */
export const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((el) => el.classList.add('is-revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.12,
        });

        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
