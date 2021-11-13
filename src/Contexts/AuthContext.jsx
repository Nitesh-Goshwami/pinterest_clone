import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function Author({ children }) {
  const [isAuth, setIsauth] = useState(false);

  const handleAuth = () => {
    setIsauth(true);
  };
  const handleAuthOut = () => {
    setIsauth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleAuth,
        handleAuthOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
