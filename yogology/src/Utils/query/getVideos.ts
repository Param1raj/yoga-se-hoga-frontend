"use client";
import axios from "axios";
import { All_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

// this is for admin page on video pannel
export const getVideos = async (page: number) => {
  const skip = (page - 1) * 10;
  return await axios.get(All_Video + `?skip=${skip}&limit=10`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${
        Cookies.get(envs.ADMIN_COOKIE_KEY) || Cookies.get(envs.USER_COOKIE_KEY)
      }`,
    },
  });
};
