"use client";
import axios from "axios";
import { Add_Blog } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export type Content = {
  heading: string;
  paragraphs: string[];
};
export type Blog = {
  heading: string;
  imageUrl: string;
  introduction: string[];
  blogContent: Content[];
};

export const addBlog = async (Blog: Blog) => {
  return await axios.post(
    Add_Blog,
    { ...Blog },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
      },
    }
  );
};
