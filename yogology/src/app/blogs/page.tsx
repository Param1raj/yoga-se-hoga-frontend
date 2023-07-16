// import Image from "next/image";
"use client";
import HoverImage from "@/components/Home/WhatWeDo/HoverImage";
import styles from "../page.module.css";
import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import PageHeader from "@/components/PageHeader/Header";
import { useRouter } from "next/navigation";
import { HoverScaleImage, ToLeftTextAnimation } from "@/components/Blogs/utils";
import BlogCardReverse from "@/components/Blogs/BlogCardReverse";
import BlogCard from "@/components/Blogs/BlogCard";
const demoArray = [1, 2, 3, 4];

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <PageHeader title="Blogs" linkData={[{ name: "Home", link: "/" }]} />
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
    </main>
  );
}
