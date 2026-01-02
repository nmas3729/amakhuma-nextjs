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
 */
export function useGSAPAnimation() {
  const prefersReducedMotion = useRef(false);
  const isLowEndDevice = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    // Check for low-end device (basic heuristic)
    const hardwareConcurrency = (navigator as any).hardwareConcurrency || 4;
    const deviceMemory = (navigator as any).deviceMemory || 4;
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
      },
      {
        opacity: 1,
        y: 0,
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
      },
      {
        opacity: 1,
        y: 0,
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
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
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
    shouldAnimate,
  };
}

