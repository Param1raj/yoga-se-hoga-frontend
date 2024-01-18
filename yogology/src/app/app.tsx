"use client";
import React, { ReactNode } from "react";
import ResponsiveAppBar from "@/src/components/Navbar/Header";
import Footer from "@/src/components/Footer/Footer";
import { usePathname } from "next/navigation";
import Sidebar from "@/src/components/Admin/pannel/Sidebar";
import AdminLoginProtect from "@/src/app/RouteProtects/AdminLoginProtect";
import { Box } from "@mui/material";

const AdminPath = "/admin/pannel";

function App({ children }: { children: ReactNode }) {
  const pathName = usePathname().split("/");
  console.log(`PathName:{${pathName}}`);
  return (
    <Box>
      {pathName[1] === "admin" && pathName[2] === "pannel" ? (
        <>
          <Sidebar>{children}</Sidebar>
        </>
      ) : (
        <>
          <ResponsiveAppBar />
          {children}
        </>
      )}
      {pathName[1] === "admin" && pathName[2] === "pannel" ? <></> : <Footer />}
    </Box>
  );
}

export default App;
