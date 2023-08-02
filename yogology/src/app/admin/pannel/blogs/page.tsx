import Blogs from "@/components/Admin/pannel/blogs/blogs";
import React from "react";

export const metadata = {
  title: "Admin - Blogs",
  description: "Admin Dashboard for management",
};
function page() {
  return (
    <div
      style={{
        height: "91vh",
        display: "flex",
        justifyContent: "center",
        marginTop: "84px",
      }}
    >
      <Blogs />
    </div>
  );
}

export default page;
