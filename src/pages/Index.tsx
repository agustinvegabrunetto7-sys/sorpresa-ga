"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  // Lunes 1ro de Diciembre a las 7:45 de la mañana (Córdoba, Argentina)
  // Córdoba (ART) es UTC-3. Así que 7:45 AM ART es 10:45 AM UTC.
  const targetDate = new Date('2025-12-01T10:45:00Z'); 

  return (
    <div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Efecto de iluminación de fondo */}
      <div className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] filter blur-[100px] opacity-70 animate-background-light"></div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-white text-3xl md:text-5xl font-milker mb-8 animate-fade-in">
          PREPÁRATE PARA EL EVENTO
        </h2>
        <CountdownTimer targetDate={targetDate} />
        <p className="text-white text-xl md:text-3xl mt-8 font-sans-text animate-celeste-wave">
          ¡La cuenta regresiva ha comenzado!
        </p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;