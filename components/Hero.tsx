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

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#11121a]/50 via-[#11121a]/40 to-[#11121a]/50" />

      <div className="container relative z-10 mx-auto px-4 pb-[200px] text-center">
        <p ref={welcomeRef} className="mb-2.5 text-lg font-medium text-white/90 drop-shadow-lg">
          Welcome to
        </p>
        <h1 ref={titleRef} className="mb-5 text-[4em] font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          Amakhuma
        </h1>
        <p ref={subtitleRef} className="mx-auto max-w-4xl text-xl leading-relaxed text-white/95 drop-shadow-md md:text-2xl">
          Leading mining solutions across Africa and beyond – powered by
          innovation, integrity, and responsible growth.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 z-[1] h-32 w-full rounded-br-[150px] bg-transparent" />
    </section>
  );
}
