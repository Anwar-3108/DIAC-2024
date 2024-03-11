import { createContext, useState } from "react";

const ContextAPI = createContext();

const ContextAPIProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <ContextAPI.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </ContextAPI.Provider>
  );
};

export { ContextAPI, ContextAPIProvider };
