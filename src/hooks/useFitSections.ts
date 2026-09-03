import { useEffect } from 'react';

/**
 * Auto-ajuste de escala: garante que cada seção CAIBA na área visível.
 *
 * O CSS fluido (tokens com svh) já compacta o ritmo vertical em telas
 * baixas; este hook é a garantia final — se uma seção ainda ficar mais
 * alta que a área útil (viewport menos o header fixo), ela é reduzida
 * via `zoom` até encaixar, com um piso de escala para manter a leitura
 * confortável. A largura é compensada para a seção continuar ocupando
 * 100% da tela (só o conteúdo interno fica proporcionalmente menor).
 *
 * FIX DE GAP: ao aplicar zoom fracionário (ex: 0.873), o browser arredonda
 * pixels e pode criar um gap de 1-2px entre seções. Compensamos com
 * `margin-bottom: -2px` inline quando zoom < 1, removido quando zoom = 1.
 */

const MIN_ZOOM = 0.66; // piso de legibilidade — abaixo disso, a seção rola
const MAX_PASSES = 3;  // iterações de convergência (o texto pode requebrar)
const DEBOUNCE_MS = 150;

const applyZoom = (el: HTMLElement, zoom: number) => {
    if (zoom >= 0.995) {
        el.style.removeProperty('zoom');
        el.style.removeProperty('margin-bottom'); // remove compensação
    } else {
        el.style.setProperty('zoom', zoom.toFixed(4));
        // Compensa o gap de subpixel que o zoom fracionário cria entre seções
        el.style.marginBottom = '-2px';
    }
};

export const useFitSections = () => {
    useEffect(() => {
        const sections = () => document.querySelectorAll<HTMLElement>('main section');

        const fit = () => {
            const raw = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
            const headerOffset = Number.isFinite(raw) ? raw : 84;

            sections().forEach((sec) => {
                // Hero é tela cheia por definição (100svh, header sobreposto);
                // as demais precisam caber na área útil abaixo do header.
                const target = sec.id === 'hero'
                    ? window.innerHeight
                    : window.innerHeight - headerOffset;

                let zoom = 1;
                applyZoom(sec, 1);
                for (let pass = 0; pass < MAX_PASSES; pass++) {
                    const height = sec.getBoundingClientRect().height;
                    if (height <= target + 1 || zoom <= MIN_ZOOM) break;
                    zoom = Math.max(MIN_ZOOM, (zoom * target) / height);
                    applyZoom(sec, zoom);
                }
            });
        };

        let timer: number | undefined;
        const schedule = () => {
            window.clearTimeout(timer);
            timer = window.setTimeout(fit, DEBOUNCE_MS);
        };

        fit();
        // Reavalia quando fontes/imagens carregam (mudam a altura real)
        document.fonts?.ready.then(schedule).catch(() => undefined);
        window.addEventListener('load', schedule);
        window.addEventListener('resize', schedule);
        window.addEventListener('orientationchange', schedule);

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('load', schedule);
            window.removeEventListener('resize', schedule);
            window.removeEventListener('orientationchange', schedule);
            sections().forEach((sec) => applyZoom(sec, 1));
        };
    }, []);
};
