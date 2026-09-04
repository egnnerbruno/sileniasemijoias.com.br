import { ShoppingBag, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

const CATALOG_LINK = 'https://wa.me/c/5527999143932';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            {/* Background */}
            <div className={styles.bgLayer}></div>
            <div className={styles.bgGradient}></div>

            <div className={styles.container}>
                <div className={styles.contentWrap}>
                    {/* Left: Text Context */}
                    <div className={styles.textContent}>
                        <div className={styles.badge}>
                            <Sparkles size={14} />
                            Coleção Exclusiva Styllus
                        </div>

                        <h1 className={styles.headline}>
                            <span className={styles.headlineLine1}>Realce sua</span>
                            <span className={styles.headlineLine2}><span className={styles.headlineAccent}>Beleza</span> Natural</span>
                        </h1>

                        <p className={styles.subtitle}>
                            Semijoias de luxo com design sofisticado e qualidade premium. 
                            Peças exclusivas para mulheres que valorizam elegância em cada detalhe.
                        </p>

                        {/* CTAs */}
                        <div className={styles.ctaGroup}>
                            <a href="#products" className={styles.ctaPrimary}>
                                <ShoppingBag size={18} />
                                Ver Coleção
                            </a>
                            <a href={CATALOG_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                                Catálogo Completo
                            </a>
                        </div>

                        {/* Faixa de confiança */}
                        <ul className={styles.trust} aria-label="Diferenciais">
                            <li>Banho de ouro 18k</li>
                            <li>Garantia de 2 anos</li>
                            <li>Revendedora oficial</li>
                        </ul>
                    </div>

                    {/* Right: Visual */}
                    <div className={styles.visualContent}>
                        <div className={styles.imageWrapper}>
                            <img src="/assets/modelo-styllus.webp" alt="Semijoias Styllus" className={styles.heroImg} />
                            <div className={styles.glowEffect}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
