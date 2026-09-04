import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Instagram from './components/Instagram';
import ResellerBanner from './components/ResellerBanner';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import styles from './App.module.css';

function App() {
    useScrollReveal();
    const [isResellerModalOpen, setIsResellerModalOpen] = useState(false);

    useEffect(() => {
        const checkHash = () => {
            if (window.location.hash === '#reseller') {
                document.getElementById('reseller')?.scrollIntoView({ behavior: 'smooth' });
            }
        };
        checkHash();
        window.addEventListener('hashchange', checkHash);
        return () => window.removeEventListener('hashchange', checkHash);
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Products />
                <Instagram />
                <ResellerBanner onOpenModal={() => setIsResellerModalOpen(true)} />
            </main>
            <Footer />

            <Modal
                isOpen={isResellerModalOpen}
                onClose={() => setIsResellerModalOpen(false)}
                title="Renda extra com semijoias"
                maxWidth={560}
                footer={
                    <a
                        href="https://wa.me/5527996088725?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20ser%20uma%20revendedora%20Styllus."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalCta}
                    >
                        Quero ser revendedora
                    </a>
                }
            >
                <div className={styles.resellerContent}>
                    <div className={styles.intro}>
                        <span className="section-label">Modelo consignado</span>
                        <h2>Lucre até 50% sem investir nada.</h2>
                        <p>Retire seu kit de semijoias gratuitamente e comece a vender com suporte próximo.</p>
                    </div>

                    <ol className={styles.steps}>
                        <li>
                            <span className={styles.stepNumber}>01</span>
                            <span><strong>Agende pelo WhatsApp</strong> sua visita ao Centro de Relacionamento, em Vitória, bairro Santa Lúcia. O endereço completo vai no agendamento.</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>02</span>
                            <span><strong>Retire seu kit</strong> sem custo. Você só paga o que vender.</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>03</span>
                            <span><strong>Venda e lucre</strong> oferecendo às suas amigas e clientes.</span>
                        </li>
                    </ol>

                    <p className={styles.trustNote}>Sem taxas de adesão · Garantia de 2 anos</p>
                </div>
            </Modal>
        </>
    );
}

export default App;
