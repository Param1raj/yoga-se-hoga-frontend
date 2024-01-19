"use client";
import React from "react";
import Sidebar from "@/src/components/Admin/pannel/Sidebar";
import { Box } from "@mui/material";
import Providers from "@/src/components/Provider";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Providers>{children}</Providers>
    </Box>
  );
}
