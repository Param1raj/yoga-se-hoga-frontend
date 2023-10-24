"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Pagination,
  //  Breadcrumbs, Grid, Link, Stack, Typography
} from "@mui/material";
// import { motion } from "framer-motion";
// import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
// import { HoverScaleImage, ToLeftTextAnimation } from "./utils";
import BlogCardReverse from "@/components/Blogs/BlogCardReverse";
import BlogCard from "@/components/Blogs/BlogCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/Utils/query/getBlogs";

const demoArray = [1, 2, 3, 4];
const PageSize = 4;

type Blog = {
  _id: string;
  heading: string;
  introduction: string[];
  createdAt: string;
  imageUrl: string;
  blogContent: [{ heading: string; paragraphs: string[] }];
};
let data: Blog[] = [];
function Blog() {
  let count = PageSize;
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = React.useState<number>(
    +searchParams.toString().split("=")[1]
  );
  const pathName = usePathname();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };

  const {
    isSuccess,
    isError,
    isLoading,
    data: blogData,
  } = useQuery({
    queryFn: async () => {
      return await getBlogs(page, PageSize);
    },
    queryKey: ["blogs", page],
  });

  // useEffect(() => {
  //   console.log("data", blogData?.data?.data);
  // }, [isSuccess]);

  if (isError) {
    return (
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
      >
        <Box
          // key={data}
          marginBottom={{ xs: "160px", md: "50px" }}
          sx={{ cursor: "pointer" }}
        >
          <BlogCard
            title="The difference between mindful practice and meditation"
            description="Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
        Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
        accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer…"
            date={new Date().toUTCString()}
          />
        </Box>
      </Box>
    );
  }

  if (isLoading) {
    return (
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
      >
        <Box
          // key={data}
          marginBottom={{ xs: "160px", md: "50px" }}
          sx={{ cursor: "pointer" }}
        >
          <BlogCard
            title="The difference between mindful practice and meditation"
            description="Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
            Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer…"
            date={new Date().toUTCString()}
            loading={true}
          />
        </Box>
      </Box>
    );
  }

  if (isSuccess) {
    data = blogData.data.data.blogs;
    count = blogData.data.data.count;
    count =
      count % PageSize === 0
        ? count / PageSize
        : Math.round(count / PageSize) + 1;
    console.log(count, ":count");
  }
  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      display={"flex"}
      alignItems={"center"}
      // border={"1px solid red"}
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
        {data.map((data, index) => (
          <Box
            key={data._id}
            height={{ xs: "60%", sm: "60%", md: "50%" }}
            marginBottom={{ xs: "160px", md: "50px" }}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              push(`/blogs/${data._id}`);
            }}
          >
            {index % 2 == 0 ? (
              <BlogCardReverse
                title={data.heading}
                description={data.introduction[0]}
                date={data.createdAt}
                image={data.imageUrl}
              />
            ) : (
              <BlogCard
                title={data.heading}
                description={data.introduction[0]}
                date={data.createdAt}
                image={data.imageUrl}
              />
            )}
            {/* </Grid> */}
          </Box>
        ))}
        <Box
          width={"100%"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          // border={"1px solid red"}
        >
          <Pagination
            count={count}
            size={"large"}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
