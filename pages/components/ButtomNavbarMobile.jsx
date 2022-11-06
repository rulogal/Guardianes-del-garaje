import MapWhite from "../assets/icons/map-white.svg";
import EyeWhite from "../assets/icons/eye-white.svg";
import PhoneWhite from "../assets/icons/phone-white.svg";
import Image from "next/image";
import Link from "next/link";

const ButtomNavbarMobile = () => {
  return (
    <div className="sm:hidden flex flex-row justify-evenly items-center py-[.7rem] rounded-sm fixed bottom-0 left-0 right-0 bg-primary_super z-10">
      <Link href="/catalogo">
        <div className="flex flex-col items-center gap-y-[.10rem]">
          <Image src={EyeWhite} alt="" />
          <span className="text-white text-[.875rem]">Catálogo</span>
        </div>
      </Link>

      <Link href="tel:8711427051">
        <div className="flex flex-col items-center gap-y-[.10rem]">
          <Image src={PhoneWhite} alt="" />
          <span className="text-white text-[.875rem]">Llamar</span>
        </div>
      </Link>

      <Link href="/#footer">
        <div className="flex flex-col items-center gap-y-[.10rem]">
          <Image src={MapWhite} alt="" />
          <span className="text-white text-[.875rem]">Dirección</span>
        </div>
      </Link>
    </div>
  );
};

export default ButtomNavbarMobile;
