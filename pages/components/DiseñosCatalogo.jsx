import { useContext } from "react";
import { MainContext } from "../../context/main";

import CocheraPortada from "../assets/imgs/cochera-portada.jpg";
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
import Cochera24 from "../assets/imgs/cochera (24).png";
import Cochera25 from "../assets/imgs/cochera (25).jpeg";
import Cochera26 from "../assets/imgs/cochera (26).jpeg";
import Cochera27 from "../assets/imgs/cochera (27).jpeg";
import Cochera28 from "../assets/imgs/cochera (28).jpeg";
import Cochera29 from "../assets/imgs/cochera (29).jpeg";
import Cochera30 from "../assets/imgs/cochera (30).jpeg";
import Cochera31 from "../assets/imgs/cochera (31).jpeg";
import Cochera32 from "../assets/imgs/cochera (32).jpeg";
import Cochera33 from "../assets/imgs/cochera (24).jpeg";

import Image from "next/image";
import CarBlue from "../assets/icons/car-blue.png";
import Button from "./Button";
import ArrowRightWhite from "../assets/icons/right-arrow-white.svg";
import ArrowLeftWhite from "../assets/icons/left-arrow-white.svg";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DiseñosCatalogo = () => {
  const context = useContext(MainContext);
  const [numerador, setNumerador] = useState(0);
  const [activadorBtnElminar, setActivadorBtnElminar] = useState(true);

  const nextDesign = () => {
    if (numerador === 27) {
      setNumerador(numerador - 27);
    } else {
      setNumerador(numerador + 1);
    }
  };

  const previousDesign = () => {
    if (numerador === 0) {
      setNumerador(numerador + 27);
    } else {
      setNumerador(numerador - 1);
    }
  };

  const addDesign = () => {
    const auxItems = context?.cart?.items;

    if (auxItems) {
      // No permitir agregar el mismo modelo.
      if (
        context?.cart?.items?.[0]?.id === catalogo[numerador]?.id ||
        context?.cart?.items?.[1]?.id === catalogo[numerador]?.id
      ) {
        toast.error("¡Este diseño ya lo habias agregado a tu cotización!");
        return false;
      }

      // Si ya agrego dos, no permitirle agregar mas.
      if (auxItems?.length === 2) {
        toast.error(
          "Lo sentimos, solo puedes agregar 2 diseños a tu cotización, elimina uno para agregar este."
        );
        return false;
      }

      const newItem = catalogo[numerador];
      const newItems = [...auxItems];

      // Si no ha agregado mas de dos y el modelo no es el mismo, agregarlo al arreglo.
      if (auxItems?.length <= 2 && auxItems?.id != catalogo[numerador]?.id) {
        newItems.push(newItem);
        if (auxItems?.length === 0) {
          toast.success("¡Listo, agregaste tu primer diseño a tu cotización!");
        }
        if (auxItems?.length === 1) {
          toast.success("¡Has agregado tu segundo modelo a tu cotización!");
        }
      }

      const newCart = {
        ...context?.cart,
        items: newItems,
      };

      context?.setCart(newCart);
    } else {
      context?.setCart({
        items: [catalogo[numerador]],
      });
      toast.success("¡Listo, agregaste tu primer diseño a tu cotización!");
    }
  };

  const deletDesign = () => {
    // Borrar de la cotizacion.
    if (context?.cart?.items?.[0]?.id === catalogo[numerador]?.id) {
      context?.cart?.items?.shift();
    } else {
      context?.cart?.items?.pop();
    }
    toast.success("¡Listo, este diseño ya no sera agregado a tu cotización!");
  };

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
      id: 2,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera3,
    },
    {
      id: 3,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera5,
    },
    {
      id: 4,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera7,
    },
    {
      id: 5,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera9,
    },
    {
      id: 6,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera10,
    },
    {
      id: 7,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera11,
    },
    {
      id: 8,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera12,
    },

    {
      id: 9,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera13,
    },

    {
      id: 10,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera15,
    },
    {
      id: 11,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera16,
    },
    {
      id: 12,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera17,
    },
    {
      id: 13,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera18,
    },
    {
      id: 14,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera19,
    },
    {
      id: 15,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera20,
    },
    {
      id: 16,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera21,
    },
    {
      id: 17,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera22,
    },
    {
      id: 18,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera23,
    },
    {
      id: 19,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera24,
    },
    {
      id: 20,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera25,
    },
    {
      id: 21,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera26,
    },
    {
      id: 22,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera27,
    },
    {
      id: 23,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera28,
    },
    {
      id: 24,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera29,
    },
    {
      id: 25,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera30,
    },
    {
      id: 26,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera31,
    },
    {
      id: 27,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera32,
    },
    {
      id: 28,
      tiempo: "Error, dato desconocido",
      costo1: "Error, dato desconocido",
      costo2: "Error, dato desconocido",
      costo3: "Error, dato desconocido",
      img: Cochera33,
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
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                border: "1px solid #0064DF",
                background: "#D6EEFF",
                padding: "16px",
                color: "#0064DF",
                width: "xl:1000px",
              },
            }}
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

        <div className="flex flex-col xl:flex-row xl:gap-x-2 gap-y-2">
          <Button
            iconRight={ArrowRightWhite}
            size="small"
            text="Agregar A Cotización"
            onClick={addDesign}
          />

          {context?.cart?.items?.[0]?.id === catalogo[numerador]?.id && (
            <Button
              iconRight={ArrowRightWhite}
              size="small"
              text="Eliminar"
              onClick={deletDesign}
            />
          )}

          {context?.cart?.items?.[1]?.id === catalogo[numerador]?.id && (
            <Button
              iconRight={ArrowRightWhite}
              size="small"
              text="Eliminar"
              onClick={deletDesign}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// context?.cart?.items?.[0]?.id === catalogo[numerador]?.id ||
//         context?.cart?.items?.[1]?.id === catalogo[numerador]?.id

export default DiseñosCatalogo;
