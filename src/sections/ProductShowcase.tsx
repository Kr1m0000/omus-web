"use client";
import productImage from "@/assets/bg.png";
import pyramidImage from "@/assets/pizza.png";
import tubeImage from "@/assets/pizza.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#14532d_0%,#bbf7d0_40%,#ffffff_100%)] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Notre atelier</div>
          </div>
          <h2 className="section-title mt-5 bg-gradient-to-b from-black to-green-600 text-transparent bg-clip-text">
          Une place où le goût nous réunit.
          </h2>

          <p className="section-description mt-5">
          Bienvenue chez O'Mus FREHA — là où chaque plat est une promesse de saveur.
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10 rounded-3xl" />

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
