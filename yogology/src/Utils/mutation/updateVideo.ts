"use client";
import axios from "axios";
import { Update_Video } from "../../../apis";
import { Video } from "@/components/Admin/pannel/tables/VideoTable";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export const updateVideo = async (data: Video) => {
  console.log(data, "dataon updateing............................");
  return axios.patch(
    Update_Video + `/${data._id}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
      },
    }
  );
};
