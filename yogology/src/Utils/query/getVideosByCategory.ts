"use client";
import axios from "axios";
import { All_Video } from "../../../apis";
import Cookies from "js-cookie";

export const getVideosByCategory = async (category: string) => {
  // const skip = (page - 1) * 10;
  return await axios.get(All_Video + `?cat=${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t")}`,
    },
  });
};
