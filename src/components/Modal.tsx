import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    maxWidth?: number;
};

const Modal = ({ isOpen, onClose, title, children, footer, maxWidth = 560 }: ModalProps) => {
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const previouslyFocusedRef = useRef<HTMLElement | null>(null);
    const titleId = useId();

    useEffect(() => {
        if (!isOpen) return;

        previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeBtnRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
            previouslyFocusedRef.current?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.layer}>
            <button className={styles.backdrop} type="button" onClick={onClose} aria-label="Fechar janela" />
            <div className={styles.positioner}>
                <section
                    className={styles.dialog}
                    style={{ maxWidth: `min(${maxWidth}px, calc(100vw - 2rem))` }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                >
                    <header className={styles.header}>
                        <h2 id={titleId} className={styles.title}>{title}</h2>
                        <button
                            ref={closeBtnRef}
                            type="button"
                            className={styles.closeBtn}
                            onClick={onClose}
                            aria-label="Fechar"
                        >
                            <X size={19} strokeWidth={1.8} aria-hidden="true" />
                        </button>
                    </header>
                    <div className={styles.body}>{children}</div>
                    {footer ? <footer className={styles.footer}>{footer}</footer> : null}
                </section>
            </div>
        </div>,
        document.body,
    );
};

export default Modal;
