"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Un repas délicieux, l'ambiance était parfaite et le service impeccable. Je reviendrai sûrement !",
    imageSrc: avatar1.src,
    name: "Yasmine",
    username: "@yasmine_123",
  },
  {
    text: "Chaque plat était un vrai régal. Le chef connaît son métier !",
    imageSrc: avatar2.src,
    name: "Khaled",
    username: "@khaled_badi",
  },
  {
    text: "La meilleure expérience culinaire que j'ai eue depuis longtemps. À recommander !",
    imageSrc: avatar3.src,
    name: "Sofia",
    username: "@sofia_chef",
  },
  {
    text: "Un service rapide, une cuisine savoureuse. On s'est régalés du début à la fin.",
    imageSrc: avatar4.src,
    name: "Amine",
    username: "@amine_dz",
  },
  {
    text: "Chaque bouchée était parfaite. Une expérience gustative inoubliable.",
    imageSrc: avatar5.src,
    name: "Zahra",
    username: "@zahra_souad",
  },
  {
    text: "L’ambiance chaleureuse et les plats exquis font de cet endroit un incontournable.",
    imageSrc: avatar6.src,
    name: "Nabil",
    username: "@nabil_chef",
  },
  {
    text: "Un vrai voyage de saveurs ! Un restaurant à ne pas manquer.",
    imageSrc: avatar7.src,
    name: "Lina",
    username: "@lina_foodie",
  },
  {
    text: "Une cuisine raffinée, un service irréprochable. On y reviendra avec plaisir !",
    imageSrc: avatar8.src,
    name: "Rachid",
    username: "@rachid_taste",
  },
  {
    text: "Des plats délicieux et une atmosphère agréable. Un moment parfait.",
    imageSrc: avatar9.src,
    name: "Samira",
    username: "@samira_dz",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5 bg-gradient-to-b from-black to-green-600 text-transparent bg-clip-text">
  Nos retours clients
</h2>

          <p className="section-description mt-5">
            Des design intuitufs aux fonctions backend avancées notre équipe fait de son mieux pour vous satisfaire
        
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
