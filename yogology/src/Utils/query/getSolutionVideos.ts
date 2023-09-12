"use client";
import axios from "axios";
import { All_Video } from "../../../apis";
import Cookies from "js-cookie";

export const getSolutionVideos = async (page: number) => {
  const skip = (page - 1) * 10;
  return await axios.get(All_Video + `?skip=${skip}&limit=10&solution=true`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t")}`,
    },
  });
};
