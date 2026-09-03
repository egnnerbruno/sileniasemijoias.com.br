import { ShieldCheck, TrendingUp, Award, Clock, Gift, Users } from 'lucide-react';
import styles from './Benefits.module.css';
import { useMobileSlider } from '../hooks/useMobileSlider';

const benefits = [
    {
        icon: <ShieldCheck size={30} />,
        title: 'Material Pronto pra Uso',
        description: 'Fotos e vídeos de alta qualidade liberados para postar no Instagram e atrair clientes no mesmo dia.',
        color: '#E8D8B8',
    },
    {
        icon: <TrendingUp size={30} />,
        title: 'Fácil de Trocar Peças',
        description: 'Uma peça encalhou? Traga no nosso Centro de Relacionamento e troque o mostruário sem dor de cabeça.',
        color: '#9CA3AF',
    },
    {
        icon: <Award size={30} />,
        title: 'Certificado de Garantia',
        description: 'As peças acompanham certificado com garantia de fábrica de 2 anos, gerando mais vendas pela confiança.',
        color: '#E8D8B8',
    },
    {
        icon: <Clock size={30} />,
        title: 'Flexibilidade Total',
        description: 'Faça suas vendas de casa, no trabalho ou pela internet. Aqui quem dita o seu horário de trabalho é você.',
        color: '#9CA3AF',
    },
    {
        icon: <Gift size={30} />,
        title: 'Campanhas e Prêmios',
        description: 'Alcançou metas de venda? Você recebe prêmios bônus e viagens, além da sua comissão já garantida.',
        color: '#E8D8B8',
    },
    {
        icon: <Users size={30} />,
        title: 'Apoio Próximo da Sil',
        description: 'Atendimento direto comigo! Treinamento, dicas de vendas e suporte pessoal em Vitória.',
        color: '#9CA3AF',
    },
];

const Benefits = () => {
    const { trackRef, activeIndex, count, isMobile, scrollTo } = useMobileSlider({ interval: 3200 });

    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.bgEffect}></div>

            <div className={styles.container}>
                <div className={`reveal-up ${styles.header}`}>
                    <span className="section-label">Vantagens</span>
                    <h2 className={styles.title}>
                        Por que revender
                        <span className={styles.titleAccent}> Styllus?</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Mais de 15 mil mulheres em todo o Brasil já descobriram as vantagens de revender semijoias Styllus.
                    </p>
                </div>

                <div className={isMobile ? styles.sliderTrack : styles.grid} ref={trackRef}>
                    {benefits.map(({ icon, title, description, color }, index) => (
                        <div key={title} className={isMobile ? styles.sliderCard : `reveal-scale delay-${(index % 3 + 1) * 100} ${styles.card}`}>
                            <div
                                className={styles.cardIconWrapper}
                                style={{ '--card-color': color } as React.CSSProperties}
                            >
                                <div className={styles.cardIcon} style={{ color }}>
                                    {icon}
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardText}>{description}</p>
                            <div className={styles.cardLine} style={{ background: color }}></div>
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
                                aria-label={`Ir para benefício ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Benefits;
