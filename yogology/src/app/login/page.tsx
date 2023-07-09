import React from "react";
import style from "./page.module.css";
import background from "../../assets/images/loginbackground.jpg";
import LoginSgnup from "@/components/Login&Signup/Login&Signup";
function Login() {
  return (
    <div className={style.main}>
      <LoginSgnup image={background.src} isForLogin={true} />
    </div>
  );
}

export default Login;
