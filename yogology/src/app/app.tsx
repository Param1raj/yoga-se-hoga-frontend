"use client";
import React, { ReactNode } from "react";
import ResponsiveAppBar from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/Admin/pannel/Sidebar";
import AdminLoginProtect from "@/app/RouteProtects/AdminLoginProtect";

const AdminPath = "/admin/pannel";

function App({ children }: { children: ReactNode }) {
  const pathName = usePathname().split("/");
  console.log(`PathName:{${pathName}}`);
  return (
    <>
      {pathName[1] === "admin" && pathName[2] === "pannel" ? (
        <>
          {/* <AdminLoginProtect> */}
          <Sidebar>{children}</Sidebar>
          {/* </AdminLoginProtect> */}
        </>
      ) : (
        <>
          <ResponsiveAppBar />
          {children}
        </>
      )}
      {pathName[1] === "admin" && pathName[2] === "pannel" ? <></> : <Footer />}
    </>
  );
}

export default App;
