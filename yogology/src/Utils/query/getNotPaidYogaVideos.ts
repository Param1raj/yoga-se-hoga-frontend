"use client";
import axios from "axios";
import { All_Free_Videos } from "../../../apis.";
import Cookies from "js-cookie";

export const getNotPaidYogaVideos = async (page: number) => {
  const skip = (page - 1) * 10;
  return await axios.get(All_Free_Videos + `?skip=${skip}&limit=10`, {
    method: "GET",
    data: {
      skip: (page - 1) * 10,
      limit: 10,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t")}`,
    },
  });
};
