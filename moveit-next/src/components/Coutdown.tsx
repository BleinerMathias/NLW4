import { useState, useEffect, useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/Countdown.module.css';

let coutdownTimeOut: NodeJS.Timeout;

export function Countdown() {

    const { startNewChallenge } = useContext(challengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    const [hasFinished, setHasFinished] = useState(false);


    function startCoutdown() {
        setIsActive(true);

    }
    // oque executar, quando vai executar
    useEffect(() => {
        if (isActive && time > 0) {
            coutdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    function resetCoutdown() {
        clearTimeout(coutdownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    return (
        <div>
            <div className={styles.coutdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ?
                (
                    <button
                        disabled
                        className={styles.coutdownButton}>
                        Ciclo encerrado
                    </button>

                ) :

                (
                    <>
                        { isActive ?

                            (
                                <button type="button"
                                    className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}
                                    onClick={resetCoutdown}>
                                    Abandonar ciclo
                                </button>

                            ) :

                            (
                                <button type="button"
                                    className={styles.coutdownButton}
                                    onClick={startCoutdown}>
                                    Iniciar ciclo
                                </button>
                            )
                        }
                    </>
                )
            }

        </div>
    )
}