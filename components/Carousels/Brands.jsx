/**
 * @description Seccion base con estilos predeterminados de carrusel.
 */
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Bachoco from "assets/icons/logo-bachoco.svg";
import Barcel from "assets/icons/logo-barcel.svg";
import Chilchota from "assets/icons/logo-chilchota.svg";
import Inbursa from "assets/icons/logo-inbursa.svg";
import Lala from "assets/icons/logo-lala.svg";
import Pemex from "assets/icons/logo-pemex.svg";

export default function CarouselBrands() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-x-4 px-5 xl:px-40 py-6 xl:py-15">
      <p>
        Orgullosos de haber ayudado a estas grandes empresas de Torreon Coah.
        con sus puertas automáticas industriales:
      </p>

      <Marquee
        pauseOnHover={true}
        speed={30}
        gradientWidth={0}
        direction="right"
      >
        <div className="flex flex-row gap-x-6 mt-4 xl:mt-0">
          <Image width={150} height="auto" src={Bachoco} alt="" />
          <Image width={100} height="auto" src={Barcel} alt="" />
          <Image width={100} height="auto" src={Chilchota} alt="" />
          <Image width={150} height="auto" src={Inbursa} alt="" />
          <Image width={60} height="auto" src={Lala} alt="" />
          <Image width={150} height="auto" src={Pemex} alt="" />
        </div>
      </Marquee>
    </div>
  );
}
