import { useEffect, useRef, useState } from 'react';

/**
 * Hook que transforma qualquer container em um slider automático no mobile.
 * - Suporte a swipe (touch)
 * - Indicadores de paginação (dots)
 * - Auto-advance a cada `interval` ms (pausa ao interagir)
 */
export const useMobileSlider = (
    options: { interval?: number; breakpoint?: number } = {}
) => {
    const { interval = 3500, breakpoint = 640 } = options;

    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detecta mobile e conta slides
    useEffect(() => {
        const check = () => {
            const mobile = window.innerWidth <= breakpoint;
            setIsMobile(mobile);
            if (trackRef.current) {
                setCount(trackRef.current.children.length);
            }
        };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, [breakpoint]);

    // Scroll para slide ativo
    const scrollTo = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        setActiveIndex(index);
    };

    // Auto-advance
    useEffect(() => {
        if (!isMobile || count <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % count;
                const track = trackRef.current;
                if (!track) return next;
                const card = track.children[next] as HTMLElement;
                if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
                return next;
            });
        }, interval);
        return () => clearInterval(timer);
    }, [isMobile, count, interval]);

    // Sincroniza dot com scroll manual
    useEffect(() => {
        const track = trackRef.current;
        if (!track || !isMobile) return;
        const onScroll = () => {
            const center = track.scrollLeft + track.clientWidth / 2;
            let closest = 0;
            let minDist = Infinity;
            Array.from(track.children).forEach((child, i) => {
                const el = child as HTMLElement;
                const cardCenter = el.offsetLeft - track.offsetLeft + el.offsetWidth / 2;
                const dist = Math.abs(center - cardCenter);
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            setActiveIndex(closest);
        };
        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, [isMobile]);

    return { trackRef, activeIndex, count, isMobile, scrollTo };
};
