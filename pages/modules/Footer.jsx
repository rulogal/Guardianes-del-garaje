/**
 * @description Footer global.
 */

import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/icons/logo-blue.png";

export default function Footer() {
  return (
    <footer
      className="bg-primary_bg pt-10 pb-14 xl:mb-0 xl:py-10 px-5 xl:px-20 flex flex-col gap-y-2 xl:gap-x-2 xl:flex-row xl:items-center"
      id="footer"
    >
      <div className="xl:w-1/4">
        <Link href="tel:+528711427051">
          <p>
            <strong>Teléfono: </strong>
          </p>
          <span className="underline xl:text-3">871-142-7051</span>
        </Link>
      </div>

      <div className="">
        <p>
          <strong>Horarios: </strong>Lunes a Sabado de 9:00 - 19:00.
        </p>
      </div>

      <div className="">
        <p>
          <strong>Direccion: </strong>
          27010 Rio sena #1354 Colonia Magdalenas 27010 Torreon, Coah.
        </p>
      </div>

      <div className="flex flex-row items-center gap-x-2">
        <Image
          className="h-5"
          src={Logo}
          alt="Cocheras Eléctricas En Torreón Logo"
        />
        <p>
          Cocheras Eléctricas En Torreón – Guardianes del Garaje ® | Desde 1987.
        </p>
      </div>
    </footer>
  );
}
