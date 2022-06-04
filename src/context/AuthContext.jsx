import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState("LogOut");

  const handleChange = () => {
    setStatus(status === "LogOut" ? "LogIn" : "LogOut");
  };

  return (
    <AuthContext.Provider value={{ status, handleChange }}>
      {children}
    </AuthContext.Provider>
  );
};
