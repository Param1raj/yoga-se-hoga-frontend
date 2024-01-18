"use client";
import React, { useEffect, useState } from "react";
import style from "../../page.module.css";
import { Box, Stack, Typography } from "@mui/material";
import PageHeader from "@/src/components/PageHeader/Header";
import BackgrooundImage from "@/assets//images/BlogImage.jpeg";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { getBlog } from "@/src/Utils/query/getBlog";

type Content = {
  heading: string;
  paragraphs: string[];
};

type Blog = {
  _id: string;
  imageUrl: string;
  heading: string;
  introduction: string[];
  blogContent: Content[];
};

let blogData: Blog = {
  imageUrl: "",
  _id: "",
  heading: "",
  introduction: [""],
  blogContent: [{ heading: "", paragraphs: [""] }],
};
function Page() {
  // const [blogName, setBlogName] = useState("Blog1");
  const uuid = usePathname().split("/")[2];

  const { isSuccess, isError, isLoading, data } = useQuery({
    queryFn: async () => {
      return await getBlog(uuid);
    },
    queryKey: [uuid],
  });

  // useEffect(() => {}, [isSuccess]);
  if (isSuccess) {
    blogData = data.data.data.blog;
    console.log(blogData, ":blog");
  }
  if (isError) {
    console.log("error");
  }

  return (
    <main className={style.main}>
      <PageHeader
        backgroundImage={blogData.imageUrl}
        title={blogData.heading}
        linkData={[
          { name: "Home", link: "/" },
          { name: "Blogs", link: "/blogs" },
        ]}
      ></PageHeader>
      <Box
        // border={"1px solid red"}
        width={"100%"}
        height={"fit-content"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={{ xs: "30px", sm: "100px" }}
      >
        <Stack
          width={{ xs: "95%", md: "80%" }}
          height={"fit-content"}
          spacing={"20px"}
          // border={"1px solid blue"}
        >
          {blogData.introduction.map((text, index) => (
            <Typography
              variant="body1"
              component={"p"}
              key={text}
              color={"#847988"}
              fontSize={"1.06rem"}
              fontFamily={["Nunito", "sans-serif"]}
              sx={{
                ":first-letter":
                  index === 0
                    ? {
                        fontWeight: "700",
                        fontSize: "3.5rem",
                        color: "black",
                        // position: "relative",
                        // top: "50px",
                        lineHeight: "3.9rem",
                      }
                    : {},
              }}
            >
              {text}
            </Typography>
          ))}
          {blogData.blogContent.map(({ heading, paragraphs }) => (
            <>
              <Typography
                variant="body1"
                component={"p"}
                color={"#322038"}
                key={heading}
                fontSize={"1.41631rem"}
                fontWeight={"700"}
                letterSpacing={"-0.015rem"}
                fontFamily={["Nunito", "sans-serif"]}
              >
                {heading}
              </Typography>
              {paragraphs.map((text, index) => (
                <Typography
                  key={text}
                  variant="body1"
                  component={"p"}
                  color={"#847988"}
                  fontSize={"1.06rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  sx={{
                    ":first-letter":
                      index === 0
                        ? {
                            fontWeight: "700",
                            fontSize: "3.5rem",
                            color: "black",
                            // position: "relative",
                            // top: "50px",
                            lineHeight: "3.9rem",
                          }
                        : {},
                  }}
                >
                  {text}
                </Typography>
              ))}
            </>
          ))}
        </Stack>
      </Box>
    </main>
  );
}

export default Page;
