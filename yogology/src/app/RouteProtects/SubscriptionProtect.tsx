"use client";
import { AuthContext } from "@/app/AuthProvider";
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
    auth: { isAuth, hasSubscribed },
  } = useContext(AuthContext);
  if (!isAuth || !hasSubscribed) {
    push("/videos/subscribe");
  }
  return <> {children}</>;
}

export default SubscriptionProtect;
