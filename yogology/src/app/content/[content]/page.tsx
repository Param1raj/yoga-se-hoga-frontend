"use client";

import LoginProtects from "@/app/RouteProtects/LoginProtects";
import Content from "@/components/Content/Content/Content";
import React from "react";
// import meditation from

function Page() {
  return (
    <div style={{ marginTop: "80px" }}>
      {/* <LoginProtects> */}
      <Content />
      {/* </LoginProtects> */}
    </div>
  );
}

export default Page;
