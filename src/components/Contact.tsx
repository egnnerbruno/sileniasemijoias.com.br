import { MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

const WA_LINK = 'https://wa.me/5527996088725?text=Ol%C3%A1+Sil%2C+vi+o+site+e+quero+agendar+para+retirar+meu+kit+consignado%21';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.bgEffect}></div>
            <div className={styles.bgGlow}></div>

            <div className={styles.container}>
                <span className="section-label">Contato</span>

                <h2 className={styles.title}>
                    Pronta para
                    <span className={styles.titleAccent}> começar?</span>
                </h2>

                <p className={styles.subtitle}>
                    Mande uma mensagem agora, agende sua visita e retire seu primeiro kit consignado.
                    <br />
                    <strong>Você não tem nada a perder — só a ganhar.</strong>
                </p>

                <div className={styles.ctaWrap}>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                        <MessageCircle size={22} />
                        Agendar retirada pelo WhatsApp
                    </a>
                    <p className={styles.footnote}>Resposta rápida · Sem compromisso · Risco zero</p>
                </div>

                {/* Decoração sutil */}
                <div className={styles.deco} aria-hidden="true">✦</div>
            </div>
        </section>
    );
};

export default Contact;
