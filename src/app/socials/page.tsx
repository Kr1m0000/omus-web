"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import SocialTiktok from "@/assets/tiktok-icon-free-png.webp";
import SocialInsta from "@/assets/Instagram_icon.png";
import Socialfb from "@/assets/Facebook_Logo_2023.png";

const Socials = () => {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#14532d_0%,#bbf7d0_40%,#ffffff_100%)] py-24 overflow-x-clip"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-green-600 text-transparent bg-clip-text mt-6">
          Nos réseaux sociaux :
        </h1>
      </div>

      <div className="flex min-h-[40vh] flex-col items-center justify-center px-6 sm:px-10 lg:px-20">
        <div className="flex flex-nowrap justify-center gap-20">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@omus.tacos"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            title="TikTok"
          >
            <div className="bg-white rounded-full p-4 w-[clamp(80px,12vw,140px)] h-[clamp(80px,12vw,140px)] flex items-center justify-center shadow-md">
              <Image
                src={SocialTiktok}
                alt="TikTok"
                width={64}
                height={64}
                className="w-[clamp(40px,6vw,80px)] h-auto object-contain"
              />
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/omustacos/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            title="Instagram"
          >
            <div className="bg-white rounded-full p-4 w-[clamp(80px,12vw,140px)] h-[clamp(80px,12vw,140px)] flex items-center justify-center shadow-md">
              <Image
                src={SocialInsta}
                alt="Instagram"
                width={64}
                height={64}
                className="w-[clamp(40px,6vw,80px)] h-auto object-contain"
              />
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61565746771643"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            title="Facebook"
          >
            <div className="bg-white rounded-full p-4 w-[clamp(80px,12vw,140px)] h-[clamp(80px,12vw,140px)] flex items-center justify-center shadow-md">
              <Image
                src={Socialfb}
                alt="Facebook"
                width={64}
                height={64}
                className="w-[clamp(40px,6vw,80px)] h-auto object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
