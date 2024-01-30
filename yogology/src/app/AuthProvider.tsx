"use client";
import { ReactNode, createContext, useState } from "react";
import Cookies from "js-cookie";
// TODO: Fix this context api to work properly.
// using TODO :-
// define type of state
// create context
// define the veriables and function to pass as default
// Provide it
// now consume it.

export type Auth = {
  isAuthenticated: boolean;
  hasSubscribed: boolean;
  isAdmin: boolean;
  token?: string;
};

export type AuthContextType = {
  auth: Auth;
  setAuth: (auth: {
    isAuthenticated?: boolean;
    hasSubscribed?: boolean;
    isAdmin?: boolean;
  }) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<Auth>({
    isAuthenticated:
      Cookies.get("a_t_t") || Cookies.get("a_d_t") ? true : false,
    hasSubscribed: Cookies.get("a_t_s") ? true : false,
    isAdmin: Cookies.get("a_d_t") ? true : false,
    token: Cookies.get("a_t_t") || Cookies.get("a_d_t") || undefined,
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
        return {
          ...auth,
          isAuthenticated: isAuth,
          hasSubscribed: hasSubscribed,
        };
      else if (isAuth && !hasSubscribed)
        return { ...auth, isAuthenticated: isAuth };
      else if (isAuth && isAdmin) {
        console.log(
          "trying to modify admin authentication Auth, Admin",
          isAuth,
          isAdmin
        );
        return { ...auth, isAuthenticated: isAuth, isAdmin: isAdmin };
      } else if (isAuth && !isAdmin) {
        return { ...auth, isAuthenticated: isAuth };
      }
      if (isAuth) {
        console.log("!!!!!!!!!!!getting called!!!!!!!!!!!!");
        return { ...auth, isAuthenticated: isAuth };
      } else if (!isAuth) {
        console.log("!!!!!!!!!!!getting called!!!!!!!!!!!!");
        return {
          ...auth,
          isAuthenticated: false,
          isAdmin: false,
          hasSubscribed: false,
          token: undefined,
        };
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
