import { Calendar, Package, TrendingUp, RefreshCw } from 'lucide-react';
import styles from './HowItWorksCompact.module.css';

const steps = [
    { icon: <Calendar size={24} />, title: 'Agende', desc: 'Visite nosso Centro em Vitória/ES' },
    { icon: <Package size={24} />, title: 'Retire o Kit', desc: 'Sem custo inicial, só paga o que vender' },
    { icon: <TrendingUp size={24} />, title: 'Venda', desc: 'Lucre até 50% com peças de alta saída' },
    { icon: <RefreshCw size={24} />, title: 'Renove', desc: 'A cada 35 dias, pegue novas peças' },
];

const HowItWorksCompact = () => {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Como Funciona</h2>
                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.icon}>{step.icon}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksCompact;