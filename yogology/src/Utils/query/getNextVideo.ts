"use client";
import axios from "axios";
import { Get_Next_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const getNextVideo = async (category: string, _id: string) => {
  return await axios.get(Get_Next_Video + `/${category}?_id=${_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get(envs.USER_COOKIE_KEY)}`,
    },
  });
};
