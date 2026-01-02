'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Hero() {
  const welcomeRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { fadeInUp } = useGSAPAnimation();

  useEffect(() => {
    if (welcomeRef.current) {
      fadeInUp(welcomeRef.current, { delay: 0.2, duration: 0.8 });
    }
    if (titleRef.current) {
      fadeInUp(titleRef.current, { delay: 0.4, duration: 1 });
    }
    if (subtitleRef.current) {
      fadeInUp(subtitleRef.current, { delay: 0.6, duration: 0.9 });
    }
  }, [fadeInUp]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Mining operations background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Enhanced gradient overlay with futuristic feel */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#11121a]/60 via-[#11121a]/50 to-[#11121a]/60" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FB8500]/5 via-transparent to-[#FFAC4F]/5" />

      {/* Futuristic animated particles effect */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FB8500]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFAC4F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-[200px] text-center">
        <p ref={welcomeRef} className="mb-2.5 text-lg font-medium text-white/90 drop-shadow-lg">
          Welcome to
        </p>
        <h1 
          ref={titleRef} 
          className="mb-5 text-[4em] font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl relative"
        >
          <span className="relative inline-block">
            Amakhuma
            {/* Futuristic text glow */}
            <span className="absolute inset-0 text-white blur-xl opacity-50" aria-hidden="true">Amakhuma</span>
          </span>
        </h1>
        <p ref={subtitleRef} className="mx-auto max-w-4xl text-xl leading-relaxed text-white/95 drop-shadow-md md:text-2xl">
          Leading mining solutions across Africa and beyond – powered by
          innovation, integrity, and responsible growth.
        </p>
      </div>

      {/* Futuristic bottom accent */}
      <div className="absolute bottom-0 right-0 z-[1] h-32 w-full rounded-br-[150px] bg-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FB8500]/50 to-transparent z-[2]" />
    </section>
  );
}
