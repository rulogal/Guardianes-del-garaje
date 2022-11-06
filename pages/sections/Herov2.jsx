import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  title,
  buttonText,
  linkButton,
  iconLeft,
  iconRight,
  image,
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center xl:gap-x-10 xl:h-screen">
      {/* Left Image */}
      <div className="xl:w-3/5 xl:max-h-screen bg-primary">
        <Image
          className="xl:w-full xl:max-h-screen object-left xl:object-cover"
          src={image}
        />
      </div>

      {/* Right */}
      <div className="mt-17 mb-10 xl:w-3/5 px-5 xl:p-10 flex flex-col justify-center gap-2">
        <h1>{title}</h1>
        <p>
          Llevamos mucho tiempo dando servicios de
          <Link href="/"> cocheras electricas en torreon</Link> y sabemos que
          solo se elige una vez el diseño de una cochera.
          <br />
          <br /> Esperamos y este catálogo te ayude a escogerlo bien y no te
          arrepientas en el futuro.
        </p>
      </div>
    </div>
  );
};

export default Hero;
