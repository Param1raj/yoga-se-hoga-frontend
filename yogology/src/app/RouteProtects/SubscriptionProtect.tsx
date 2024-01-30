"use client";
import { AuthContext, AuthContextType } from "@/src/app/AuthProvider";
import { useRouter } from "next13-progressbar";
import React, { ReactNode, useContext } from "react";

function SubscriptionProtect({
  children,
  page,
}: {
  children: ReactNode;
  page?: string;
}) {
  const { push } = useRouter();
  const {
    auth: { isAuthenticated, hasSubscribed },
  } = useContext(AuthContext) as AuthContextType;
  if (!isAuthenticated || !hasSubscribed) {
    push("/videos/subscribe");
  }
  return <> {children}</>;
}

export default SubscriptionProtect;
