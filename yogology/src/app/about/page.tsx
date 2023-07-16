"use client";
import styles from "../page.module.css";
import { Stack, Typography } from "@mui/material";
import PageHeader from "@/components/PageHeader/Header";
import Gallery from "@/components/About/Gallery/Gallery";
import Feedback from "@/components/About/Feedback/Feedback";
import Services from "@/components/About/Services/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader title="Who We Are" linkData={[{ name: "Home", link: "/" }]} />
      <Services />
      <Stack
        height={{ xs: "100rem", sm: "83rem" }}
        width={"100%"}
        sx={{ background: "#FFFFFF" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          color={"#322038"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={"0.8rem"}
          textTransform={"uppercase"}
          fontWeight={"700"}
        >
          Portfolio
        </Typography>
        <Typography
          color={"#322038"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={{ xs: "2rem", sm: "2.93781rem" }}
          // textTransform={"uppercase"}
          fontWeight={"700"}
        >
          Our memories
        </Typography>
        <Gallery />
      </Stack>
      <Feedback />
    </main>
  );
}
