"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/pizza.png";
import cylinderImage from "@/assets/tacos.png";
import noodleImage from "@/assets/tacos.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#14532d_0%,#bbf7d0_40%,#ffffff_100%)] overflow-x-clip"

    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">O'Mus tacos</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-green-600 text-transparent bg-clip-text mt-6">

            Savourez Chaque Bouchée.
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Nous vous accueillons avec passion pour vous faire découvrir une cuisine généreuse, préparée avec des produits de qualité. Que ce soit en famille, entre amis ou entre collègues, chaque repas est une invitation au partage et à la gourmandise.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href='/login'>
                <button className="btn btn-primary">Contact</button>
              </Link>
              <Link href='/socials'>
              <button className="btn btn-text gap-1">
                <span>Nos réseaux</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
              </Link>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
