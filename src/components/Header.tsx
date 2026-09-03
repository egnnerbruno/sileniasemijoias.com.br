import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Coleção', href: '#products' },
    { name: 'Revenda', href: '#reseller' },
];

const WA_LINK = 'https://wa.me/c/5527999143932';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        if (isMenuOpen) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
                <div className={styles.container}>
                    <a href="#hero" className={`${styles.logo} ${isMenuOpen ? styles.logoHidden : ''}`}>
                        <img src="/assets/logo_sil_styllus.svg" alt="Styllus Semijoias" className={styles.logoImg} />
                    </a>

                    <nav className={styles.navDesktop}>
                        <div className={styles.navLinksWrapper}>
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className={styles.navLink}>
                                    {link.name}
                                    <span className={styles.linkUnderline}></span>
                                </a>
                            ))}
                        </div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                            <MessageCircle size={17} />
                            <span>Catálogo WhatsApp</span>
                        </a>
                    </nav>

                    <button
                        className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.btnActive : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <div className={styles.hamburger}>
                            <span></span><span></span><span></span>
                        </div>
                    </button>
                </div>
            </header>

            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            <nav id="mobile-navigation" className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!isMenuOpen}>
                <div className={styles.mobileMenuHeader}>
                    <div className={styles.logo}>
                        <img src="/assets/logo_sil_styllus.svg" alt="Styllus Semijoias" className={styles.logoImg} />
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <div className={styles.mobileNavLinks}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ transitionDelay: `${index * 0.08}s` }}
                        >
                            <span className={styles.mobileNavLinkNum}>0{index + 1}</span>
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileCta}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Ver Catálogo Completo
                    </a>
                </div>

                <div className={styles.mobileMenuFooter}>
                    <p>© 2026 Styllus Semijoias</p>
                    <p>Beleza que inspira. Oportunidade que transforma.</p>
                </div>
            </nav>
        </>
    );
};

export default Header;
