"use client";

import LoginProtects from "@/Utils/RouteProtects/LoginProtects";
import Content from "@/components/Content/Content/Content";
import { useParams } from "next/navigation";
import React from "react";
// import meditation from

function page() {
  const { content } = useParams();
  return (
    <div style={{ marginTop: "80px" }}>
      <LoginProtects>
        <Content contentType={content} />
      </LoginProtects>
    </div>
  );
}

export default page;
