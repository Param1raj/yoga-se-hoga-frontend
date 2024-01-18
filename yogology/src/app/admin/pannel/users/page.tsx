import Users from "@/src/components/Admin/pannel/users/users";
import React from "react";

export const metadata = {
  title: "Admin - Users",
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
      <Users />
    </div>
  );
}

export default page;
