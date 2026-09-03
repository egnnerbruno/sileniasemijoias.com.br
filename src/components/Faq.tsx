import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Faq.module.css';

const faqs = [
    {
        question: 'Preciso ter nome limpo para ser consultora?',
        answer: 'Para pegar o kit consignado na modalidade tradicional precisamos que o CPF esteja regular e realizamos uma rápida análise de crédito. Caso tenha restrições, chame no WhatsApp, pois podemos analisar outras modalidades de parceria!'
    },
    {
        question: 'Como funciona se alguma peça não vender?',
        answer: 'Fique tranquila, o risco é zero! O que você não vender, você devolve sem nenhum custo na hora de fazer o acerto mensal conosco no Centro de Relacionamento.'
    },
    {
        question: 'Onde verifico e retiro meu kit consignado?',
        answer: 'Nosso Centro de Relacionamento (CR) fica em Vitória, no bairro Santa Lúcia. Estamos no Ed. Master Place. Ao chamar no WhatsApp nós te passamos todos os detalhes do agendamento!'
    },
    {
        question: 'Com que frequência preciso renovar ou acertar as peças?',
        answer: 'O ciclo de acerto e renovação do mostruário é feito geralmente a cada 30 dias. Nesse momento, você acerta as peças vendidas, retira o seu lucro e escolhe novidades para o próximo ciclo.'
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-label">Dúvidas Frequentes</span>
                    <h2 className={styles.title}>
                        Suas perguntas,
                        <br /><span className={styles.titleAccent}>nossas respostas</span>
                    </h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.questionBtn}
                                    onClick={() => toggleOpen(index)}
                                >
                                    <span className={styles.questionText}>{faq.question}</span>
                                    <ChevronDown
                                        size={20}
                                        className={styles.icon}
                                    />
                                </button>
                                <div className={styles.answerWrapper}>
                                    <p className={styles.answerText}>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
