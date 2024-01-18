import Videos from "@/src/components/Admin/pannel/videos/videos";
import React from "react";

export const metadata = {
  title: "Admin - Videos",
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
      <Videos />
    </div>
  );
}

export default page;
