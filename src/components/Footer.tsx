import { Instagram, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const WA_LINK = 'https://wa.me/c/5527999143932';
const INSTAGRAM_URL = 'https://www.instagram.com/silstyllussemijoias/';
const STYLLUS_URL = 'https://www.styllusvirtual.com.br/';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topLine}></div>
            <div className={styles.container}>
                {/* Logo + slogan */}
                <div className={styles.brandBlock}>
                    <div className={styles.logo}>
                        <img src="/assets/logo_sil_styllus.svg" alt="Styllus Semijoias" className={styles.logoImg} />
                    </div>
                    <p className={styles.slogan}>
                        Elegância e sofisticação<br />em cada detalhe.
                    </p>
                    <div className={styles.socials}>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.socialWa}`} aria-label="WhatsApp">
                            <MessageCircle size={18} />
                        </a>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.socialInsta}`} aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className={styles.linksBlock}>
                    <h4 className={styles.linksTitle}>Menu</h4>
                    <ul className={styles.linksList}>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#products">Coleção</a></li>
                    </ul>
                </div>

                {/* Endereço */}
                <div className={styles.addressBlock}>
                    <h4 className={styles.linksTitle}>Endereço</h4>
                    <ul className={styles.addressList}>
                        <li className={styles.address}>
                            Rua Cap. Domingos Corrêa da Rocha, 80<br />
                            Ed. Master Place — G2 P03<br />
                            Santa Lúcia, Vitória/ES · CEP 29.056-220
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    <p>© 2026 Styllus Semijoias. Todos os direitos reservados.</p>
                    <p className={styles.bottomNote}>
                        Revendedora oficial <a href={STYLLUS_URL} target="_blank" rel="noopener noreferrer">Styllusvirtual</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
