"use client";
import React from 'react';
import Image from 'next/image';
import SocialTiktok from "@/assets/tiktok-icon-free-png.webp";
import SocialInsta from "@/assets/Facebook_Logo_2023.png";
import Socialfb from "@/assets/Instagram_icon.png";

const Socials = () => {
  return (
    <div className="flex min-h-[59vh] flex-col items-center justify-center min-h-screen bg-white px-6 sm:px-10 lg:px-20">
      

      <div className="flex flex-wrap justify-center gap-8">
        <a
          href="https://www.tiktok.com/@omus.tacos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
          title="X (Twitter)"
        >
          <Image
            src={SocialTiktok}
            alt="X (Twitter)"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        <a
          href="https://www.instagram.com/omustacos/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
          title="Instagram"
        >
          <Image
            src={SocialInsta}
            alt="Instagram"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61565746771643"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
          title="LinkedIn"
        >
          <Image
            src={Socialfb}
            alt="LinkedIn"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
