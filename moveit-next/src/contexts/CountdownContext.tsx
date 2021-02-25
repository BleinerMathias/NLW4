import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { challengesContext } from './ChallengesContexts';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCoutdown: () => void;
    resetCoutdown: () => void;
}

interface CountdownContextProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let coutdownTimeOut: NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownContextProps) {

    const { startNewChallenge } = useContext(challengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

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
        setHasFinished(false);
        setTime(0.1 * 60);
    }


    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCoutdown,
                resetCoutdown,

            }}>
            {children}

        </CountdownContext.Provider>
    )
}
