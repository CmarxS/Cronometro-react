import './Watch.css';
import { useEffect, useState } from 'react';



function Watch() {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);


    useEffect(() => {
        if (isRunning){
            const interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                if (seconds === 59) {
                    setSeconds(0);
                    setMinutes((minutes) => minutes + 1);
                }
                if (minutes === 59) {
                    setMinutes(0);
                    setHours((hours) => hours + 1);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning, seconds, minutes, hours]);

const zerar = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
}
const formatNumber = (number: number) => {
    if (number < 10) {
        return `0${number}`;
    }
    else {
        return number;
    }
}
const gracinha = () => {
    if(hours >= 1){
        return <h2>parabéns, você já estudou {hours > 1 ? `${hours} horas` : `${hours} hora`}</h2>;
    }
    return null;
}
return (
    <div className="watch">
        <h1>Cronometro</h1>
        {gracinha()}
        <div className="watch-face">
            <span>{formatNumber(hours)}</span>:
            <span>{formatNumber(minutes)}</span>:
            <span>{formatNumber(seconds)}</span>
        </div>
        <br />
        <div className="watch-controls">
            <button onClick={() => setIsRunning(true)}>Iniciar</button>
            <button onClick={() => setIsRunning(false)}>Pausar</button>
            <button onClick={zerar}>Zerar</button>
        </div>
    </div>
);

}

export default Watch;