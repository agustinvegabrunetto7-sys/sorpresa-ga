"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Usamos el componente Button de shadcn/ui

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft.days <= 0 && newTimeLeft.hours <= 0 && newTimeLeft.minutes <= 0 && newTimeLeft.seconds <= 0) {
        setIsFinished(true);
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Button
          className="relative overflow-hidden bg-white text-black font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 animate-pulse-white-button"
          onClick={() => window.open("https://instagram.com/euga.2025", "_blank")}
        >
          <span className="relative z-10 text-lg md:text-xl">¡Descubre más!</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 animate-button-shine"></span>
        </Button>
      </div>
    );
  }

  return (
    <div className="text-white text-center">
      <div className="flex justify-center space-x-4 md:space-x-8 font-cinzel-decorative">
        {/* Días */}
        <div className="relative flex flex-col items-center group p-4 rounded-lg transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 ease-in-out"></div>
          <div className="relative z-10 text-center">
            <span className="block text-6xl md:text-8xl lg:text-9xl">{formatTime(timeLeft.days)}</span>
            <span className="text-lg md:text-xl font-lora mt-2">DÍAS</span>
          </div>
        </div>
        {/* Horas */}
        <div className="relative flex flex-col items-center group p-4 rounded-lg transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 ease-in-out"></div>
          <div className="relative z-10 text-center">
            <span className="block text-6xl md:text-8xl lg:text-9xl">{formatTime(timeLeft.hours)}</span>
            <span className="text-lg md:text-xl font-lora mt-2">HORAS</span>
          </div>
        </div>
        {/* Minutos */}
        <div className="relative flex flex-col items-center group p-4 rounded-lg transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 ease-in-out"></div>
          <div className="relative z-10 text-center">
            <span className="block text-6xl md:text-8xl lg:text-9xl">{formatTime(timeLeft.minutes)}</span>
            <span className="text-lg md:text-xl font-lora mt-2">MINUTOS</span>
          </div>
        </div>
        {/* Segundos */}
        <div className="relative flex flex-col items-center group p-4 rounded-lg transition-all duration-300 ease-in-out">
          <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 ease-in-out"></div>
          <div className="relative z-10 text-center">
            <span className="block text-6xl md:text-8xl lg:text-9xl">{formatTime(timeLeft.seconds)}</span>
            <span className="text-lg md:text-xl font-lora mt-2">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;