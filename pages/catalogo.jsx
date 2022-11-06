/**
 * @description Pagina home del sitio web.
 */

import Head from "next/head";
import Navbar from "./components/Navbar";
import Herov2 from "./sections/Herov2";
import HeroImage from "../pages/assets/imgs/hero22.png";
import CarouselBrands from "./components/CarouselBrands";
import CarouselReviews from "./components/CarouselReviews";
import Footer from "./modules/Footer";
import DiseñosCatalogo from "./components/DiseñosCatalogo";
import { useState } from "react";
import StepForm from "./sections/StepForm";
import Link from "next/link";
import Button from "./components/Button";
import ArrowRightWhite from "../pages/assets/icons/right-arrow-white.svg";

const catalogo = () => {
  return (
    <div>
      <Head>
        <title>
          Diseños De Cocheras Modernas En Torreón | Guardianes Del Garaje
        </title>
        <meta
          name="description"
          content="Llevamos mucho tiempo dando servicios de cocheras electricas en torreon y sabemos que solo se elige una vez el diseño de una cochera."
        />
        <link rel="icon" href="/pages/assets/icons/cart.svg" />
      </Head>

      <Navbar />

      <main>
        <Herov2
          image={HeroImage}
          title="Catálogo De Diseños Únicos Y Modernos De Cocheras Eléctricas"
        />
        <CarouselBrands />
        {/* <CarouselReviews /> */}

        {/* Paso #1 - Diseño */}
        <div className="py-10 px-5 xl:py-20  xl:px-40 bg-primary_bg border border-primary_super">
          <div className="flex flex-col justify-center items-start gap-y-2 xl:gap-y-0 xl:flex-row xl:gap-x-2">
            <h2 className="xl:w-1/2">Paso 1. | Elegir diseño</h2>
            <p className="xl:w-1/2">
              <b className="underline">
                Cada diseño tiene un costo aproximado de las medidas estandar
                (1-3 carros)
              </b>
              , para ayudarte a darte una idea del precio de cada uno.
              <br />
              <br />
              {/* <b className="underline"> Nota:</b>
              Debajo de la informacion puedes agregar automaticamente los
              diseños que te interesan cotizar (maximo 2). */}
            </p>
          </div>
        </div>

        {/* Info e Imagenes de catalogo */}
        <DiseñosCatalogo />

        {/* Paso #2 - Mandar Diseño */}
        <div className="py-10 px-5 xl:py-20 xl:px-40 bg-primary_bg border border-primary_super">
          <div className="flex flex-col justify-center items-start gap-y-2 xl:gap-y-0 xl:flex-row xl:gap-x-2">
            <h2 className="xl:w-1/2">Paso 2. | Solicitar presupuesto</h2>
            {/* Poner formulario y boton de agregado arriba automatico. */}

            <div className="flex flex-col gap-y-2 xl:w-1/2">
              <p>
                {/* Ahora solo tienes que llenar el siguiente formulario con tus
                datos y en poco tiempo recibiras tu cotización. */}
                Mándanos el diseño o diseños que mas te gustaron junto con tus
                medidas EXACTAS y en menos de 2 días nuestro equipo tendrá lista
                tu cotización.
              </p>
              <Link href="https://api.whatsapp.com/send?phone=528711427051&text=Hola,%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20estos%20dise%C3%B1os:">
                <Button
                  iconRight={ArrowRightWhite}
                  size="small"
                  text="Pedir Cotización"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* <StepForm /> */}
      </main>
      <Footer />
    </div>
  );
};

export default catalogo;
