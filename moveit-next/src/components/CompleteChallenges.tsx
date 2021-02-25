import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompleteChallenges.module.css';


export function CompleteChallenges() {
    const { challengeComplete } = useContext(challengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeComplete}</span>
        </div>
    )
}