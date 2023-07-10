"use client";
import React from "react";
import style from "./page.module.css";
import LoginSgnup from "@/components/Login&Signup/Login&Signup";
import background from "../../assets/images/singupbackground1.jpg";
function Page() {
  return (
    <div className={style.main}>
      <LoginSgnup
        redirectTo="/login"
        image={background.src}
        isForLogin={false}
      />
    </div>
  );
}

export default Page;
