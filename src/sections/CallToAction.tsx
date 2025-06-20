"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/pizza.png";
import springImage from "@/assets/pizza.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#14532d_0%,#bbf7d0_40%,#ffffff_100%)] from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title mt-5 bg-gradient-to-b from-black to-green-600 text-transparent bg-clip-text">
            N'attendez plus</h2>
            <p className="section-description mt-5">
  Venez savourer nos délicieux plats préparés avec soin et passion. Notre équipe vous attend pour vous offrir une expérience culinaire inoubliable dans un cadre agréable et chaleureux.
</p>

          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[381px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link href='/login'>
            <button className="btn btn-primary">Contact</button>
          </Link>
          <Link href='/socials'>
          <button className="btn btn-text gap-1">
            <span>Nos réseaux</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
