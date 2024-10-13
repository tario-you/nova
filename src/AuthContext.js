import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bicep, setBicep] = useState("gray");
  const [chatPopup, setChatPopup] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        bicep,
        setBicep,
        chatPopup,
        setChatPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
