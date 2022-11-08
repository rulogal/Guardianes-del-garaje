import { createContext, useState } from "react";

export const MainContext = createContext({
  name: "",
  setName: () => {},
  cart: null,
  setCart: () => {},
});

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [cart, setCart] = useState({});

  return (
    <MainContext.Provider values={{ name, setName, cart, setCart }}>
      {children}
    </MainContext.Provider>
  );
};
