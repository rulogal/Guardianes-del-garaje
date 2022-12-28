import { useContext, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { MainContext } from "context/main";
import { CATALOGO } from "data/catalogo";
import Button from "components/Button";
import CarBlue from "assets/icons/car-blue.png";
import ArrowRightWhite from "assets/icons/right-arrow-white.svg";
import ArrowLeftWhite from "assets/icons/left-arrow-white.svg";

const DiseñosCatalogo = () => {
  3;
  const context = useContext(MainContext);
  const [numerador, setNumerador] = useState(0);

  const nextDesign = () => {
    if (numerador === 26) {
      setNumerador((numerador) => numerador - 26);
    } else {
      setNumerador((numerador) => numerador + 1);
    }
  };

  const previousDesign = () => {
    if (numerador === 0) {
      setNumerador((numerador) => numerador + 26);
    } else {
      setNumerador((numerador) => numerador - 1);
    }
  };

  const addDesign = () => {
    const auxItems = context?.cart?.items;

    if (auxItems) {
      // No permitir agregar el mismo modelo.
      if (
        context?.cart?.items?.[0]?.id === CATALOGO[numerador]?.id ||
        context?.cart?.items?.[1]?.id === CATALOGO[numerador]?.id
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

      const newItem = CATALOGO[numerador];
      const newItems = [...auxItems];

      // Si no ha agregado mas de dos y el modelo no es el mismo, agregarlo al arreglo.
      if (auxItems?.length <= 2 && auxItems?.id != CATALOGO[numerador]?.id) {
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
        items: [CATALOGO[numerador]],
      });
      toast.success("¡Listo, agregaste tu primer diseño a tu cotización!");
    }
  };

  const deletDesign = () => {
    // Borrar de la cotizacion.
    if (context?.cart?.items?.[0]?.id === CATALOGO[numerador]?.id) {
      context?.cart?.items?.shift();
    } else {
      context?.cart?.items?.pop();
    }
    toast.success("¡Listo, este diseño ya no sera agregado a tu cotización!");
  };

  return (
    <div className="flex flex-col xl:flex-row items-center gap-y-3 gap-x-0 xl:gap-x-16">
      <div className="relative xl:w-5/6">
        {/* Image */}
        <Image
          className="h-[37vh] xl:h-[100vh] object-center object-cover"
          src={CATALOGO[numerador].img}
          alt=""
        />

        {/* Buttons */}
        <div className="my-2 flex flex-row justify-center xl:justify-start xl:gap-y-2 gap-x-2 absolute w-screen xl:left-1/3 bottom-0">
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
          <p>{CATALOGO[numerador].tiempo}</p>
        </div>

        {/* Costs */}
        <div className="flex flex-col gap-y-2">
          <h3>Costo aproximado por medidas estandar:</h3>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${CATALOGO[numerador].costo3} |
            </span>
            <div className="flex flex-row gap-x-1 w-15">
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${CATALOGO[numerador].costo2} |
            </span>
            <div className="flex flex-row gap-x-1 w-15">
              <Image className="w-4" src={CarBlue} alt="" />
              <Image className="w-4" src={CarBlue} alt="" />
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <span className="xl:text-3 text-primary_super">
              ${CATALOGO[numerador].costo1} |
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

          {context?.cart?.items?.[0]?.id === CATALOGO[numerador]?.id && (
            <Button
              iconRight={ArrowRightWhite}
              size="small"
              text="Eliminar"
              onClick={deletDesign}
            />
          )}

          {context?.cart?.items?.[1]?.id === CATALOGO[numerador]?.id && (
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

export default DiseñosCatalogo;
