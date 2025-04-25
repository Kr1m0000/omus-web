import React from 'react';

const About = () => {
  return (
    <div className={`6xl:px-20`}>
      <div className="flex pb-20 flex-col px-3 overflow-hidden sm:px-12 6xl:px-20">
        <div className="mt-10 space-y-8">
          <p className="text-4xl font-bold">À propos de nous</p>

          <div id="who" className="border-l-4 pl-4 border-green-600">
            <h2 className="text-2xl font-semibold">QUI SOMMES-NOUS ?</h2>
            <p className="mt-4 text-[13px] sm:text-[14px] w-full lg:text-lg">
              Bienvenue chez <strong>O'Mus</strong>, un restaurant chaleureux niché au cœur de FREHA, Tizi-Ouzou. Fondé par une famille passionnée de gastronomie kabyle et méditerranéenne, notre établissement est né d’un amour profond pour la cuisine authentique, faite maison et partagée avec générosité. Chaque plat que nous servons est une ode aux traditions locales, revisitées avec une touche moderne et raffinée.
            </p>
          </div>

          <div id="philosophy" className="border-l-4 pl-4 border-green-600">
            <h2 className="text-2xl font-semibold">NOTRE PHILOSOPHIE</h2>
            <p className="mt-4 text-[13px] sm:text-[14px] w-full lg:text-lg">
              Chez O'Mus, nous croyons que manger ne devrait pas seulement nourrir le corps, mais aussi l’âme. C’est pourquoi nous privilégions les produits locaux, frais et de saison. Nos recettes sont préparées avec soin, dans le respect du goût et des valeurs humaines. Notre cuisine est un lieu de rencontres, de partage et de découverte — un espace où les générations se retrouvent autour d’un bon plat.
            </p>
          </div>

          <div id="values" className="border-l-4 pl-4 border-green-600">
            <h2 className="text-2xl font-semibold">NOS VALEURS</h2>
            <p className="mt-4 text-[13px] sm:text-[14px] w-full lg:text-lg">
              L’accueil chaleureux, le respect des clients, et l’excellence culinaire sont les piliers de notre engagement. Nous mettons un point d'honneur à offrir un service de qualité, dans une ambiance conviviale et authentique. Que vous veniez en famille, entre amis ou pour une pause gourmande en solo, nous faisons tout pour que vous vous sentiez chez vous.
            </p>
          </div>

          <div id="vision" className="border-l-4 pl-4 border-green-600">
            <h2 className="text-2xl font-semibold">NOTRE VISION</h2>
            <p className="mt-4 text-[13px] sm:text-[14px] w-full lg:text-lg">
              Nous rêvons d’un restaurant qui ne soit pas seulement un lieu de restauration, mais un repère culturel, un endroit où les saveurs racontent une histoire. Notre ambition est de faire rayonner la cuisine kabyle au-delà des frontières, en mêlant tradition et innovation. À travers chaque plat, nous voulons transmettre un message d’amour, de mémoire et de passion.
            </p>
          </div>

          <div id="invitation" className="border-l-4 pl-4 border-green-600">
            <h2 className="text-2xl font-semibold">UNE INVITATION</h2>
            <p className="mt-4 text-[13px] sm:text-[14px] w-full lg:text-lg">
              Que vous soyez de passage ou habitué, nous vous invitons à vivre une expérience culinaire authentique, dans un cadre qui sent bon la terre, le feu et le cœur. <strong>O'Mus</strong> n’est pas seulement un restaurant, c’est une table ouverte sur le monde, un hommage vivant à notre patrimoine culinaire. Bienvenue chez vous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
