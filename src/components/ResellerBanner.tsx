import { Briefcase, MessageCircle, ShieldCheck, TrendingUp, Wallet } from 'lucide-react';
import styles from './ResellerBanner.module.css';

const WA_RESELLER = 'https://wa.me/5527996088725?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20ser%20uma%20revendedora%20Styllus.';

interface ResellerBannerProps {
    onOpenModal: () => void;
}

const perks = [
    { icon: <Wallet size={15} />, label: 'Sem investimento' },
    { icon: <TrendingUp size={15} />, label: 'Lucro de até 50%' },
    { icon: <ShieldCheck size={15} />, label: 'Garantia de 2 anos' },
];

const steps = [
    {
        number: '01',
        title: 'Agende pelo WhatsApp',
        text: 'Marque sua visita ao Centro de Relacionamento, em Vitória, no bairro Santa Lúcia. O endereço completo vai junto com o agendamento.',
    },
    {
        number: '02',
        title: 'Retire seu kit',
        text: 'Sem custo e sem taxa de adesão. Você leva as peças e só paga o que vender.',
    },
    {
        number: '03',
        title: 'Venda e lucre',
        text: 'Ofereça às suas amigas e clientes. A cada 30 dias você acerta, retira o lucro e renova o mostruário.',
    },
];

const ResellerBanner = ({ onOpenModal }: ResellerBannerProps) => {
    return (
        <section id="reseller" className={styles.banner}>
            <div className={styles.container}>
                <div className={`reveal-up ${styles.content}`}>
                    <div className={styles.textWrap}>
                        <span className="section-label">Revenda</span>
                        <h2 className={styles.title}>
                            Quer uma renda extra com <span className={styles.accent}>Semijoias de Luxo</span>?
                        </h2>
                        <p className={styles.subtitle}>
                            Torne-se uma consultora Styllus e lucre até 50% sem investimento inicial.
                        </p>

                        <ul className={styles.perks}>
                            {perks.map((perk) => (
                                <li key={perk.label} className={styles.perk}>
                                    {perk.icon}
                                    {perk.label}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.actions}>
                            <button type="button" onClick={onOpenModal} className={styles.cta}>
                                <Briefcase size={18} />
                                Seja uma Revendedora
                            </button>
                            <a href={WA_RESELLER} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                                <MessageCircle size={18} />
                                Chamar no WhatsApp
                            </a>
                        </div>
                    </div>

                    <ol className={styles.steps} aria-label="Como funciona a revenda consignada">
                        {steps.map((step) => (
                            <li key={step.number} className={styles.step}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                <div>
                                    <strong className={styles.stepTitle}>{step.title}</strong>
                                    <p className={styles.stepText}>{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default ResellerBanner;
