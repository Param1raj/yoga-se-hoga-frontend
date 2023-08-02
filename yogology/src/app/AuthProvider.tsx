"use client";
import { ReactNode, createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext({
  auth: { isAuth: false, hasSubscribed: false },
  setAuth: ({
    isAuth,
    hasSubscribed,
  }: {
    isAuth?: boolean;
    hasSubscribed?: boolean;
  }) => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState({
    isAuth:
      Cookies.get("a_t_t") !== "undefined" && Cookies.get("a_t_t")
        ? true
        : false,
    hasSubscribed: false,
  });
  const handle = ({
    isAuth,
    hasSubscribed,
  }: {
    isAuth?: boolean;
    hasSubscribed?: boolean;
  }) => {
    setAuth(() => {
      if (isAuth && hasSubscribed)
        return { ...auth, isAuth: isAuth, hasSubscribed: hasSubscribed };
      else if (isAuth && !hasSubscribed) return { ...auth, isAuth: isAuth };
      else if (hasSubscribed && !isAuth)
        return { ...auth, hasSubscribed: hasSubscribed };
      else return { ...auth };
    });
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth: handle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
