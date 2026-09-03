import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WA_LINK = 'https://wa.me/5527996088725?text=Ol%C3%A1+Sil%2C+vi+o+site+e+quero+agendar+para+retirar+meu+kit+consignado%21';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000);
        const tooltipTimer = setTimeout(() => {
            if (!dismissed) setShowTooltip(true);
        }, 4000);
        const hideTooltip = setTimeout(() => setShowTooltip(false), 9000);
        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
            clearTimeout(hideTooltip);
        };
    }, [dismissed]);

    return (
        <div className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`}>
            {/* Tooltip */}
            {showTooltip && !dismissed && (
                <div className={styles.tooltip}>
                    <button
                        className={styles.tooltipClose}
                        onClick={() => { setShowTooltip(false); setDismissed(true); }}
                        aria-label="Fechar"
                    >
                        <X size={12} />
                    </button>
                    <p className={styles.tooltipText}>
                        Pronta para o lucro? <strong>Agende seu kit!</strong>
                    </p>
                </div>
            )}

            {/* Button */}
            <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label="Falar pelo WhatsApp"
            >
                <div className={styles.pulse}></div>
                <div className={styles.pulse2}></div>
                <MessageCircle size={26} />
            </a>
        </div>
    );
};

export default WhatsAppButton;
