"use client";

import LoginProtects from "@/src/app/RouteProtects/LoginProtects";
import Content from "@/src/components/Content/Content/Content";
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
