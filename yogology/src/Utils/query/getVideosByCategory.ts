"use client";
import axios from "axios";
import { All_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getVideosByCategory = async (category: string) => {
  // const skip = (page - 1) * 10;
  return await axios.get(All_Video + `?cat=${category}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${
        Cookies.get(envs.USER_COOKIE_KEY) || Cookies.get(envs.ADMIN_COOKIE_KEY)
      }`,
    },
  });
};
