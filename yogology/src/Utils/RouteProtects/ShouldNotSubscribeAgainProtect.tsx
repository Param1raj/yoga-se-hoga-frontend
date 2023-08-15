import { AuthContext } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import React, { ReactNode, useContext } from "react";

function ShouldNotSubscribeAgainProtect({ children }: { children: ReactNode }) {
  const {
    auth: { hasSubscribed, isAuth },
  } = useContext(AuthContext);
  const { push } = useRouter();
  if (isAuth && hasSubscribed) {
    push("/content");
  }
  return { children };
}

export default ShouldNotSubscribeAgainProtect;
