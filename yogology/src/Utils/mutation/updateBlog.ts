"use client";
import axios from "axios";
import { BlogRoute } from "../../../apis";
import Blog from "@/components/Blogs/Blog";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const updateBlog = async (data: Blog) => {
  return axios.patch(
    BlogRoute + `/${data._id}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
      },
    }
  );
};
