import { Briefcase } from 'lucide-react';
import styles from './ResellerBanner.module.css';

interface ResellerBannerProps {
    onOpenModal: () => void;
}

const ResellerBanner = ({ onOpenModal }: ResellerBannerProps) => {
    return (
        <section id="reseller" className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textWrap}>
                        <h2 className={styles.title}>
                            Quer uma renda extra com <span className={styles.accent}>Semijoias de Luxo</span>?
                        </h2>
                        <p className={styles.subtitle}>
                            Torne-se uma consultora Styllus e lucre até 50% sem investimento inicial.
                        </p>
                    </div>
                    <button onClick={onOpenModal} className={styles.cta}>
                        <Briefcase size={18} />
                        Seja uma Revendedora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResellerBanner;