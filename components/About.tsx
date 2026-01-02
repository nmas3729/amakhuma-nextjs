'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const { fadeInUp, staggerFadeInUp, scaleIn } = useGSAPAnimation();

  useEffect(() => {
    if (!sectionRef.current) return;

    if (titleRef.current) {
      fadeInUp(titleRef.current, {
        trigger: sectionRef.current,
        start: 'top 80%',
      });
    }

    if (featuresRef.current) {
      const featureCards = featuresRef.current.children;
      staggerFadeInUp(featureCards, {
        trigger: featuresRef.current,
        start: 'top 80%',
        stagger: 0.15,
      });
    }

    if (image1Ref.current && content1Ref.current) {
      scaleIn(image1Ref.current, {
        trigger: image1Ref.current,
        start: 'top 80%',
      });
      fadeInUp(content1Ref.current, {
        trigger: content1Ref.current,
        start: 'top 80%',
        delay: 0.2,
      });
    }

    if (image2Ref.current && content2Ref.current) {
      scaleIn(image2Ref.current, {
        trigger: image2Ref.current,
        start: 'top 80%',
      });
      fadeInUp(content2Ref.current, {
        trigger: content2Ref.current,
        start: 'top 80%',
        delay: 0.2,
      });
    }
  }, [fadeInUp, staggerFadeInUp, scaleIn]);
  const features = [
    {
      title: 'Trusted Expertise',
      description: 'Years of proven experience in the mining sector',
      icon: '/images/trusted_expertise.png',
    },
    {
      title: 'Sustainable Operations',
      description:
        'Committed to environmental responsibility and safety',
      icon: '/images/sustainable_operations.png',
    },
    {
      title: 'Global Partnerships',
      description: 'Building lasting relationships across continents',
      icon: '/images/global_partnerships.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-gradient-to-b from-white to-gray-50/50 py-[60px]"
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-5 text-center text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
          Leading Mining Company
        </h2>
        <div className="mx-auto mb-6 w-1/3 border-b-4 border-[#FFAC4F] py-2.5 shadow-sm" />
        <p className="mb-5 text-center text-lg leading-relaxed text-[#3B3C4D]">
          <strong>Trusted Expertise</strong> | <strong>Sustainable Operations</strong> |{' '}
          <strong>Global Partnerships</strong>
        </p>
        <div className="mx-auto mb-12 max-w-4xl">
          <p className="mb-5 text-lg leading-relaxed text-[#3B3C4D]">
            At Amakhuma, we combine innovation, expertise, and responsibility to
            lead the mining industry forward. We are committed to delivering high-quality products while
            protecting the environment and ensuring the health and safety of our
            people and communities.
          </p>
        </div>
        <div ref={featuresRef} className="mx-auto mb-20 mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-[40px] bg-gradient-to-br from-white to-gray-50/50 p-6 shadow-[0px_15px_70px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_25px_80px_-10px_rgba(251,133,0,0.3)] hover:-translate-y-2 border border-gray-100/50 overflow-hidden"
            >
              {/* Futuristic gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/5 via-transparent to-[#FFAC4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#FB8500] via-[#FFAC4F] to-[#FB8500] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10" />
              
              <div className="relative z-10 mb-4 flex items-center">
                <div className="mr-3 flex-shrink-0 w-12 h-12 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/20 to-[#FFAC4F]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    fill
                    className="object-contain relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(251,133,0,0.5)] transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#3B3C4D] group-hover:text-[#FB8500] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-[#3B3C4D] relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-20 grid max-w-7xl gap-8 md:grid-cols-2">
          <div ref={image1Ref} className="relative min-h-[650px] overflow-hidden rounded-[40px] shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/10 via-transparent to-[#FFAC4F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[1]" />
            <Image
              src="/images/about-image1.jpg"
              alt="Mining operations"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Futuristic corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FB8500]/20 to-transparent rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          </div>
          <div ref={content1Ref} className="flex flex-col justify-center">
            <h2 className="mb-5 text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
              About us
            </h2>
            <div className="mb-6 w-1/3 border-b-4 border-[#FFAC4F] py-2.5" />
            <h3 className="mb-5 text-xl font-bold text-[#3B3C4D]">
              Who We Are
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[#3B3C4D]">
              Amakhuma is a forward-thinking mining company with a strong commitment to <strong>excellence</strong>, <strong>sustainability</strong>, and <strong>innovation</strong>. Backed by decades of experience, we provide safe and efficient mining solutions tailored to the needs of our clients and communities. From <strong>extraction</strong> to <strong>transport and consultancy</strong>, our operations are powered by cutting-edge technology and a team of experts who lead with integrity and purpose.
            </p>
            <h3 className="mb-5 text-xl font-bold text-[#3B3C4D]">
              Our Vision
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[#3B3C4D]">
              To be a leading force in the mining industry by embracing innovation, empowering people, and driving sustainable growth across Africa and beyond.
            </p>
            <h3 className="mb-5 text-xl font-bold text-[#3B3C4D]">
              Our Values
            </h3>
            <p className="text-lg leading-relaxed text-[#3B3C4D]">
              <strong>Integrity</strong> — We operate with honesty and transparency in all we do.<br />
              <strong>Excellence</strong> — We hold ourselves to the highest standards of performance.<br />
              <strong>Safety</strong> — We protect our people, partners, and environment.<br />
              <strong>Innovation</strong> — We invest in technology and ideas that move the industry forward.<br />
              <strong>Sustainability</strong> — We build with the future in mind, today.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div ref={content2Ref} className="flex flex-col justify-center">
            <h2 className="mb-5 text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
              Partnerships & Affiliations
            </h2>
            <div className="mb-6 w-1/3 border-b-4 border-[#FFAC4F] py-2.5 shadow-sm" />
            <h3 className="mb-5 text-xl font-bold text-[#3B3C4D]">
              Strategic Collaboration
            </h3>
            <p className="mb-5 text-lg leading-relaxed text-[#3B3C4D]">
              We proudly hold a <strong>51% ownership stake in Siko Mining Services</strong>, a strategic partnership that strengthens our operational footprint and growth capacity.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-[#3B3C4D]">
              Siko Mining Services is led by CEO <strong>Bonani Siko</strong>, a highly respected mining executive with over <strong>30 years of experience</strong> leading both technical and commercial initiatives in the mining sector.
            </p>
            <h3 className="mb-5 text-xl font-bold text-[#3B3C4D]">
              Together, we focus on:
            </h3>
            <ul className="mb-4 space-y-2 text-lg leading-relaxed text-[#3B3C4D]">
              <li>• Operational excellence</li>
              <li>• Advanced mining technologies</li>
              <li>• Environmental and social responsibility</li>
            </ul>
            <p className="text-lg leading-relaxed text-[#3B3C4D]">
              This collaboration reflects our belief in the power of partnerships to accelerate progress and deliver mutual value.
            </p>
          </div>
          <div ref={image2Ref} className="relative min-h-[500px] overflow-hidden rounded-[40px] shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/10 via-transparent to-[#FFAC4F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[1]" />
            <Image
              src="/images/about-image2.jpg"
              alt="Partnership handshake"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Futuristic corner accent */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#FFAC4F]/20 to-transparent rounded-br-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
