import Subscribers from "@/src/components/Admin/pannel/subscribers/subscribers";
import React from "react";

export const metadata = {
  title: "Admin - Subscribers",
  description: "Admin Dashboard for management",
};
function page() {
  return (
    <div
      style={{
        height: "90.5vh",
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}
    >
      <Subscribers />
    </div>
  );
}

export default page;
