"use client";
import axios from "axios";
import { BlogRoute } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getBlogs = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  console.log(skip, "skip");
  console.log(process.env.NEXT_PUBLIC_ADMIN_COOKIE_KEY, "###ADMIN###");
  console.log(process.env.NEXT_PUBLIC_USER_COOKIE_KEY, "###USER###");
  return await axios.get(BlogRoute + `?skip=${skip}&&limit=${limit}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
