'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { fadeInUp, staggerFadeInUp } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    if (titleRef.current) {
      fadeInUp(titleRef.current, {
        trigger: sectionRef.current,
        start: 'top 80%',
      });
    }

    if (servicesRef.current) {
      const serviceCards = servicesRef.current.children;
      staggerFadeInUp(serviceCards, {
        trigger: servicesRef.current,
        start: 'top 80%',
        stagger: 0.1,
      });
    }
  }, [fadeInUp, staggerFadeInUp]);
  const services = [
    {
      title: 'Mine Planning',
      description:
        'Our experienced team will develop a thorough plan to ensure optimal productivity and safety at your mine.',
      icon: '/images/mine_planning.png',
    },
    {
      title: 'Equipment and Personnel',
      description:
        'We provide top-of-the-line equipment and skilled personnel to keep your mining operations running efficiently.',
      icon: '/images/equipment_personnel.png',
    },
    {
      title: 'Sustainable Practices',
      description:
        'We are committed to reducing our environmental impact and promoting sustainable practices in the mining industry.',
      icon: '/images/sustainable_practices.png',
    },
    {
      title: 'Safety Measures',
      description:
        'Safety comes first at our mine.',
      icon: '/images/safety_measures.png',
    },
    {
      title: 'Maintenance and Support',
      description:
        'We offer comprehensive maintenance and support services to keep your mining operations running smoothly.',
      icon: '/images/maintenance_support.png',
    },
    {
      title: 'Reclamation and Restoration',
      description:
        'Once mining is complete, we work tirelessly to restore the land to its natural state and comply with environmental regulations.',
      icon: '/images/reclamation_restoration.png',
    },
    {
      title: 'Extraction',
      description:
        'Our advanced equipment and experienced team allow us to efficiently extract minerals from even the toughest areas.',
      icon: '/images/extraction.png',
    },
    {
      title: 'Transport and Logistics',
      description:
        'We have a reliable system for transporting materials to customers in a timely and cost-effective manner.',
      icon: '/images/transport_logistics.png',
    },
    {
      title: 'Consultancy Services',
      description:
        'Our experts provide professional consultancy for your mining projects.',
      icon: '/images/consultancy_services.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-gradient-to-b from-gray-50/50 to-white py-[60px]"
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-5 text-center text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
          Our Services
        </h2>
        <div className="mx-auto mb-12 w-1/6 border-b-4 border-[#FFAC4F] py-2.5 shadow-sm" />
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-[#3B3C4D]">
          From mine planning to reclamation, Amakhuma has all your mining needs
          covered.
        </p>
        <div ref={servicesRef} className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-[40px] bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-[0px_15px_70px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_30px_90px_-15px_rgba(251,133,0,0.4)] hover:-translate-y-3 hover:scale-[1.02] border border-gray-100/50 overflow-hidden"
            >
              {/* Futuristic gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/8 via-transparent to-[#FFAC4F]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border glow effect */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#FB8500] via-[#FFAC4F] to-[#FB8500] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl -z-10 scale-110" />
              
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FB8500]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 mb-4 flex items-center">
                <div className="mr-3 flex-shrink-0 w-12 h-12 relative transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {/* Icon glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/30 to-[#FFAC4F]/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    className="object-contain relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_25px_rgba(251,133,0,0.6)] transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3B3C4D] group-hover:text-[#FB8500] transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(251,133,0,0.3)]">
                  {service.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-[#3B3C4D] relative z-10 group-hover:text-[#3B3C4D]/90 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FB8500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
