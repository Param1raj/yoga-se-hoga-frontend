"use client";
import React from "react";
import style from "./page.module.css";
import Header from "@/components/Video/Subscribe/Header";
import Body from "@/components/Video/Subscribe/Body/Body";

const VideoList = [
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
];
function Page() {
  return (
    <div className={style.main}>
      <Header />
      <Body />
    </div>
  );
}

export default Page;
