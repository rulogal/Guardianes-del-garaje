import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  title,
  text,
  buttonText,
  buttonText2,
  iconLeft,
  iconLeft2,
  iconRight,
  iconRight2,
  linkButton,
  linkButton2,
  image,
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center xl:gap-x-10 xl:h-screen">
      {/* Left Image */}
      <div className="xl:w-2/5 xl:min-h-screen bg-primary">
        <Image
          className="xl:w-full xl:min-h-screen object-left xl:object-cover"
          src={image}
          alt="Cocheras eléctricas en torreón"
        />
      </div>

      {/* Right */}
      <div className="mt-15 mb-10 xl:w-3/5 px-5 xl:p-10 flex flex-col justify-center gap-2">
        <h1>{title}</h1>
        <p> {text}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-y-2 xl:flex-row xl:gap-y-0 xl:gap-x-4 mt-1 xl:mt-2">
          <Link href={linkButton ?? ""}>
            <Button
              size="default"
              theme="primary_bg"
              text={buttonText}
              iconLeft={iconLeft}
              iconRight={iconRight}
              alt=""
              type="button"
            />
          </Link>
          <Link href={linkButton2 ?? ""}>
            <Button
              size="default"
              theme="secondary-bg"
              text={buttonText2}
              iconLeft={iconLeft2}
              iconRight={iconRight2}
              alt=""
              type="button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
