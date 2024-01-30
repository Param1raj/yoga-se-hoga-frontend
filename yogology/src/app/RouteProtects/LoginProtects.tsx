"use client";
import { AuthContext, AuthContextType } from "@/src/app/AuthProvider";
import { useRouter } from "next13-progressbar";
// import { useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";

function LoginProtects({ children }: { children: ReactNode }) {
  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext) as AuthContextType;
  const { push } = useRouter();
  if (!isAuthenticated) {
    push("/login");
  }
  return children;
}

export default LoginProtects;
