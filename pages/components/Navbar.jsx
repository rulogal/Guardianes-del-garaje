import Link from "next/link";
import Logo from "../assets/icons/logo-blue.png";
import NavbarMobile from "../components/NavbarMobile";
import Image from "next/image";
import Button from "./Button";
import LeftArrow from "../assets/icons/right-arrow-white.svg";

const Navbar = () => {
  return (
    <>
      {/* Navbar Desktop */}
      <nav className="hidden z-10 fixed w-screen flex-row justify-between items-center h-[8vh] bg-white border border-primary_super mt-[.25rem] px-8 sm:flex">
        {/* Left side */}
        <div>
          <Link href="/">
            <Image
              src={Logo}
              className="w-4"
              alt="Cocheras eléctricas en torreón - Guardianes del garaje"
              layout="responsive"
            />
          </Link>
        </div>

        {/* Right side */}
        <div className="flex flex-row items-center justify-center gap-4">
          <ul className="flex flex-row justify-between items-center gap-4">
            <li>
              <Link href="/"> Inicio </Link>
            </li>
            {/* <li>
              <Link href="/servicios"> Servicios </Link>
            </li> */}
          </ul>
          <Link href="/catalogo">
            <Button
              size="small"
              theme="primary-bg"
              text="Cátalogo de cocheras"
              iconRight={LeftArrow}
            />
          </Link>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <NavbarMobile />
    </>
  );
};

export default Navbar;
