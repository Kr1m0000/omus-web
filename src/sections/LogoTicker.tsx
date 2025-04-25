"use client";
import flutter from "@/assets/fleurial.png";
import firebase from "@/assets/cvital.png";
import supabase from "@/assets/hamou.png";
import maps from "@/assets/mordj.png";
import aws from "@/assets/pan.png";
import unity from "@/assets/mordj.png";
import rc from "@/assets/Coca-Cola_logo.svg.png";
import mongo from "@/assets/sch.png";
import next from "@/assets/president.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={flutter}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={maps}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={aws}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={firebase}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={next}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={mongo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={rc}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={supabase}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={unity}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={flutter}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={maps}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={aws}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={firebase}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={next}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={mongo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={rc}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={supabase}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={unity}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
