import Marquee from "react-fast-marquee";
import CardReview from "../components/CardReview";
import Stock from "../assets/imgs/asa.jpg";
import Siu from "../assets/imgs/siu.webp";

const CarouselReviews = () => {
  return (
    <div className="flex flex-col gap-y-6 px-5 xl:px-50 pt-3 pb-8 xl:pt-5 xl:pb-20">
      <div className="flex flex-col gap-y-2">
        <h2>
          Y Orgullosos De Lo Que Opinan Sobre Nosotros Las Personas Que Hemos
          Ayudado
        </h2>
        <p>
          Con cada una de estas personas no esforzamos por darles exactamente el
          diseño y el servicio que nos pidieron y rindió sus frutos.
          <br />
          <br />
          Estas son las 20 recomendaciones en google de 5 estrellas de los que
          confiaron en nosotros:
        </p>
      </div>

      {/* Cards */}
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradientWidth={0}
        direction="right"
      >
        <CardReview
          name="Dwayne Johnson"
          img={Stock}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minima nulla eum nesciunt asperiores magnam, voluptate, pariatur sapiente dolorem facere iure. Corporis quo odit adipisci exercitationem magnam deleniti dolore esse!"
        />
        <CardReview
          name="Cristiano Ronaldo"
          img={Siu}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minima nulla eum nesciunt asperiores magnam, voluptate, pariatur sapiente dolorem facere iure. Corporis quo odit adipisci exercitationem magnam deleniti dolore esse!"
        />
      </Marquee>
    </div>
  );
};

// Muy bien el servicio del señor, todo muy bien la calidad y el precio y el trato aunque se tardo un poquito mas de lo que me dijo lo hizo muy bien Los recomiendo si quieren una cochera electrica de calidad que este bien hechecita y si quieren trabajar con un señor honesto como el Sr Galindo

export default CarouselReviews;
