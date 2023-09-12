"use client";
import axios from "axios";
import { first_Video } from "../../../apis";
import Cookies from "js-cookie";

export const getFirstVideoByCategory = async (category: string) => {
  return await axios.get(first_Video + `?category=${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_t_t")}`,
    },
  });
};
