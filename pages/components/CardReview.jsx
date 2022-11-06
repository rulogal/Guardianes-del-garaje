import Image from "next/image";
import StarBlueFull from "../assets/icons/star-blue-full.svg";

const CardReview = ({ name, description, img }) => {
  return (
    <div className="flex flex-row mx-1">
      {/* Card1 */}
      <div className="rounded-lg w-39 xl:w-80 flex flex-col p-4 xl:p-10 gap-y-3 xl:gap-y-4 bg-primary_bg">
        <div className="flex xl:flex-row flex-col gap-y-2 xl:gap-x-4 items-center">
          <Image
            className="w-12 h-12 rounded-full object-cover object-center"
            alt="review-cocheras"
            src={img}
          />

          <div className="flex flex-col gap-y-1">
            <h4 className="text-center xl:text-left">{name}</h4>
            <div className="flex flex-row gap-x-1">
              <Image className="w-2" alt="start-review" src={StarBlueFull} />
              <Image className="w-2" alt="start-review" src={StarBlueFull} />
              <Image className="w-2" alt="start-review" src={StarBlueFull} />
              <Image className="w-2" alt="start-review" src={StarBlueFull} />
              <Image className="w-2" alt="start-review" src={StarBlueFull} />
            </div>
          </div>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardReview;
