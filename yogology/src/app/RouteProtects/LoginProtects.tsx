"use client";
import { AuthContext } from "@/app/AuthProvider";
import { useRouter } from "next13-progressbar";
// import { useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";

function LoginProtects({ children }: { children: ReactNode }) {
  const {
    auth: { isAuth },
  } = useContext(AuthContext);
  const { push } = useRouter();
  if (!isAuth) {
    push("/login");
  }
  return children;
}

export default LoginProtects;
