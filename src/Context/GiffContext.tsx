import React, { useState } from "react";

export type GiffType = {
  url: string;
  title: string;
  id: string
}
type GiffContextTypes = {
  giffs: Array<GiffType>
  setGiffs: React.Dispatch<React.SetStateAction<Array<GiffType>>>;
};

export const GiffContext = React.createContext<GiffContextTypes>({} as GiffContextTypes);

type GiffContextProviderProps = {
    children: React.ReactNode
}

const GiffContextProvider = ({ children }:GiffContextProviderProps) => {
  const [giffs, setGiffs] = useState<Array<GiffType>>([]);
  return (
    <GiffContext.Provider
      value={{
        giffs,
        setGiffs
      }}
    >
      {children}
    </GiffContext.Provider>
  );
};

export default GiffContextProvider
