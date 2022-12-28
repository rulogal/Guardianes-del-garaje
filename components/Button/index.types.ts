import { ButtonHTMLAttributes } from "react";

export interface InterfaceButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tamaño del botón
   */
  size: "small" | "super-small" | "hiper-small" | "responsive";
  /**
   * Tema del botón
   */
  theme:
    | "primary-bg"
    | "primary-bg-white"
    | "secondary-bg"
    | "secondary-bg-white"
    | "terciary";
  /**
   * Texto del botón
   */
  text: string;
  iconLeft?: string;
  iconRight?: string;
  alt?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}
