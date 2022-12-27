/**
 * @description Pagina home del sitio web.
 */

import Image from "next/image";
import Link from "next/link";
import Layout from "components/Layout/Layout";
import Button from "components/Button";
import Hero from "components/Heros/Hero";
import CarouselBrands from "components/Carousels/Brands";
import ArrowRightBlue from "assets/icons/right-arrow-blue.svg";
import ArrowRightWhite from "assets/icons/right-arrow-white.svg";
import HeroImage from "assets/imgs/hero11.png";
import CreacionBlue from "assets/icons/creacion-blue.svg";
import AutomatizacionBlue from "assets/icons/automatizacion-blue.svg";
import ReparacionBlue from "assets/icons/reparacion-blue.svg";

const Index = () => {
  return (
    <Layout>
      <main>
        <Hero
          image={HeroImage}
          title="Expertos En Cocheras Electricas En Torreon Con 40 Años De Experiencia"
          text="Todos nuestros servicios de cocheras eléctricas tienen una garantía anti-fallas mínima de 6 meses FIRMADA."
          buttonText="Agendar Cita"
          buttonText2="Ver Catálogo"
          iconRight={ArrowRightWhite}
          iconRight2={ArrowRightBlue}
          linkButton="tel:8711427051"
          linkButton2="/catalogo"
        />
        <CarouselBrands />
        {/* Seccion Info */}
        <div className="flex flex-col gap-y-2 bg-primary_bg px-5 xl:px-50 py-10 xl:py-20">
          <h2>Llevamos Más De 1200 Cocheras Electricas De Experiencia</h2>
          <p>
            Somos los guardianes del garaje, empresa líder en puertas
            automáticas de tipo industrial y residencial en la laguna (nuestras
            recomendaciones lo confirman).
            <br />
            <br />
            Somos expertos en automatización, instalación, reparación de
            cocheras eléctricas y mantenimiento de cocheras americanas y también
            distribuidores de las mejores marcas de refacciones para cocheras en
            torreon coah.
            <br />
            <br />
            Sea tu motor o cualquier servicio de cocheras eléctricas en torreon,
            si falla antes del tiempo de la garantía que te dimos, vamos y lo
            solucionamos sin llorar y sin precio alguno.
          </p>
        </div>

        {/* Seccion Servicios */}
        <div className="flex flex-col gap-y-2 px-5 xl:px-50 py-10 xl:py-20">
          <h2>
            Servicios De Cocheras Eléctricas Industrial Y Residencial Que
            Ofrecemos
          </h2>
          <p>
            <b>Tenemos un solo objetivo:</b> Que no vuelvas a necesitarnos de
            nuevo ni a nosotros ni a nadie más luego de recibir nuestra ayuda.
            <br />
            <br />
            Así que puedes estar tranquilo porque con nosotros la calidad será
            superior a las demás empresas en torreón.
          </p>
        </div>

        <div className="flex flex-col pb-5 xl:pb-20 gap-y-1 xl:gap-y-0 xl:px-20 xl:flex-row xl:gap-x-6 items-start">
          {/* Creacion */}
          <div className="xl:w-1/3 xl:h-[75vh] flex flex-col p-5 xl:p-10 gap-y-3 xl:gap-y-6 justify-center items-center border border-primary_super">
            <Image
              alt="cocheras electricas en torreon coahuila - creacion"
              className="w-10 xl:w-15"
              src={CreacionBlue}
            />
            <div className="flex flex-col items-center text-center gap-y-2">
              <h4>Creación De Puertas Automáticas</h4>
              <p>
                ¿Estás remodelando tu casa o a punto de cambiarte a una nueva?
                Observa nuestro catálogo de diseños de cocheras electricas
                modernas.
              </p>
            </div>
            <Link href="/catalogo">
              <Button
                size="small"
                theme="primary_bg"
                text="Ver Catálogo De Diseños"
                iconRight={ArrowRightWhite}
                type="button"
              />
            </Link>
          </div>

          {/* Automatizacion */}
          <div className="xl:w-1/3 xl:h-[75vh] flex flex-col p-5 xl:p-10 gap-y-3 xl:gap-y-6 justify-center items-center border border-primary_super">
            <Image
              alt="cocheras electricas torreon - automatizacion"
              className="w-10 xl:w-15"
              src={AutomatizacionBlue}
            />
            <div className="flex flex-col items-center text-center gap-y-2">
              <h4>Automatización De Portones De Herrería</h4>
              <p> ¿Quieres ponerle motor a tu cochera para automatizarla?</p>

              <p>Tenemos el motor mas potente y silencioso del mercado.</p>
            </div>
            <Link href="tel:8711427051">
              <Button
                size="small"
                theme="primary_bg"
                text="Solicitar Cotización"
                iconRight={ArrowRightWhite}
                type="button"
              />
            </Link>
          </div>

          {/* Reparacion */}
          <div className="xl:w-1/3 xl:h-[75vh] flex flex-col p-5 xl:p-10 gap-y-3 xl:gap-y-6 justify-center items-center border border-primary_super">
            <Image
              alt="cocheras electricas torreon - reparacion"
              className="w-10 xl:w-15"
              src={ReparacionBlue}
            />
            <div className="flex flex-col items-center text-center gap-y-2">
              <h4>Reparaciones De Cocheras Eléctricas</h4>
              <p>
                ¿Tu portón hace demasiado ruido al abrirla o cerrarla o se te
                descompuso y necesitas a alguien que te ayude a repararla?
              </p>
            </div>
            <Link href="tel:8711427051">
              <Button
                size="small"
                theme="primary_bg"
                text="Agendar Cita"
                iconRight={ArrowRightWhite}
                type="button"
              />
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
