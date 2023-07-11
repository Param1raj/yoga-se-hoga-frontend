"use client";
import Footer from "@/components/Footer/Footer";
import ResponsiveAppBar from "@/components/Navbar/Header";
import { createContext, useState } from "react";

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

function App({ children }: { children: any }) {
  const [auth, setAuth] = useState({
    isAuth: false,
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
      <header>
        <ResponsiveAppBar />
      </header>
      <main style={{ marginTop: "104px" }}>{children}</main>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
