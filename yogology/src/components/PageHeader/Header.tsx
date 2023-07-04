import { Box, Breadcrumbs, Stack, Typography, Link } from "@mui/material";
// import  from "next/link";
import React from "react";

type HeaderProps = {
  backgroundImage: string;
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
      height={"35rem"}
      width={"100%"}
      sx={{
        background: backgroundImage ? `url('${backgroundImage}')` : "black",
        backgroundSize: backgroundImage ? "cover" : "",
        backgroundRepeat: backgroundImage ? "no-repeat" : "",
        backgroundPositionY: backgroundImage ? "-220px" : "",
        filter: "brightness(0.5)",
      }}
    >
      <Stack rowGap={"-10px"} width={"70%"}>
        <Typography
          variant="h1"
          fontWeight={"700"}
          fontFamily={["Kumbh Sans", "sans-serif"]}
          fontSize={"2.9rem"}
          component={"h1"}
          color={backgroundImage ? "#000" : "#322038"}
          sx={{ filter: "brightness(2)" }}
          textAlign={"center"}
        >
          {title ? title : "Who We Are"}
        </Typography>
        <Breadcrumbs
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {linkData.map(({ link, name }) => (
            <Link
              underline="hover"
              href={link}
              color={backgroundImage ? "#FFF" : ""}
            >
              {name}
            </Link>
          ))}

          <Typography
            color={backgroundImage ? "#FFF" : ""}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
}

export default PageHeader;
