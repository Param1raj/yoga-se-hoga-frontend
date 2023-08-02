"use client";
import React from "react";
import {
  Box,
  //  Breadcrumbs, Grid, Link, Stack, Typography
} from "@mui/material";
// import { motion } from "framer-motion";
// import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
// import { HoverScaleImage, ToLeftTextAnimation } from "./utils";
import BlogCardReverse from "@/components/Blogs/BlogCardReverse";
import BlogCard from "@/components/Blogs/BlogCard";
import { useRouter } from "next/navigation";

const demoArray = [1, 2, 3, 4];
function Blog() {
  const router = useRouter();
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={{ xs: "97%", sm: "95%", md: "95%", lg: "90%", xl: "70%" }}
        height={"100%"}
        overflow={"scroll"}
        sx={{
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "1px",
          },
        }}
        // border={"1px solid black"}
        padding={{ x: "5px", sm: "10px", md: "10px", lg: "30px" }}
      >
        {demoArray.map((data, index) => (
          <Box
            key={data}
            height={{ xs: "60%", sm: "60%", md: "50%" }}
            marginBottom={{ xs: "160px", md: "50px" }}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/blogs/${data}`);
            }}
          >
            {index % 2 == 0 ? (
              <BlogCardReverse
                title="The difference between mindful practice and meditation"
                description="Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
            Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer…"
                date="Apr 26, 2023"
              />
            ) : (
              <BlogCard
                title="The difference between mindful practice and meditation"
                description="Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
          Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
          accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer…"
                date="Apr 26, 2023"
              />
            )}
            {/* </Grid> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Blog;
