import { useContext } from "react";
import { MainContext } from "../../context/main";

import CocheraPortada from "../assets/imgs/cochera-portada.jpg";
import Cochera24 from "../assets/imgs/cochera (24).png";
import Cochera1 from "../assets/imgs/cochera (1).jpg";
import Cochera3 from "../assets/imgs/cochera (3).jpg";
import Cochera5 from "../assets/imgs/cochera (5).jpg";
import Cochera7 from "../assets/imgs/cochera (7).jpg";
import Cochera9 from "../assets/imgs/cochera (9).jpg";
import Cochera10 from "../assets/imgs/cochera (10).jpg";
import Cochera11 from "../assets/imgs/cochera (11).jpg";
import Cochera12 from "../assets/imgs/cochera (12).jpg";
import Cochera13 from "../assets/imgs/cochera (13).jpg";
import Cochera15 from "../assets/imgs/cochera (15).jpg";
import Cochera16 from "../assets/imgs/cochera (16).jpg";
import Cochera17 from "../assets/imgs/cochera (17).jpg";
import Cochera18 from "../assets/imgs/cochera (18).jpg";
import Cochera19 from "../assets/imgs/cochera (19).jpg";
import Cochera20 from "../assets/imgs/cochera (20).jpg";
import Cochera21 from "../assets/imgs/cochera (21).jpg";
import Cochera22 from "../assets/imgs/cochera (22).jpg";
import Cochera23 from "../assets/imgs/cochera (23).jpeg";

import Image from "next/image";
import CarBlue from "../assets/icons/car-blue.png";
import Button from "./Button";
import ArrowRightWhite from "../assets/icons/right-arrow-white.svg";
import ArrowLeftWhite from "../assets/icons/left-arrow-white.svg";
import ArrowRightBlue from "../assets/icons/right-arrow-blue.svg";
import ArrowLeftBlue from "../assets/icons/left-arrow-blue.svg";
import { useState } from "react";

const DiseñosCatalogo = () => {
  const context = useContext(MainContext);
  const [numerador, setNumerador] = useState(0);

  const nextDesign = () => {
    if (numerador === 19) {
      setNumerador(numerador - 19);
    } else {
      setNumerador(numerador + 1);
    }
  };

  const previousDesign = () => {
    if (numerador === 0) {
      setNumerador(numerador + 19);
    } else {
      setNumerador(numerador - 1);
    }
  };

  const addDesign = () => {
    const auxItems = context?.cart?.items;

    if (auxItems) {
      if (auxItems?.id === catalogo[numerador]?.id) {
        return false;
      }

      if (auxItems?.length === 2) {
        return false;
      }

      const newItem = catalogo[numerador];
      const newItems = [...auxItems];

      newItems.push(newItem);

      const newCart = {
        ...cart,
        items: newItems,
      };

      context?.setCart(newCart);
    } else {
      context?.setCart({
        items: [catalogo[numerador]],
      });
    }
  };

  // const removeDesign = () => {};

  const catalogo = [
    {
      id: 0,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: CocheraPortada,
    },
    {
      id: 1,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera1,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera3,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera5,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera7,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera9,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera10,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera11,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera12,
    },

    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera13,
    },

    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera15,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera16,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera17,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera18,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera19,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera20,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera21,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera22,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera23,
    },
    {
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera24,
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row items-center gap-y-3 gap-x-0 xl:gap-x-16">
      <div className="relative xl:w-5/6">
        {/* Image */}
        <Image
          className="h-[37vh] xl:h-[100vh] object-center object-cover"
          src={catalogo[numerador].img}
          alt=""
        />

        {/* Buttons */}
        <div className="my-2 flex flex-row justify-center xl:justify-start xl:gap-y-2 gap-x-2 absolute w-screen xl:w-0 xl:left-1/3 bottom-0">
          <Button
            iconLeft={ArrowLeftWhite}
            size="hiper-small"
            theme="primary-bg"
            onClick={previousDesign}
          />
          <Button
            iconRight={ArrowRightWhite}
            theme="primary-bg"
            size="hiper-small"
            onClick={nextDesign}
          />
        </div>
      </div>

      <div className="px-5 xl:px-10 flex flex-col xl:flex-col gap-y-2 xl:gap-y-6 pt-6 pb-8">
        {/* Time */}
        <div className="flex flex-col gap-y-2">
          <h3>Tiempo promedio de entrega después de anticipo:</h3>
          <p>{catalogo[numerador].tiempo}</p>
        </div>

        {/* Costs */}
        <div className="flex flex-col gap-y-2">
          <h3>Costo aproximado por medidas estandar:</h3>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${catalogo[numerador].costo3} |
            </span>
            <div className="flex flex-row gap-x-1 w-15">
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${catalogo[numerador].costo2} |
            </span>
            <div className="flex flex-row gap-x-1 w-15">
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${catalogo[numerador].costo1} |
            </span>
            <div className="w-15">
              <Image className="w-4" src={CarBlue} alt="" />
            </div>
          </div>
        </div>

        {/* <Button
          iconRight={ArrowRightWhite}
          size="small"
          text="Agregar A Cotización"
          onClick={addDesign}
        /> */}
        {/* <Button
          iconRight={ArrowRightWhite}
          size="small"
          text="Eliminar"
          onClick={}
        /> */}
      </div>
    </div>
  );
};

export default DiseñosCatalogo;
