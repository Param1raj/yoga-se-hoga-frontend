"use client";
import React, { useState } from "react";
import style from "../../page.module.css";
import { Box, Stack, Typography } from "@mui/material";
import PageHeader from "@/components/PageHeader/Header";
import BackgrooundImage from "../../../assets/images/BlogImage.jpeg";

function Page() {
  const [blogName, setBlogName] = useState("Blog1");
  const [intro, setIntro] = useState([
    "QProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  ]);
  const [content, setContent] = useState([
    {
      heading: "At vero eos et accusam",
      content: [
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
        "Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      heading: "Creative approach to every project",
      content: [
        "Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique, justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique, pulvinar neque at, lobortis tortor.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.",
      ],
    },
  ]);
  return (
    <main className={style.main}>
      <PageHeader
        backgroundImage={BackgrooundImage.src}
        title={"The difference between mindful practice and meditation"}
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
          {intro.map((text, index) => (
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
          {content.map(({ heading, content }) => (
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
              {content.map((text, index) => (
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
