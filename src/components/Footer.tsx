import { Instagram, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const WA_LINK = 'https://wa.me/c/5527999143932';
const WA_KIT = 'https://wa.me/5527996088725?text=Ol%C3%A1+Sil%2C+vi+o+site+e+quero+agendar+para+retirar+meu+kit+consignado%21';
const INSTAGRAM_URL = 'https://www.instagram.com/silstyllussemijoias/';
const STYLLUS_URL = 'https://www.styllusvirtual.com.br/';

const menuLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Coleção', href: '#products' },
    { name: 'Revenda', href: '#reseller' },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topLine}></div>
            <div className={styles.container}>
                {/* Logo + slogan */}
                <div className={`reveal-up ${styles.brandBlock}`}>
                    <div className={styles.logo}>
                        <img src="/assets/logo.png" alt="Styllus Semijoias" className={styles.logoImg} />
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
                <nav className={`reveal-up delay-100 ${styles.linksBlock}`} aria-label="Menu do rodapé">
                    <h4 className={styles.linksTitle}>Menu</h4>
                    <ul className={styles.linksList}>
                        {menuLinks.map((link) => (
                            <li key={link.href}><a href={link.href}>{link.name}</a></li>
                        ))}
                    </ul>
                </nav>

                {/* Onde retirar o kit — endereço completo só pelo WhatsApp, a pedido da cliente */}
                <div className={`reveal-up delay-200 ${styles.addressBlock}`}>
                    <h4 className={styles.linksTitle}>Onde retirar o kit</h4>
                    <p className={styles.address}>
                        Centro de Relacionamento Styllus<br />
                        Vitória/ES, bairro Santa Lúcia
                    </p>
                    <a href={WA_KIT} target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
                        Endereço completo e agendamento pelo WhatsApp
                    </a>
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
