import { useEffect } from 'react';

/**
 * Silenia — rolagem nativa estável.
 *
 * O site não precisa de uma camada de inércia sobreposta ao scroll do navegador.
 * Interceptamos somente âncoras internas para aplicar o offset do header, sem
 * RAF permanente, snap automático ou leituras de layout durante cada scroll.
 */
export const useSmoothScroll = () => {
    useEffect(() => {
        const headerOffset = () => {
            const header = document.querySelector('header');
            return header instanceof HTMLElement ? header.offsetHeight + 12 : 84;
        };

        const onClick = (event: MouseEvent) => {
            const target = event.target instanceof Element
                ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
                : null;
            if (!target) return;

            const id = target.getAttribute('href')?.slice(1);
            const section = id ? document.getElementById(id) : null;
            if (!section) return;

            event.preventDefault();
            const top = section.getBoundingClientRect().top + window.scrollY - headerOffset();
            window.history.replaceState(null, '', `#${id}`);
            window.scrollTo({
                top: Math.max(0, top),
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            });
        };

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
};
