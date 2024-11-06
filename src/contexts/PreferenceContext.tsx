import { createContext, useState } from "react";

export const PreferenceContext = createContext<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
}>({
  isMenuOpen: true,
  toggleMenu: () => {},
});

const PreferenceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(
    Boolean(localStorage.getItem("isMenuOpen"))
  );

  const toggleMenu = () => {
    localStorage.setItem("isMenuOpen", isMenuOpen ? "" : "true");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <PreferenceContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceProvider;
