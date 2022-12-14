import { useContext, useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { MainContext } from "context/main";
import Button from "components/Button";
import Input from "components/Input";
import ArrowRightWhite from "assets/icons/right-arrow-white.svg";
import ArrowLeftBlue from "assets/icons/left-arrow-blue.svg";

const StepForm = () => {
  const context = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const [formStep, setFormStep] = useState(0);

  function nextFormStep() {
    if (formStep < 6) {
      setFormStep((prevState) => prevState + 1);
    }
  }

  function previousFormStep() {
    if (formStep > 0) {
      setFormStep((prevState) => prevState - 1);
    }
  }

  async function send() {
    setLoading(true);
    const items = `${context?.cart?.items?.[0]?.id} | ${context?.cart?.items?.[1]?.id}`;

    const payload = {
      cart: items,
      name: context?.name,
      from_name: "Guardianes del garaje",
      phone: context?.phone,
      width: context?.width,
      height: context?.height,
      address: context?.address,
      date: context?.date,
    };
    console.info("Payload: ", payload);

    try {
      const result = await emailjs.send(
        "service_f8l9an1",
        "template_st68s1t",
        payload,
        "c9EOqjNyleQug0WBQ"
      );
      console.info(result);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }

    setFormStep(5);
  }

  function handleNext() {
    setTimeout(() => {
      formStep <= 3 ? nextFormStep() : send();
    }, 100);
  }

  return (
    <div className="flex flex-col justify-center py-12 xl:py-20 px-5 xl:px-60">
      <div className="flex flex-col gap-y-8 xl:gap-y-10">
        <form>
          {/* STEP #1 - NOMBRE */}
          {formStep === 0 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-7">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">??Cu??l es tu nombre?</h2>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-y-2">
                <Input
                  label="Nombre"
                  name="nombre"
                  type="text"
                  onChange={(currentInput) => {
                    context?.setName(currentInput.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP #2 - DIMENSIONES */}
          {formStep === 1 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-2">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">??De qu?? medidas ser?? tu cochera?</h2>

                <Link href="tel:8711427051">
                  <Button
                    size="normal"
                    theme="terciary"
                    text="??No conoces tus medidas exactas? Da click aqui para marcanos y asesorarte."
                  />
                </Link>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-y-2">
                <Input
                  label="Ancho"
                  name="width"
                  type="text"
                  onChange={(currentInput) => {
                    context?.setWidth(currentInput.currentTarget.value);
                  }}
                />
                <Input
                  label="Alto"
                  name="height"
                  type="text"
                  onChange={(currentInput) => {
                    context?.setHeight(currentInput.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP #3 - DIRECCION */}
          {formStep === 2 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-2">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">
                  ??En qu?? direcci??n ser?? tu pr??xima cochera?
                </h2>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-y-2">
                <Input
                  label="Direcci??n"
                  name="address"
                  type="text"
                  onChange={(currentInput) => {
                    context?.setAddress(currentInput.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP #4 - FECHA */}
          {formStep === 3 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-2">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">
                  ??Para qu?? fecha necesitar??as que empez??ramos con el proyecto?
                </h2>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-y-2">
                <Input
                  label="Fecha"
                  name="date"
                  placeholder=""
                  type="date"
                  onChange={(currentInput) => {
                    context?.setDate(currentInput.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP #5 - TELEFONO */}
          {formStep === 4 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-2">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">
                  ??A qu?? WhatsApp mandaremos el presupuesto?
                </h2>
              </div>

              {/* Inputs */}
              <div className="flex flex-col gap-y-2">
                <Input
                  required={true}
                  label="WhatsApp"
                  name="phone"
                  placeholder=""
                  type="tel"
                  onChange={(currentInput) => {
                    context?.setPhone(currentInput.currentTarget.value);
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP #6 - LISTO */}
          {formStep === 5 && (
            <div className="flex flex-col gap-y-5 xl:gap-y-10">
              {/* Text */}
              <div className="flex flex-col gap-y-3 xl:gap-y-2">
                <span className="text-primary_super text-right">
                  {formStep + 1}/6
                </span>
                <h2 className="capitalize">
                  ??Listo {name}!, en poco tiempo recibir??s tu cotizaci??n.
                </h2>
                <span className="text-primary_super">Que tengas buen d??a.</span>
              </div>
            </div>
          )}

          {/* Buttons */}
          {formStep < 5 && (
            <div className="flex flex-row gap-x-2 xl:gap-x-10 py-7 xl:py-0 xl:mt-12 justify-center">
              <Button
                type="button"
                iconLeft={ArrowLeftBlue}
                size="super-small"
                theme="secondary-bg"
                text="Anterior"
                onClick={previousFormStep}
              />

              <Button
                disabled={loading}
                type="button"
                iconRight={ArrowRightWhite}
                size="super-small"
                text="Siguiente"
                onClick={handleNext}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default StepForm;
