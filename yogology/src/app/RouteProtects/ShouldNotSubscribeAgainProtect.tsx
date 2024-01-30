import { AuthContext, AuthContextType } from "@/src/app/AuthProvider";
import { useRouter } from "next13-progressbar";
// import { useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";

function ShouldNotSubscribeAgainProtect({ children }: { children: ReactNode }) {
  const {
    auth: { hasSubscribed, isAuthenticated },
  } = useContext(AuthContext) as AuthContextType;
  const { push } = useRouter();
  if (isAuthenticated && hasSubscribed) {
    push("/content");
  }
  return { children };
}

export default ShouldNotSubscribeAgainProtect;
