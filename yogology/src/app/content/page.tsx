import React from "react";
import style from "./page.module.css";
import { Content } from "@/components/Content/Content";
import LoginProtects from "../RouteProtects/LoginProtects";
// import LoginProtects from "@/Utils/RouteProtects/LoginProtects";
// import SubscriptionProtect from "@/Utils/RouteProtects/SubscriptionProtect";
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
