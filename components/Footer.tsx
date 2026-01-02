'use client';

import { useEffect, useRef } from 'react';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { fadeIn } = useGSAPAnimation();

  useEffect(() => {
    if (footerRef.current) {
      fadeIn(footerRef.current, {
        trigger: footerRef.current,
        start: 'top 90%',
      });
    }
  }, [fadeIn]);

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-[#3B3C4D] to-[#2a2b38] py-[30px]">
      <div className="container mx-auto px-4">
        <div className="space-y-2 text-center">
          <p className="text-sm text-white/40">
            © 2026 Amakhuma. All Rights Reserved.
          </p>
          <p className="text-sm text-white/40">
            Copyright © All Rights Reserved, Amakhuma investment holding (Pty)
            Ltd.
          </p>
          <p className="text-sm text-white/40">
            Powered by{' '}
            <a
              href="https://webcraft.nmas.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-all duration-200 hover:text-white hover:drop-shadow-sm min-h-[44px] min-w-[44px] inline-flex items-center touch-manipulation"
            >
              NMAS WebCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
