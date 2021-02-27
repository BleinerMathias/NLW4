import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/LevelUpModal.module.css';


export function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(challengesContext);

    function closeModal() {

    }

    return (

        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Voce alcançou um novo level!</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar" />
                </button>
            </div>
        </div>
    )
}