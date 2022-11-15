import { createContext, useState } from "react";

export const MainContext = createContext({
  cart: null,
  setCart: () => {},
  name: "",
  setName: () => {},
  address: "",
  setAddress: () => {},
  date: "",
  setDate: () => {},
  width: "",
  setWidth: () => {},
  phone: "",
  setPhone: () => {},
  height: "",
  setHeight: () => {},
});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [name, setName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  return (
    <MainContext.Provider
      value={{
        name,
        setName,
        cart,
        setCart,
        address,
        setAddress,
        date,
        setDate,
        width,
        setWidth,
        phone,
        setPhone,
        height,
        setHeight,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
