import { useEffect, useRef, useState } from 'react';
import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { categories, products, type CategoryId, type Product } from '../data/products';
import styles from './Products.module.css';

const WA_LINK = 'https://wa.me/c/5527999143932';

const waProductLink = (product: Product) =>
    `https://wa.me/5527996088725?text=${encodeURIComponent(
        `Olá! Me interessei pela peça ${product.name} (cód. ${product.code}) e quero saber mais sobre o kit consignado.`,
    )}`;

const Products = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryId>(categories[0].id);
    const [selected, setSelected] = useState<Product | null>(null);

    // A grade só anima quando a seção entra na tela; depois disso, anima a cada troca de categoria.
    const sectionRef = useRef<HTMLElement>(null);
    // Sem IntersectionObserver (navegador antigo), a grade já nasce visível.
    const [inView, setInView] = useState(() => !('IntersectionObserver' in window));

    useEffect(() => {
        const el = sectionRef.current;
        if (!el || !('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setInView(true);
                observer.disconnect();
            }
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const current = categories.find((c) => c.id === activeCategory) ?? categories[0];
    const visible = products.filter((p) => p.category === activeCategory);

    return (
        <section id="products" className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <div className={`reveal-up ${styles.header}`}>
                    <span className="section-label">Coleção</span>
                    <h2 className={styles.title}>
                        Nossa <span className={styles.titleAccent}>Coleção</span> Exclusiva
                    </h2>
                    <p className={styles.subtitle}>
                        Conheça algumas peças banhadas a ouro 18k, prata, prata 925 e aço inoxidável que vão no
                        seu kit consignado. São joias fáceis de vender, porque encantam as clientes.
                    </p>
                </div>

                {/* Filtro por categoria */}
                <div className={`reveal-up delay-100 ${styles.tabs}`} role="tablist" aria-label="Categorias da coleção">
                    {categories.map((category) => {
                        const isActive = category.id === activeCategory;
                        return (
                            <button
                                key={category.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                <p key={`tagline-${activeCategory}`} className={`${styles.tagline} ${inView ? styles.taglineIn : ''}`}>
                    {current.tagline}
                </p>

                {/* Grade de peças — a key força a animação de entrada ao trocar de categoria */}
                <div
                    key={`grid-${activeCategory}`}
                    className={`${styles.grid} ${inView ? styles.gridIn : ''}`}
                    role="list"
                >
                    {visible.map((product, index) => (
                        <div
                            key={product.id}
                            role="listitem"
                            className={styles.card}
                            style={{ '--i': index } as React.CSSProperties}
                        >
                            <button
                                type="button"
                                className={styles.cardButton}
                                onClick={() => setSelected(product)}
                                aria-label={`Ver detalhes de ${product.name}`}
                            >
                                <span className={styles.media}>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        width={800}
                                        height={800}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className={styles.hint}>Ver detalhes</span>
                                </span>
                                <span className={styles.body}>
                                    <span className={styles.finish}>{product.finish}</span>
                                    <span className={styles.name}>{product.name}</span>
                                    <span className={styles.code}>Cód. {product.code}</span>
                                </span>
                            </button>
                        </div>
                    ))}
                </div>

                <p className={`reveal-up ${styles.warranty}`}>
                    <ShieldCheck size={16} aria-hidden="true" />
                    Todas as peças têm dois anos de garantia de fábrica.
                </p>

                <div className={`reveal-up ${styles.cta}`}>
                    <div className={styles.ctaText}>
                        <Sparkles size={20} />
                        <span>Essa é só uma amostra. O catálogo completo, com centenas de peças, está no WhatsApp.</span>
                    </div>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                        <MessageCircle size={18} />
                        Ver Catálogo Completo
                    </a>
                </div>
            </div>

            {/* Modal de detalhes da peça */}
            <Modal
                isOpen={selected !== null}
                onClose={() => setSelected(null)}
                title={selected?.name}
                maxWidth={600}
                footer={
                    selected && (
                        <a
                            href={waProductLink(selected)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.modalCta}
                        >
                            <MessageCircle size={18} />
                            Quero esta peça no meu kit
                        </a>
                    )
                }
            >
                {selected && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalImageWrap}>
                            <img src={selected.img} alt={selected.name} className={styles.modalImage} />
                        </div>
                        <div className={styles.modalMeta}>
                            <span className={styles.modalFinish}>{selected.finish}</span>
                            <span className={styles.modalCode}>Cód. {selected.code}</span>
                        </div>
                        <p className={styles.modalDesc}>{selected.desc}</p>
                        <div className={styles.modalNote}>
                            <ShieldCheck size={18} />
                            <span>
                                Peça original Styllus com <strong>certificado de garantia de 2 anos</strong>.
                                Disponível para o seu kit consignado: você só paga o que vender.
                            </span>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Products;
