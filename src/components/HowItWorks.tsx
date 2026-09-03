import { MessageCircle, Calendar, Package, Users, RefreshCw } from 'lucide-react';
import styles from './HowItWorks.module.css';
import { useMobileSlider } from '../hooks/useMobileSlider';

const WA_LINK = 'https://wa.me/5527996088725?text=Ol%C3%A1%21+Quero+pegar+meu+kit+consignado+Styllus.';

const steps = [
    {
        number: '01',
        icon: <Calendar size={28} />,
        title: 'Agende',
        description: 'Entre em contato pelo WhatsApp e agende um horário para visitar nosso Centro de Relacionamento em Vitória/ES.',
        color: '#E8D8B8',
    },
    {
        number: '02',
        icon: <Package size={28} />,
        title: 'Retire seu Kit',
        description: 'Sem investimento inicial — retire um kit de semijoias lindas gratuitamente. Você só paga o que vender.',
        color: '#9CA3AF',
    },
    {
        number: '03',
        icon: <Users size={28} />,
        title: 'Venda',
        description: 'Ofereça as peças para suas clientes, familiares e amigas. As semijoias se vendem pela beleza e qualidade.',
        color: '#E8D8B8',
    },
    {
        number: '04',
        icon: <RefreshCw size={28} />,
        title: 'Renove',
        description: 'Após 35 dias, retorne ao Centro de Relacionamento, faça seu acerto financeiro e renove seu kit.',
        color: '#9CA3AF',
    },
];

const HowItWorks = () => {
    const { trackRef, activeIndex, count, isMobile, scrollTo } = useMobileSlider({ interval: 3500 });

    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.bgAccent}></div>

            <div className={styles.container}>
                <div className={`reveal-up ${styles.header}`}>
                    <span className="section-label">Passo a Passo</span>
                    <h2 className={styles.title}>
                        Como funciona a
                        <br />
                        <span className={styles.titleAccent}>Revenda consignada?</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Simples, sem burocracia e sem risco. Você começa a empreender hoje mesmo.
                    </p>
                </div>

                <div className={isMobile ? styles.sliderTrack : styles.stepsGrid} ref={trackRef}>
                    {steps.map((step, index) => (
                        <div key={step.number} className={`${isMobile ? styles.sliderCard : `reveal-up delay-${(index + 1) * 100} ${styles.stepCard}`}`}>
                            <div className={styles.stepNumber} style={{ color: step.color }}>
                                {step.number}
                            </div>

                            <div className={styles.stepIconWrapper} style={{ '--step-color': step.color } as React.CSSProperties}>
                                <div className={styles.stepIcon} style={{ color: step.color }}>
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepText}>{step.description}</p>

                            {!isMobile && index < steps.length - 1 && (
                                <div className={styles.connector}>→</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Dots de paginação — só mobile */}
                {isMobile && count > 1 && (
                    <div className={styles.dots}>
                        {Array.from({ length: count }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                                onClick={() => scrollTo(i)}
                                aria-label={`Ir para passo ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Highlight box */}
                <div className={styles.highlightBox}>
                    <div className={styles.highlightInner}>
                        <div className={styles.highlightIcon}>
                            <Package size={24} />
                        </div>
                        <div>
                            <h3 className={styles.highlightTitle}>Comece sem gastar nada</h3>
                            <p className={styles.highlightText}>
                                Pegue o kit gratuitamente, devolva as peças que não vender.
                                Responsabilidade financeira zero — você sempre sai ganhando.
                            </p>
                        </div>
                    </div>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.highlightCta}>
                        <MessageCircle size={18} />
                        Pegar meu Kit Consignado
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
