"use client";
import { Box, Breadcrumbs, Stack, Typography, Link } from "@mui/material";
import React from "react";

type HeaderProps = {
  backgroundImage?: string;
  title: string;
  linkData: {
    name: string;
    link: string;
  }[];
};

function PageHeader({ backgroundImage, title, linkData }: HeaderProps) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={{ xs: "20rem", sm: "35rem" }}
      width={"100%"}
      sx={{
        background: backgroundImage ? `url('${backgroundImage}')` : "white",
        backgroundSize: backgroundImage ? "cover" : "",
        backgroundRepeat: backgroundImage ? "no-repeat" : "",
        backgroundPosition: backgroundImage ? "center" : "",
        filter: backgroundImage ? "brightness(0.5)" : "none",
      }}
    >
      <Stack rowGap={"-10px"} width={{ xs: "95%", sm: "95%", md: "70%" }}>
        <Typography
          variant="h1"
          fontWeight={"700"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={{
            xs: "1.5rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.9rem",
            xl: "2.9rem",
          }}
          component={"h1"}
          color={backgroundImage ? "#322038" : "#322038"}
          sx={{ filter: "brightness(2)" }}
          textAlign={"center"}
        >
          {title ? title : "Who We Are"}
        </Typography>
        <Breadcrumbs
          sx={{
            width: "100%",
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            // textAlign: "center",
            alignItems: "cemter",
            flexWrap: "wrap",
            // border: "1px solid black",
            // textDecoration:'wra'
          }}
        >
          {linkData.map(({ link, name }) => (
            <Link
              key={name}
              underline="hover"
              href={link}
              color={backgroundImage ? "#322038" : ""}
            >
              {name}
            </Link>
          ))}

          <Typography
            color={backgroundImage ? "#322038" : ""}
            textAlign={"center"}
            sx={{ textWrap: "wrap" }}
          >
            {title}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
}

export default PageHeader;
