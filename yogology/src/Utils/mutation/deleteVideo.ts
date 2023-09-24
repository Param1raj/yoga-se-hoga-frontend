"use client";

import axios from "axios";
import { Delete_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const deleteVideo = async (_id: string) => {
  return axios.delete(Delete_Video + `/${_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
    },
  });
};
