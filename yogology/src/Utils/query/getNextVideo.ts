"use client";
import axios from "axios";
import { Get_Next_Video } from "../../../apis";
import Cookies from "js-cookie";

export const getNextVideo = async (category: string, _id: string) => {
  return await axios.get(Get_Next_Video + `/${category}?_id=${_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t")}`,
    },
  });
};
