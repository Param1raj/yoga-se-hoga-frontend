"use client";
import axios from "axios";
import { All_Users } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getUsers = async (page: number) => {
  const skip = (page - 1) * 10;
  return await axios.get(All_Users + `?skip=${skip}&limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
    },
  });
};
