"use client";
import { AuthContext } from "@/app/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";

function AdminLoginProtect({
  children,
}: // page,
{
  children: ReactNode;
  // page: string;
}) {
  const {
    auth: { isAdmin, isAuth },
  } = useContext(AuthContext);
  const { push } = useRouter();
  const pathtName = usePathname();
  // console.log("Authenticated", pathtName.startsWith("/admin/pannel"));
  if ((!isAdmin || isAuth) && pathtName.startsWith("/admin/pannel")) {
    push("/admin");
  }
  return <>{children}</>;
}

export default AdminLoginProtect;
