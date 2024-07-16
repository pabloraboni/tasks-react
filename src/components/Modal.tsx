import { useState, useEffect } from "react";
import styles from "./Modal.module.scss";

type Props = {
    children: React.ReactNode,
    title: string,
    width?: string,
    showActions?: Boolean,
    onConfirm?: () => void,
    onCancel?: () => void,
}

const Modal = ({ children, title, width, showActions, onConfirm, onCancel }: Props) => {
    const [exiting, setExiting] = useState<Boolean>(false);
    const [entering, setEntering] = useState<Boolean>(true);

    useEffect(() => {
        const enterTimer = setTimeout(() => {
            setEntering(true);
        }, 500);
        return () => {
            clearTimeout(enterTimer);
        };
    });

    const executeCloseModal = () => {
        setExiting(true);
    };

    const confirm = (e: React.MouseEvent): void => {
        executeCloseModal();
        setTimeout(() => {
            onConfirm && onConfirm();
        }, 500);
    };

    const cancel = (e: React.MouseEvent): void => {
        executeCloseModal();
        setTimeout(() => {
            onCancel && onCancel();
        }, 200);
        
    };


    return (
        <>
            <div className={styles["pr-modal"]}>
                <div style={{ maxWidth: width ? width : "" }} className={`${styles["pr-modal__content"]} ${entering ? styles["--enter"] : ""} ${exiting ? styles["--exit"] : ""}`}>
                    <div className={styles["pr-modal__head"]}>
                        <p>{title}</p>
                        <button className={styles["pr-modal__close"]} onClick={cancel}></button>
                    </div>
                    <p>{children}</p>
                    {showActions && <div className={styles["pr-modal__foot"]}>
                        <button onClick={cancel} className="pr-button --outline --small">Cancelar</button>
                        <button onClick={confirm} className="pr-button --small">Confirmar</button>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Modal;
