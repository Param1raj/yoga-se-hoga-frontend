"use client";
import axios from "axios";
import { Videos } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getMeditationVideos = async (page: number) => {
  const skip = (page - 1) * 10;
  console.log("env-user-key:", process.env.ADMIN_COOKIE_KEY);
  return await axios.get(Videos + `?type=Meditation&skip=${skip}&limit=10`, {
    method: "GET",
    data: {
      skip: (page - 1) * 10,
      limit: 10,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${
        Cookies.get(envs.USER_COOKIE_KEY) || Cookies.get(envs.ADMIN_COOKIE_KEY)
      }`,
    },
  });
};
