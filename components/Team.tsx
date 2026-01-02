'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);
  const { fadeInUp, staggerFadeInUp, scaleIn } = useGSAPAnimation();
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>({});

  const toggleBio = (index: number) => {
    setExpandedBios((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    if (titleRef.current) {
      fadeInUp(titleRef.current, {
        trigger: sectionRef.current,
        start: 'top 80%',
      });
    }

    if (membersRef.current) {
      const memberCards = membersRef.current.children;
      staggerFadeInUp(memberCards, {
        trigger: membersRef.current,
        start: 'top 80%',
        stagger: 0.2,
      });
    }
  }, [fadeInUp, staggerFadeInUp]);

  const teamMembers = [
    {
      name: 'Bonani Siko',
      title: 'Executive Director',
      image: '/images/team_bonani_siko.png',
      shortBio: 'Bonani Siko is a seasoned mining executive and the Executive Director of Amakhuma Investment Holdings. With over 30 years of experience in the mining industry, Bonani brings a wealth of technical knowledge, operational expertise, and strategic leadership to the company\'s investment and development initiatives across the mining and energy sectors.',
      fullBio: 'Bonani Siko is a qualified Mining Engineer, holding a National Diploma, a National Higher Diploma in Coal Mining, as well as a B-Tech in Mining Engineering from the University of Johannesburg (UJ). Bonani has also completed an Executive Development Programme at the University of Cape Town (UCT). He holds a Mine Manager\'s Certificate of Competency, also referred to as a Mine Manager\'s Ticket of Competency, issued by South Africa\'s Department of Mineral Resources (DMR). Bonani has held several senior leadership roles, including General Manager of Mining Operations at Wescoal Holdings (Pty) Ltd, where he was appointed under Section 4.1 of the Mine Health and Safety Act. He also served as CEO of Wescoal Mining and held directorships at Wescoal Mining (Pty) Ltd and Aztolinx (Pty) Ltd. Earlier in his career, he served at Eskom\'s Primary Energy Division as Senior Manager of Coal Operations and later as Acting Divisional Executive, managing the full coal value chain and coal supply agreements with mining houses. In addition to his role at Amakhuma, Bonani is the CEO and Executive Director of Siko Mining Services (SMS), a company dedicated to delivering innovative, efficient, and sustainable mining solutions. He is an active member of the South African Colliery Manager\'s Association (SACMA) and the Institute of Directors in Southern Africa (IoDSA). Bonani\'s leadership is grounded in a commitment to safety, sustainability, transformation, and long-term value creation.',
    },
    {
      name: 'Mzoxolo Beqezi',
      title: 'Technology Consultant',
      image: '/images/team_mzoxolo_beqezi.png',
      shortBio: 'Mzoxolo Beqezi brings over 20 years of experience in Information Technology, including 12 years dedicated to Mining IT. He is the founder of NMAS INNOVATIONS Pty Ltd, a certified AWS and Azure specialist, a skilled Linux Administrator, and holds additional credentials in ITIL, cybersecurity, and cloud architecture. His expertise covers systems implementation, infrastructure design, network management, and IT governance across complex industrial and mining environments.',
      fullBio: 'Mzoxolo Beqezi brings over 20 years of experience in Information Technology, including 12 years dedicated to Mining IT. He is the founder of NMAS INNOVATIONS Pty Ltd, a certified AWS and Azure specialist, a skilled Linux Administrator, and holds additional credentials in ITIL, cybersecurity, and cloud architecture. His expertise covers systems implementation, infrastructure design, network management, and IT governance across complex industrial and mining environments. At Amakhuma, Mzoxolo plays a pivotal role in planning, deploying, and maintaining secure, scalable technology solutions that enhance efficiency, safety, and data-driven decision-making. He also contributes to strategic IT planning — aligning technology initiatives with business goals to support digital transformation and sustainable growth. Mzoxolo\'s broad experience, spanning both hands-on technical operations and strategic consulting, enables him to bridge the gap between IT systems and business performance. Passionate about continuous learning and innovation, he is committed to leveraging modern cloud, automation, and security technologies to optimize Amakhuma\'s IT landscape and strengthen its competitive edge in the mining sector.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="team"
      className="bg-gradient-to-b from-white to-gray-50/50 py-[60px]"
    >
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-5 text-center text-[2.5em] font-bold text-[#3B3C4D] md:text-3xl lg:text-4xl">
          Meet Our Leadership Team
        </h2>
        <div className="mx-auto mb-12 w-1/6 border-b-4 border-[#FFAC4F] py-2.5 shadow-sm" />
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-[#3B3C4D]">
          Get to know the hardworking individuals behind Amakhuma.
        </p>
        <div ref={membersRef} className="mx-auto max-w-5xl space-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="grid items-start gap-8 md:grid-cols-2">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-[40px] shadow-xl group-hover:shadow-[0_30px_90px_-15px_rgba(251,133,0,0.4)] transition-all duration-500">
                    {/* Futuristic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FB8500]/10 via-transparent to-[#FFAC4F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]" />
                    
                    {/* Animated border glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FB8500] via-[#FFAC4F] to-[#FB8500] rounded-[40px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl -z-10" />
                    
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.title}`}
                      width={412}
                      height={426}
                      className="h-auto w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 relative z-0"
                    />
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FB8500]/30 to-transparent rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                  </div>
                  <h3 className="mt-4 mb-2 text-2xl font-bold text-[#3B3C4D] group-hover:text-[#FB8500] transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(251,133,0,0.3)]">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-sm font-semibold uppercase text-[#FB8500] group-hover:text-[#FFAC4F] transition-colors duration-300">
                    {member.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[#3B3C4D]">
                    {expandedBios[index] ? member.fullBio : member.shortBio}
                  </p>
                  <button
                    onClick={() => toggleBio(index)}
                    className="mt-4 min-h-[44px] min-w-[44px] border-none bg-transparent p-0 text-lg text-[#FB8500] no-underline transition-all duration-200 hover:underline touch-manipulation active:text-[#FFAC4F]"
                  >
                    {expandedBios[index] ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
