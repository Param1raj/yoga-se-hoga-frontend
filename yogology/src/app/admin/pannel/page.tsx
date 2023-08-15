// import { MainListItems } from "@/components/Admin/pannel/sideList";
import React from "react";
import style from "./page.module.css";
import Pannel from "@/components/Admin/pannel/Pannel";
export const metadata = {
  title: "Admin - Dashboard",
  description: "Admin Dashboard for management",
};

function page() {
  return <Pannel />;
}

export default page;
