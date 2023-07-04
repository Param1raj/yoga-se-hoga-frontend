import React from "react";
import styles from "./page.module.css";
import background from "../../assets/images/loginbackground.jpg";
import LoginSgnup from "@/components/Login&Signup/Login&Signup";
function Login() {

  return (
    <div className={styles.main}>
      <LoginSgnup image={background.src} isForLogin={true} />
    </div>
  );
}

export default Login;
