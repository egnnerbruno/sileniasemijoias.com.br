import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import { useMobileSlider } from '../hooks/useMobileSlider';

const testimonials = [
    {
        id: 1,
        name: 'Ana Paula S.',
        city: 'Vitória, ES',
        time: 'Consultora há 2 anos',
        text: 'Tiro em média R$ 1.800 de renda extra todo mês só mostrando o mostruário no meu trabalho. A Sil me apoiou desde o começo. É transformador!',
        stars: 5,
        initial: 'A',
        color: '#E8D8B8',
    },
    {
        id: 2,
        name: 'Carla M.',
        city: 'Cariacica, ES',
        time: 'Consultora há 1 ano',
        text: 'A facilidade de não precisar investir dinheiro no início foi o que me fez começar. As peças vendem sozinhas! Hoje ajudo a pagar as contas da casa.',
        stars: 5,
        initial: 'C',
        color: '#9CA3AF',
    },
    {
        id: 3,
        name: 'Fernanda R.',
        city: 'Serra, ES',
        time: 'Consultora há 8 meses',
        text: 'Comecei pegando poucas peças de consignado. Sem risco, sem pressão. Ontem fechei mais de R$ 900 de comissão numa só venda pra amigas do prédio!',
        stars: 5,
        initial: 'F',
        color: '#E8D8B8',
    },
];

const Testimonials = () => {
    const { trackRef, activeIndex, count, isMobile, scrollTo } = useMobileSlider({ interval: 4000 });

    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.bgAccent}></div>
            <div className={styles.container}>
                <div className={`reveal-up ${styles.header}`}>
                    <span className="section-label">Depoimentos</span>
                    <h2 className={styles.title}>
                        Histórias que
                        <span className={styles.titleAccent}> inspiram</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Mulheres reais que transformaram suas vidas revendendo semijoias Styllus.
                    </p>
                </div>

                <div className={isMobile ? styles.sliderTrack : styles.grid} ref={trackRef}>
                    {testimonials.map(({ id, name, city, time, text, stars, initial, color }, index) => (
                        <div key={id} className={isMobile ? styles.sliderCard : `reveal-up delay-${(index + 1) * 100} ${styles.card}`}>
                            <Quote size={32} className={styles.quoteIcon} />

                            <div className={styles.stars}>
                                {[...Array(stars)].map((_, i) => (
                                    <Star key={i} size={14} fill="#E8D8B8" color="#E8D8B8" />
                                ))}
                            </div>

                            <p className={styles.text}>"{text}"</p>

                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}>
                                    {initial}
                                </div>
                                <div>
                                    <div className={styles.authorName}>{name}</div>
                                    <div className={styles.authorInfo}>{city} • {time}</div>
                                </div>
                            </div>
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
                                aria-label={`Ver depoimento ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
