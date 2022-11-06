import Link from "next/link";
import { useState } from "react";
import CloseMenu from "../assets/icons/close-blue.svg";
import Hamburguer from "../assets/icons/menu-blue.svg";
import Logo from "../assets/icons/logo-blue.png";
import Button from "../components/Button";
import ArrowRight from "../assets/icons/right-arrow-white.svg";
import LineBlue from "../assets/icons/line-blue.svg";
import Image from "next/image";

const NavbarMobile = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav>
      {/* Whitout Click */}
      <div
        className={
          active
            ? "hidden"
            : "fixed w-screen z-10 h-[8vh] flex flex-row gap-2 justify-between items-center bg-white px-5 border-b border-primary_super sm:hidden"
        }
      >
        <div>
          <Link href="/">
            <Image
              alt="Cocheras eléctricas en torreón - Guardianes del garaje"
              className="w-3"
              src={Logo}
            />
          </Link>
        </div>

        <div>
          <Image src={Hamburguer} onClick={showMenu} />
        </div>
      </div>

      {/* Clicked */}
      <div
        className={
          active
            ? "bg-primary_bg z-10 h-3/4 flex flex-col justify-center fixed inset-0"
            : "hidden"
        }
      >
        <Image
          onClick={showMenu}
          className="absolute top-4 right-6 cursor-pointer w-2"
          src={CloseMenu}
        />

        <ul className="flex flex-col items-center justify-center gap-5">
          <li>
            <Link href="/">Inicio</Link>
          </li>

          {/* <li>
            <Link href="/servicios">Servicios</Link>
          </li> */}

          <li>
            <Link href="/catalogo">Catálogo</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center gap-5 pt-4">
          <Image className="w-35" src={LineBlue} />
          <Link href="tel:8711427051">
            <Button
              size="default"
              theme="primary-bg-blue"
              text="Solicitar Cotización"
              iconRight={ArrowRight}
            ></Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
