import Blogs from "@/src/components/Admin/pannel/blogs/blogs";
import React from "react";

export const metadata = {
  title: "Admin - Blogs",
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
      <Blogs />
    </div>
  );
}

export default page;
