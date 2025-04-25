import Image from "next/image";
import Logo from "@/assets/logo.jpg";
import SocialTiktok from "@/assets/tiktok-icon-free-png.webp";
import SocialInsta from "@/assets/Instagram_icon.png";
import Socialfb from "@/assets/Facebook_Logo_2023.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="Saas Logo" className="relative rounded-3xl" height={50} width={50} />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/about">
            <h1>À propos de nous</h1>
          </Link>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.tiktok.com/@omus.tacos"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="hover:scale-110 transition-transform"
          >
            <Image src={SocialTiktok} alt="TikTok" width={30} height={30} className="object-contain" />
          </a>

          <a
            href="https://www.instagram.com/omustacos/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <Image src={SocialInsta} alt="Instagram" width={30} height={30} className="object-contain" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61565746771643"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <Image src={Socialfb} alt="Facebook" width={30} height={30} className="object-contain" />
          </a>
        </div>

        <p className="mt-6">
          &copy; 2025 O&apos;mus, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
