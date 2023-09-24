"use client";
import axios from "axios";
import { first_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getFirstVideoByCategory = async (category: string) => {
  return await axios.get(first_Video + `?category=${category}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${
        Cookies.get(envs.USER_COOKIE_KEY) || Cookies.get(envs.ADMIN_COOKIE_KEY)
      }`,
    },
  });
};
