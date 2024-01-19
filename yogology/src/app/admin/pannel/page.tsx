// import { MainListItems } from "@/src/components/Admin/pannel/sideList";
import React from "react";
import style from "./page.module.css";
import Pannel from "@/src/components/Admin/pannel/Pannel";
export const metadata = {
  title: "Admin - Dashboard",
  description: "Admin Dashboard for management",
};

function Page() {
  return <Pannel />;
}

export default Page;
