import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
      <h1>Projek Web Personal Branding</h1>
      <h1>Deadline Projek Mandiri:</h1>
      {timeLeft.days !== undefined || timeLeft.hours !== undefined || timeLeft.minutes !== undefined || timeLeft.seconds !== undefined ? (
        <div className="timer">
          <span>{formatTime(timeLeft.days)} Hari</span>
          <span>{formatTime(timeLeft.hours)} Jam</span>
          <span>{formatTime(timeLeft.minutes)} Menit</span>
          <span>{formatTime(timeLeft.seconds)} Detik</span>
        </div>
      ) : (
        <span>Waktu habis!</span>
      )}
    </div>
  );
};

export default CountdownTimer;