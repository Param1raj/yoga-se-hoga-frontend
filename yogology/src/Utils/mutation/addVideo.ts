"use client";

import axios from "axios";
import { Create_Video } from "../../../apis";
import Cookies from "js-cookie";
import { envs } from "../config/envs";

export type VideoInput = {
  title: string;
  thumbnail: string;
  Short_description: string;
  Long_description: string;
  isSolution: boolean;
  isPaid: boolean;
  category: string;
  url: string;
};

export const addVideos = async (data: VideoInput) => {
  return await axios.post(
    Create_Video,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${Cookies.get(envs.ADMIN_COOKIE_KEY)}`,
      },
    }
  );
};
