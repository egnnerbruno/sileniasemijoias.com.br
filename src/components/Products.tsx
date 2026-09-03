import { Sparkles, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { useRef, useState } from 'react';
import Modal from './Modal';
import styles from './Products.module.css';

const WA_LINK = 'https://wa.me/c/5527999143932';

type Product = {
    id: number;
    name: string;
    img: string;
    desc: string;
};

const products: Product[] = [
    { id: 1, name: 'Colares', img: '/assets/colar.png', desc: 'Colares delicados e chamarizes em banho de ouro 18k' },
    { id: 2, name: 'Brincos', img: '/assets/brinco.jpg', desc: 'Brincos de argola, pendentes e ear cuffs sofisticados' },
    { id: 3, name: 'Anéis', img: '/assets/anel.jpg', desc: 'Anéis ajustáveis e solitários com pedras naturais' },
    { id: 4, name: 'Pulseiras', img: '/assets/pulseira.jpg', desc: 'Pulseiras de berloques, correntes e braceletes' },
    { id: 5, name: 'Chokers', img: '/assets/chokers.jpg', desc: 'Chokers modernos e atemporais para qualquer look' },
    { id: 6, name: 'Conjuntos', img: '/assets/conjuntos.jpg', desc: 'Kits combinados com colar + brinco + pulseira' },
];

const Products = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState<Product | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        // Distância baseada no tamanho real do card + gap (fluido em qualquer viewport)
        const card = container.firstElementChild as HTMLElement | null;
        const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
        const amount = card ? card.getBoundingClientRect().width + gap : container.clientWidth * 0.8;
        container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    };

    const openProduct = (product: Product) => setSelected(product);

    const waProductLink = (name: string) =>
        `https://wa.me/5527996088725?text=${encodeURIComponent(`Olá! Me interessei pelas peças de ${name} e quero saber mais sobre o kit consignado.`)}`;

    return (
        <section id="products" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Nossa <span className={styles.titleAccent}>Coleção</span> Exclusiva
                    </h2>
                    <p className={styles.subtitle}>
                        Semijoias com banho de ouro 18k e design sofisticado. Escolha suas peças favoritas ou solicite o catálogo completo.
                    </p>
                </div>

                {/* Slider Container com Nav */}
                <div className={styles.sliderContainer}>
                    <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={() => scroll('left')} aria-label="Anterior">
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.grid} ref={scrollRef}>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={styles.card}
                                role="button"
                                tabIndex={0}
                                aria-label={`Ver detalhes de ${product.name}`}
                                onClick={() => openProduct(product)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        openProduct(product);
                                    }
                                }}
                            >
                                <div className={styles.cardVisual}>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className={styles.productImg}
                                    />
                                    <div className={styles.cardGlow}></div>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{product.name}</h3>
                                    <p className={styles.cardDesc}>{product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.navBtn} ${styles.navNext}`} onClick={() => scroll('right')} aria-label="Próximo">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.cta}>
                    <div className={styles.ctaText}>
                        <Sparkles size={20} />
                        <span>Gostou? Veja o catálogo completo em nosso WhatsApp.</span>
                    </div>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                        <MessageCircle size={18} />
                        Ver Catálogo Completo
                    </a>
                </div>
            </div>

            {/* Modal de detalhes — viewport-aware, com scroll interno e ações fixas */}
            <Modal
                isOpen={selected !== null}
                onClose={() => setSelected(null)}
                title={selected?.name}
                footer={
                    selected && (
                        <a
                            href={waProductLink(selected.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.modalCta}
                        >
                            <MessageCircle size={18} />
                            Quero estas peças no meu kit
                        </a>
                    )
                }
            >
                {selected && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalImageWrap}>
                            <img src={selected.img} alt={selected.name} className={styles.modalImage} />
                        </div>
                        <p className={styles.modalDesc}>{selected.desc}.</p>
                        <div className={styles.modalNote}>
                            <ShieldCheck size={18} />
                            <span>
                                Todas as peças têm <strong>banho de ouro 18k</strong> e acompanham
                                certificado com <strong>2 anos de garantia</strong> de fábrica.
                            </span>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Products;
