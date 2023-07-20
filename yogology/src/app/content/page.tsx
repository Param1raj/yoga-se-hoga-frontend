import React from "react";
import style from "./page.module.css";
import { Content } from "@/components/Content/Content";

function Page() {
  return (
    <div className={style.main}>
      <Content />
    </div>
  );
}

export default Page;
