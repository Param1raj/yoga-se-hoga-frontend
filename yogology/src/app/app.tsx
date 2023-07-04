"use client";
import Footer from "@/components/Footer/Footer";
import ResponsiveAppBar from "@/components/Navbar/Header";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  hasSubscribed: false,
});

function App({ children }: { children: any }) {
  const [auth, setAuth] = useState({
    isAuth: false,
    hasSubscribed: false,
  });
  return (
    <AuthContext.Provider value={auth}>
      <header>
        <ResponsiveAppBar />
      </header>
      <main style={{ marginTop: "104px" }}>{children}</main>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
