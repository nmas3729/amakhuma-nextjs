'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin (safe to call multiple times)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  trigger?: string | Element;
  start?: string;
  end?: string;
}

/**
 * Hook for GSAP animations that respects prefers-reduced-motion
 * and gracefully degrades on low-end devices
 * Enhanced with futuristic animation effects
 */
export function useGSAPAnimation() {
  const prefersReducedMotion = useRef(false);
  const isLowEndDevice = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    // Check for low-end device (basic heuristic)
    const hardwareConcurrency = (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency || 4;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
    isLowEndDevice.current = hardwareConcurrency < 4 || deviceMemory < 4;

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const shouldAnimate = () => {
    return !prefersReducedMotion.current && !isLowEndDevice.current;
  };

  const fadeInUp = (
    element: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: options.ease || 'power3.out',
        scrollTrigger: options.trigger
          ? {
              trigger: options.trigger,
              start: options.start || 'top 80%',
              end: options.end,
              toggleActions: 'play none none none',
            }
          : undefined,
      }
    );
  };

  const fadeIn = (
    element: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      gsap.set(element, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out',
        scrollTrigger: options.trigger
          ? {
              trigger: options.trigger,
              start: options.start || 'top 80%',
              end: options.end,
              toggleActions: 'play none none none',
            }
          : undefined,
      }
    );
  };

  const staggerFadeInUp = (
    elements: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotationX: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        stagger: options.stagger || 0.15,
        ease: options.ease || 'power2.out',
        scrollTrigger: options.trigger
          ? {
              trigger: options.trigger,
              start: options.start || 'top 80%',
              end: options.end,
              toggleActions: 'play none none none',
            }
          : undefined,
      }
    );
  };

  const scaleIn = (
    element: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      gsap.set(element, { opacity: 1, scale: 1 });
      return;
    }

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.9, rotationY: -10 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: options.duration || 0.8,
        delay: options.delay || 0,
        ease: options.ease || 'power2.out',
        scrollTrigger: options.trigger
          ? {
              trigger: options.trigger,
              start: options.start || 'top 80%',
              end: options.end,
              toggleActions: 'play none none none',
            }
          : undefined,
      }
    );
  };

  // Futuristic glow animation
  const glowPulse = (
    element: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      return;
    }

    gsap.to(element, {
      boxShadow: '0 0 20px rgba(251, 133, 0, 0.5), 0 0 40px rgba(251, 133, 0, 0.3)',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: options.delay || 0,
    });
  };

  // Futuristic morph animation
  const morphIn = (
    element: gsap.TweenTarget,
    options: AnimationOptions = {}
  ) => {
    if (!shouldAnimate()) {
      gsap.set(element, { opacity: 1, scale: 1, filter: 'blur(0px)' });
      return;
    }

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: options.duration || 1.2,
        delay: options.delay || 0,
        ease: 'power3.out',
        scrollTrigger: options.trigger
          ? {
              trigger: options.trigger,
              start: options.start || 'top 80%',
              end: options.end,
              toggleActions: 'play none none none',
            }
          : undefined,
      }
    );
  };

  // Cleanup ScrollTrigger instances on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return {
    fadeInUp,
    fadeIn,
    staggerFadeInUp,
    scaleIn,
    glowPulse,
    morphIn,
    shouldAnimate,
  };
}

