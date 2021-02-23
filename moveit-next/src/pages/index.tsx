import Head from 'next/head';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Coutdown';
import { ExperieceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/page/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperieceBar />

      <section>

        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>

        <div>

        </div>

      </section>

    </div>
  );
}
