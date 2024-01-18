// "use client";
import React from "react";
import style from "./page.module.css";
import LoginSgnup from "@/src/components/Login&Signup/Login&Signup";
import background from "@/assets/images/singupbackground1.jpg";
export const metadata = {
  title: "Yogaratha - Sign up",
  description: "Watch videos in details!",
};

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
