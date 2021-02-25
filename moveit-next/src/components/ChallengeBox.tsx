import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
    const { resetCoutdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCoutdown()
    }
    function handleChallengeFailded() {
        resetChallenge();
        resetCoutdown();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>

            {activeChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} XP </header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailded} >
                                Falhei
                            </button>

                            <button
                                type="button"
                                className={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}>
                                Completei
                            </button>
                        </footer>

                    </div>
                )
                :
                (
                    <div className={styles.ChallengeNotActive} >
                        <strong>Finalize ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="LevelUp" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }
        </div>
    )
}