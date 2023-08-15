"use client";
import { usePathname } from "next/navigation";
import React from "react";

function Pannel() {
  const pathName = usePathname();
  console.log(pathName, "+++++++++++++++++Path Name++++++++++++++++");
  return <div></div>;
}

export default Pannel;
