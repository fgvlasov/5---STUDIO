import {useEffect, useState} from 'react';

const CountDownTimer = () => {
    const [countdownDate, setCountdownDate] = useState(
        new Date("6/25/2023").getTime()
    );

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const setNewTime = () => {
            if (countdownDate) {
                const currentTime = new Date().getTime();

                const distanceToDate = countdownDate - currentTime;

                let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distanceToDate / (1000 * 60 * 60)) % 24);
                let minutes = Math.floor((distanceToDate / 1000 / 60) % 60);
                let seconds = Math.floor((distanceToDate / 1000) % 60);

                const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                days = `${days}`;
                if (numbersToAddZeroTo.includes(hours)) {
                    hours = `0${hours}`;
                } else if (numbersToAddZeroTo.includes(minutes)) {
                    minutes = `0${minutes}`;
                } else if (numbersToAddZeroTo.includes(seconds)) {
                    seconds = `0${seconds}`;
                }

                setState({days: days, hours: hours, minutes, seconds});
            }
        };

        const id = setInterval(() => setNewTime(), 1000);
        return () => clearInterval(id);
    }, [countdownDate]);

    return (
        <div className="countdown-wrapper">
            <span className="axil-count days">
              <span className="count-inner">
                <span className="time-count">{state.days || "0"}</span>
                <p className="time-text">Days</p>
              </span>
            </span>
            <span className="axil-count hour">
              <span className="count-inner">
                <span className="time-count">{state.hours || "00"}</span>
                <p className="time-text">Hours</p>
              </span>
            </span>
            <span className="axil-count minutes">
              <span className="count-inner">
                <span className="time-count">{state.minutes || "00"}</span>
                <p className="time-text">Minutes</p>
              </span>
            </span>
            <span className="axil-count second">
              <span className="count-inner">
                <span className="time-count">{state.seconds || "00"}</span>
                <p className="time-text">Seconds</p>
              </span>
            </span>
        </div>
    );
};

export default CountDownTimer;
