"use client";
import React, { ReactNode } from "react";
import ResponsiveAppBar from "@/src/components/Navbar/Header";
import Footer from "@/src/components/Footer/Footer";
import { usePathname } from "next/navigation";

function App({ children }: { children: ReactNode }) {
  const Path = usePathname();
  console.log(Path.includes("admin"));
  return (
    <>
      {!Path.includes("/admin") ? (
        <>
          <ResponsiveAppBar /> {children}
          <Footer />
        </>
      ) : (
        children
      )}
    </>
  );
}

export default App;
