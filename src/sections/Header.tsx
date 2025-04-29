import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xl z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Retrouvez-nous à FREHA tizi-ouzou pour une expérience de qualité
        </p>
        <div className="inline-flex gap-1 items-center">
          <Link href='/maps'>
            <p>Position GPS</p>
          </Link>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href='/'>
                <Image src={Logo} alt="Saas Logo" className="rounded-3xl" height={50} width={50} />
              </Link>
              <Link href='/'>
                <h1 className="text-lg hidden md:block font-semibold">O'Mus</h1>
              </Link>
            </div>

            {/* Navigation is always visible on all screens */}
            <nav className="flex gap-6 text-black items-center">
              <Link href='/about'>
                <h1>À propos</h1>
              </Link>
              {/* You can uncomment these if needed */}
              {/* <h1>Clients</h1>
              <h1>Updates</h1>
              <h1>Aide</h1> */}
              <Link href="/menu">
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                  Menu
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
