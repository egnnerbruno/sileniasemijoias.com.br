import { Instagram } from 'lucide-react';
import styles from './About.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/silstyllussemijoias/';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                {/* Left: image/visual */}
                <div className={`reveal-left ${styles.visual}`}>
                    <div className={styles.imageFrame}>
                        <img
                            src="/assets/fundadora.webp"
                            alt="Selenia — fundadora da Styllus Semijoias em Vitória/ES"
                            className={styles.ceoPhoto}
                        />
                        <div className={styles.photoOverlay}></div>
                        <div className={styles.imageAccent}></div>
                    </div>

                    {/* Instagram Card */}
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.instaCard}
                    >
                        <Instagram size={18} />
                        <span>@silstyllussemijoias</span>
                    </a>

                    {/* Seal */}
                    <div className={styles.officialSeal}>
                        <div className={styles.sealInner}>
                            <div className={styles.sealCircle}>✦</div>
                            <span>Revendedora</span>
                            <strong>Oficial</strong>
                        </div>
                    </div>
                </div>

                {/* Right: text */}
                <div className={`reveal-right delay-100 ${styles.content}`}>
                    <div className={styles.label}>
                        <span className="section-label">Quem Somos</span>
                    </div>

                    <h2 className={styles.title}>
                        <span className={styles.titleAccent}>Styllus</span> Semijoias<br />
                        em Vitória, ES
                    </h2>

                    <p className={styles.text}>
                        Somos a <strong>Styllus Semijoias</strong>, franquia oficial em <strong>Vitória/ES</strong> criada para democratizar o empreendedorismo feminino.
                    </p>

                    <p className={styles.text}>
                        No modelo <span className={styles.highlight}>CONSIGNADO</span>, oferecemos às mulheres capixabas a chance de gerar renda com semijoias que unem beleza, qualidade e elegância, apoiadas por toda a estrutura da Styllus Virtual.   
                    </p>

                    </div>
            </div>
        </section>
    );
};

export default About;
