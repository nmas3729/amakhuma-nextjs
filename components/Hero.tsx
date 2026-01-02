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
        <p 
          ref={welcomeRef} 
          className="mb-4 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#FFAC4F] drop-shadow-lg"
        >
          Welcome to
        </p>
        <h1 
          ref={titleRef} 
          className="mb-6 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] relative inline-block"
        >
          <span className="relative inline-block">
            <span className="block bg-gradient-to-r from-white via-[#FFAC4F] to-white bg-clip-text text-transparent drop-shadow-2xl">
              Amakhuma
            </span>
            {/* Futuristic orange glow effect behind text */}
            <span 
              className="absolute -inset-4 bg-gradient-to-r from-[#FB8500]/30 via-[#FFAC4F]/40 to-[#FB8500]/30 blur-3xl -z-10 rounded-full" 
              aria-hidden="true"
            />
          </span>
        </h1>
        <p 
          ref={subtitleRef} 
          className="mx-auto max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-lg"
        >
          <span className="block mb-3 font-semibold text-white">
            Leading mining solutions across Africa and beyond
          </span>
          <span className="text-white/90 font-light">
            Powered by{' '}
            <span className="text-[#FFAC4F] font-semibold">innovation</span>,{' '}
            <span className="text-[#FFAC4F] font-semibold">integrity</span>, and{' '}
            <span className="text-[#FFAC4F] font-semibold">responsible growth</span>.
          </span>
        </p>
      </div>

      {/* Futuristic bottom accent */}
      <div className="absolute bottom-0 right-0 z-[1] h-32 w-full rounded-br-[150px] bg-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FB8500]/50 to-transparent z-[2]" />
    </section>
  );
}
