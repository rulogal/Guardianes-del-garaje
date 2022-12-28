import React from "react";

// Importas el componente
import Button from "../components/Button/index";

export default {
  title: "Components/Button",
  component: Button,
};

// Crear el el Button base (Generico)
const Template = (allProps) => <Button {...allProps} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const HiperSmall = Template.bind({});
export const ButonSmallTerciaryTextHola = Template.bind({});

Primary.args = {
  theme: "primary-bg",
  text: "Botón",
  size: "small",
  type: "button",
};

Secondary.args = {
  theme: "secondary-bg",
  text: "Botón Secondario",
  size: "small",
  type: "button",
};

ButonSmallTerciaryTextHola.args = {
  theme: "primary-bg",
  text: "Botón Hiper Small",
  size: "hiper-small",
  type: "button",
};
