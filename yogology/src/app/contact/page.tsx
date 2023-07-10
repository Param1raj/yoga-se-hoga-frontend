// import Image from "next/image";
"use client";
import HoverInput from "@/components/HoverInput";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";
import PageHeader from "@/components/PageHeader/Header";

export default function Home() {
  const handleChange = () => {};
  return (
    <main className={styles.main}>
      <PageHeader title="Contact Us" linkData={[{ name: "Home", link: "/" }]} />
      <Box
        height={{ sm: "60rem", md: "50rem" }}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // border={"1px solid black"}
      >
        <Grid
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr",
            md: "40% 60%",
            lg: "repeat(2,1fr)",
          }}
          gridTemplateRows={{ xs: "20% 80%", sm: "20% 80%", md: "100%" }}
          width={{ xs: "85%", sm: "80%", md: "80%", lg: "70%", xl: "60%" }}
          height={{ xs: "90%", sm: "90%", md: "80%" }}
          // border={"1px solid black"}
        >
          <Grid>
            <Stack
              // border={"1px solid black"}
              spacing={"20px"}
              padding={{ xs: "35px", sm: "35px", md: "0px" }}
            >
              <Typography
                fontFamily={["Nunito", "sans-serif"]}
                fontSize={"0.8rem"}
                fontWeight={"600"}
                textTransform={"uppercase"}
                variant="h2"
                component={"h2"}
              >
                Contact us
              </Typography>
              <Stack>
                <Typography
                  fontWeight={"700"}
                  fontSize={{
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.0rem",
                    lg: "2.5rem",
                  }}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  letterSpacing={"-0.9px"}
                  lineHeight={"2.5rem"}
                >
                  Want to join us?{" "}
                </Typography>
                <Typography
                  fontWeight={"700"}
                  fontSize={{
                    xs: "1.7rem",
                    sm: "2rem",
                    md: "2.0rem",
                    lg: "2.5rem",
                  }}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  letterSpacing={"-0.9px"}
                  lineHeight={"2.5rem"}
                >
                  Get in touch!{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            // item
            // xs={6}
            // border={"1px solid black"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Stack
              width={{ xs: "95%", sm: "90%" }}
              height={{ xs: "90%", sm: "96%" }}
              sx={{ background: "#FFFFFF" }}
              padding={{ xs: "40px", sm: "50px" }}
              spacing={"40px"}
            >
              <HoverInput
                width={"100%"}
                label={"Name"}
                handleChange={handleChange}
                name="name"
              />
              <HoverInput
                width={"100%"}
                label={"Phone"}
                handleChange={handleChange}
                name="phone"
              />
              <HoverInput
                width={"100%"}
                label={"Email"}
                handleChange={handleChange}
                name="email"
              />
              <HoverInput
                width={"100%"}
                label={"Subject"}
                handleChange={handleChange}
                name="subject"
              />
              <HoverInput
                width={"100%"}
                label={"How can help you? feel free to get in touch!"}
                handleChange={handleChange}
                name="query"
              />
              <ButtonComp text="Get in touch" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box height={"3rem"} width={"100%"}></Box>
    </main>
  );
}
