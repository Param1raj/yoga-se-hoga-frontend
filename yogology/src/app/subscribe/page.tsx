import React from "react";
import style from "./page.module.css";
import Header from "@/src/components/Video/Subscribe/Header";
import Body from "@/src/components/Video/Subscribe/Body/Body";
export const metadata = {
  title: "Yogaratha - Subscribe",
  description: "Watch videos in details!",
};

function Page() {
  return (
    <div className={style.main}>
      <Header />
      <Body />
    </div>
  );
}

export default Page;
