"use client";
import axios from "axios";
import { BlogRoute } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const deleteBlog = async (_id: string) => {
  return await axios.delete(BlogRoute + `/${_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
    },
  });
};
