import React,{ createContext, useState } from "react";
import { AuthInterfaceProps, AuthProvicerProps } from "../types/AuthTypes";


export const AuthContext = createContext ({} as AuthInterfaceProps);

export const AuthProvicer = ({ children }: AuthProvicerProps) => {
  const [user, setUser] = useState(null);

  function login() {}

  function logout() {}
  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}