import { createContext, useState } from "react";

export const SaveContext = createContext({});

export function Saved({ children }) {
  const [saveImgData, setSaveImgData] = useState([]);

  return (
    <SaveContext.Provider
      value={{
        saveImgData,
        setSaveImgData,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
}
