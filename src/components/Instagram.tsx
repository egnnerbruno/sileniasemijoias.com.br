import { Instagram as InstagramIcon } from 'lucide-react';
import styles from './Instagram.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/silstyllussemijoias/';
const HANDLE = '@silstyllussemijoias';

/**
 * Posts do bloco: imagens 4:5 (800x1000) em /public/assets/instagram/.
 * Para trocar, substitua o arquivo ou o caminho aqui. `href` é opcional: quando
 * preenchido, a foto abre o post; sem ele, abre o perfil.
 */
const posts: { src: string; alt: string; href?: string }[] = [
    { src: '/assets/instagram/siga.webp', alt: 'Sil com o mostruário de semijoias Styllus e o convite para seguir o perfil' },
    { src: '/assets/instagram/equipe.webp', alt: 'Equipe de consultoras Styllus reunida no Centro de Relacionamento em Vitória' },
    { src: '/assets/instagram/escolha-pecas.webp', alt: 'Campanha Escolha as peças que suas clientes vão amar, com mostruário e loja virtual' },
    { src: '/assets/instagram/indique-ganhe.webp', alt: 'Campanha Indique e Ganhe: recompensas para quem indica uma nova revendedora' },
];

const Instagram = () => {
    return (
        <section id="instagram" className={styles.section} aria-labelledby="instagram-title">
            <div className={styles.glow} aria-hidden="true"></div>
            <div className={styles.container}>
                <div className={`reveal-up ${styles.header}`}>
                    <span className="section-label">Instagram</span>
                    <h2 id="instagram-title" className={styles.title}>
                        Novidades toda semana no
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.handle}>
                            {HANDLE}
                        </a>
                    </h2>
                    <p className={styles.subtitle}>
                        Lançamentos, combinações de peças e os bastidores do Centro de Relacionamento em Vitória.
                    </p>
                </div>

                <ul className={`reveal-up delay-100 ${styles.grid}`}>
                    {posts.map((post) => (
                        <li key={post.src} className={styles.tile}>
                            <a
                                href={post.href ?? INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.tileLink}
                                aria-label={`${post.alt}. Abrir no Instagram`}
                            >
                                <img src={post.src} alt="" loading="lazy" decoding="async" />
                                <span className={styles.overlay} aria-hidden="true">
                                    <InstagramIcon size={26} strokeWidth={1.6} />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`reveal-up delay-200 ${styles.ctaWrap}`}>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                        <InstagramIcon size={18} />
                        Seguir no Instagram
                    </a>
                    <span className={styles.ctaNote}>Sem compromisso, só inspiração.</span>
                </div>
            </div>
        </section>
    );
};

export default Instagram;
