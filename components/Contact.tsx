'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { fadeInUp, scaleIn } = useGSAPAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    if (!sectionRef.current || !formRef.current) return;

    scaleIn(formRef.current, {
      trigger: sectionRef.current,
      start: 'top 80%',
    });
  }, [scaleIn]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-[60px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Mining operations background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div ref={formRef} className="rounded-[40px] rounded-tl-[150px] bg-white/95 backdrop-blur-sm shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="grid items-start gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-5 text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
                  Mining Project
                </h2>
                <div className="mb-6 w-1/4 border-b-4 border-[#FB8500] py-2.5" />
                <p className="text-lg leading-relaxed text-[#3B3C4D]">
                  Are you looking for reliable and efficient solutions for your mining
                  project?
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium uppercase text-[#3B3C4D]"
                    >
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] touch-manipulation"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium uppercase text-[#3B3C4D]"
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] touch-manipulation"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium uppercase text-[#3B3C4D]"
                    >
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] touch-manipulation"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium uppercase text-[#3B3C4D]"
                    >
                      YOUR MESSAGE (OPTIONAL)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[120px] text-[#3B3C4D] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] touch-manipulation resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full min-h-[48px] rounded-[40px] border-none bg-gradient-to-r from-[#FB8500] to-[#FFAC4F] px-6 py-3 text-base font-normal text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FB8500]/30 hover:-translate-y-0.5 active:translate-y-0 touch-manipulation"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
