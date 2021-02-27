import Head from 'next/head';
import { GetServerSideProps } from 'next'


import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperieceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/page/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContexts';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeComplete: number;
}

export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeComplete={props.challengeComplete}>

      <div className={styles.container}>

        <Head>
          <title>Inicio | Move.it</title>
        </Head>
        <ExperieceBar />

        <CountdownProvider>
          <section>

            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>

          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengeComplete } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeComplete: Number(challengeComplete)
    }
  }
}
