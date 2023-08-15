"use client";
import { ReactNode, createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext({
  auth: { isAuth: false, hasSubscribed: false, isAdmin: false, token: "" },
  setAuth: ({
    isAuth,
    hasSubscribed,
    isAdmin,
    token,
  }: {
    isAuth?: boolean;
    hasSubscribed?: boolean;
    isAdmin?: boolean;
    token?: string;
  }) => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState({
    isAuth:
      Cookies.get("a_t_t") !== "undefined" && Cookies.get("a_t_t")
        ? true
        : false,
    hasSubscribed: Cookies.get("a_t_s") ? true : false,
    isAdmin: Cookies.get("a_d_t") ? true : false,
    token: Cookies.get("a_t_t") || "",
  });
  const handle = ({
    isAuth,
    hasSubscribed,
    isAdmin,
  }: {
    isAuth?: boolean;
    hasSubscribed?: boolean;
    isAdmin?: boolean;
  }) => {
    setAuth(() => {
      if (isAuth && hasSubscribed)
        return { ...auth, isAuth: isAuth, hasSubscribed: hasSubscribed };
      else if (isAuth && !hasSubscribed) return { ...auth, isAuth: isAuth };
      else if (isAuth && isAdmin)
        return { ...auth, isAuth: isAuth, isAdmin: isAdmin };
      else if (isAuth && !isAdmin) {
        return { ...auth, isAuth: isAuth };
      } else return { ...auth };
    });
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth: handle }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
