import Image from "next/image";
import { InterfaceButtonProps } from "./index.types";

// Se utiliza para objetos, y para heredar, como si fuera una clase.
// Todo lo que extiendes mas lo que tu tienes.
const Button = ({
  size = "small",
  theme,
  text,
  iconLeft,
  iconRight,
  alt,
  type = "button",
  disabled = false,
  onClick,
  ...rest
}: InterfaceButtonProps): JSX.Element => {
  const getButtonSize = (size: InterfaceButtonProps["size"]) => {
    switch (size) {
      case "small":
        return "w-35 h-6";
      case "super-small":
        return "w-17 h-6 xl:w-35 xl:h-6";
      case "hiper-small":
        return "w-9 h-2 xl:w-15 xl:h-4";
      case "responsive":
        return "w-21 sm:w-39 h-6";
      default:
        return "w-33 h-[3.8rem] sm:w-53 sm:h-9";
    }
  };

  const getButtonTheme = (theme: InterfaceButtonProps["theme"]) => {
    switch (theme) {
      case "primary-bg":
        return "bg-primary_super text-white";
      case "primary-bg-white":
        return "bg-white text-primary_super";
      case "secondary-bg":
        return "bg-transparent text-primary_super border border-primary_super";
      case "secondary-bg-white":
        return "bg-transparent text-primary_super border border-white";
      case "terciary":
        return "underline decoration-primary_super text-left";
      default:
        return "bg-primary_super text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${getButtonTheme(theme)} ${getButtonSize(
        size
      )} font-bold rounded-[50px] flex flex-row items-center justify-center gap-2`}
      {...rest}
    >
      {iconLeft && <Image className="w-2" src={iconLeft} alt={alt} />}
      <span className="text-2 font-bold capitalize">{text}</span>
      {iconRight && <Image className="w-2" src={iconRight} alt={alt} />}
    </button>
  );
};

export default Button;
