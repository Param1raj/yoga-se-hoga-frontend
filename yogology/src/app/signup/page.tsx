"use client";
import React from "react";
import style from "./page.module.css";
import LoginSgnup from "@/components/Login&Signup/Login&Signup";
import background from "../../assets/images/singupbackground1.jpg";
function page() {
  return (
    <div className={style.main}>
      <LoginSgnup image={background.src} isForLogin={false} />
    </div>
  );
}

export default page;
