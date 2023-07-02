// import Image from "next/image";
"use client";
import HoverInput from "@/components/HoverInput";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import ButtonComp from "@/components/ButtonComp";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"40rem"}
        width={"100%"}
        sx={{
          background: "#fff",
        }}
      >
        <Stack rowGap={"-20px"}>
          <Typography
            variant="h1"
            fontWeight={"700"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontSize={"2.9rem"}
            component={"h1"}
            color={"#322038"}
          >
            Contacts
          </Typography>
          <Breadcrumbs
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography>Contacts</Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
      <Box
        height={"50rem"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container width={"60%"} height={"80%"}>
          <Grid item xs={6}>
            <Stack spacing={"20px"}>
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
                  fontSize={"2.5rem"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  letterSpacing={"-0.9px"}
                  lineHeight={"2.5rem"}
                >
                  Want to join us?{" "}
                </Typography>
                <Typography
                  fontWeight={"700"}
                  fontSize={"2.5rem"}
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
            item
            xs={6}
            // border={"1px solid black"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Stack
              width={"90%"}
              height={"96%"}
              sx={{ background: "#FFFFFF" }}
              padding={"50px"}
              spacing={"40px"}
            >
              <HoverInput width={"100%"} label={"Name"} />
              <HoverInput width={"100%"} label={"Phone"} />
              <HoverInput width={"100%"} label={"Email"} />
              <HoverInput width={"100%"} label={"Subject"} />
              <HoverInput
                width={"100%"}
                label={"How can help you? feel free to get in touch!"}
                // label=""
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
