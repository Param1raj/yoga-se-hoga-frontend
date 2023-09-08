"use client";
import axios from "axios";
import { Delete_User } from "../../../apis.";
import Cookies from "js-cookie";

export const deleteUser = async (_id: string) => {
  return await axios.delete(Delete_User + `/${_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get("a_d_t")}`,
    },
  });
};
