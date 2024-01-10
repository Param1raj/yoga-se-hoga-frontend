"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Next13ProgressBar
        height="4px"
        color="#5F2C70"
        // options={{ showSpinner: true }}
        showOnShallow
      />
      {children}
    </>
  );
};

export default Providers;
