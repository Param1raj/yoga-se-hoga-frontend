import React from "react";
import style from "./page.module.css";
import Admin from "@/components/Admin/Admin";
export const metadata = {
  title: "Admin Login",
  description: "Watch videos in details!",
};
function page() {
  return (
    <div className={style.main}>
      <Admin />
    </div>
  );
}

export default page;
