"use client";
import React from "react";
import Sidebar from "@/src/components/Admin/pannel/Sidebar";
import { Box } from "@mui/material";
import Providers from "@/src/components/Provider";
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box >
      <Providers>
        <Sidebar>{children}</Sidebar>
      </Providers>
    </Box>
  );
}
