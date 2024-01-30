"use client";
import { AuthContext, AuthContextType } from "@/src/app/AuthProvider";
import { usePathname } from "next/navigation";
import { useRouter } from "next13-progressbar";
import React, { ReactNode, useContext } from "react";

function AdminLoginProtect({
  children,
}: // page,
{
  children: ReactNode;
  // page: string;
}) {
  const {
    auth: { isAdmin, isAuthenticated },
  } = useContext(AuthContext) as AuthContextType;
  const { push } = useRouter();
  const pathtName = usePathname();
  // console.log("Authenticated", pathtName.startsWith("/admin/pannel"));
  if ((!isAdmin || isAuthenticated) && pathtName.startsWith("/admin/pannel")) {
    push("/admin");
  }
  return <>{children}</>;
}

export default AdminLoginProtect;
