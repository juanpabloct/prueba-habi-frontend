import { createContext, ReactNode, useContext, useState } from "react";
interface Information {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
  piso: number;
  setPiso: React.Dispatch<React.SetStateAction<number>>;
  characters: Characters;
  setCharacters: React.Dispatch<React.SetStateAction<Characters>>;
}
interface Characters {
  [character: string]: boolean;
  zonaBBQ: boolean;
  salonComunal: boolean;
  parqueJuegos: boolean;
}
const informationContext = createContext<Information>(Object.create(null));

export const InformationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [direction, setDirection] = useState("");
  const [piso, setPiso] = useState(0);
  const [characters, setCharacters] = useState({
    zonaBBQ: false,
    salonComunal: false,
    parqueJuegos: false,
  });
  return (
    <informationContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        direction,
        setDirection,
        piso,
        setPiso,
        characters,
        setCharacters,
      }}
    >
      {children}
    </informationContext.Provider>
  );
};
export const useInformation = () => useContext(informationContext);
