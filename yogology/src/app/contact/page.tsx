// import Image from "next/image";
"use client";
import HoverInput from "@/components/HoverInput";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import PageHeader from "@/components/PageHeader/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader title="Contact Us" linkData={[{ name: "Home", link: "/" }]} />

      <Box height={"3rem"} width={"100%"}></Box>
    </main>
  );
}
