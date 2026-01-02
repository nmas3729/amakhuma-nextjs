'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { scaleIn } = useGSAPAnimation();
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
    // TODO: Implement form submission to backend API
    alert('Thank you for your message! We will get back to you soon.');
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
          <div ref={formRef} className="relative rounded-[40px] rounded-tl-[150px] bg-white/95 backdrop-blur-md shadow-2xl p-8 md:p-12 border border-white/20 overflow-hidden group">
            {/* Futuristic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/5 via-transparent to-[#FFAC4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FB8500] via-[#FFAC4F] to-[#FB8500] rounded-[40px] rounded-tl-[150px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10" />
            
            <div className="relative z-10">
              <div className="grid items-start gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-5 text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl group-hover:text-[#FB8500] transition-colors duration-300">
                    Mining Project
                  </h2>
                  <div className="mb-6 w-1/4 border-b-4 border-[#FB8500] py-2.5 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FB8500] to-[#FFAC4F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
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
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] focus:shadow-[0_0_20px_rgba(251,133,0,0.2)] touch-manipulation"
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
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] focus:shadow-[0_0_20px_rgba(251,133,0,0.2)] touch-manipulation"
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
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[44px] text-[#3B3C4D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] focus:shadow-[0_0_20px_rgba(251,133,0,0.2)] touch-manipulation"
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
                      className="w-full rounded-[40px] border border-[#3B3C4D]/20 bg-white px-4 py-3 min-h-[120px] text-[#3B3C4D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FB8500] focus:border-[#FB8500] focus:shadow-[0_0_20px_rgba(251,133,0,0.2)] touch-manipulation resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="relative w-full min-h-[48px] rounded-[40px] border-none bg-gradient-to-r from-[#FB8500] to-[#FFAC4F] px-6 py-3 text-base font-normal text-white transition-all duration-300 hover:shadow-[0_10px_40px_rgba(251,133,0,0.4)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 touch-manipulation overflow-hidden group"
                  >
                    <span className="relative z-10">Submit</span>
                    {/* Futuristic shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
