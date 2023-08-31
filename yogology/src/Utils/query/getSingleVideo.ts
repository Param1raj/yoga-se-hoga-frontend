"use client";
import axios from "axios";
import { All_Video, Base_Single_Video } from "../../../apis.";
import Cookies from "js-cookie";

export const getSingleVideo = async (uuid: string) => {
  // const skip = (page - 1) * 10;
  return await axios.get(Base_Single_Video + `/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t") || Cookies.get("a_d_t")}`,
    },
  });
};
