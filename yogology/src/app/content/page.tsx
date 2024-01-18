import React from "react";
import style from "./page.module.css";
import { Content } from "@/src/components/Content/Content";
import LoginProtects from "../RouteProtects/LoginProtects";
// import LoginProtects from "@/src/Utils/RouteProtects/LoginProtects";
// import SubscriptionProtect from "@/src/Utils/RouteProtects/SubscriptionProtect";
export const metadata = {
  title: "Yogaratha - Content",
  description: "Your online yoga institute!",
};

function Page() {
  return (
    // <>
    <div className={style.main}>
      {/* <LoginProtects> */}
      <Content />
      {/* </LoginProtects>  */}
    </div>
    // </>
  );
}

export default Page;
