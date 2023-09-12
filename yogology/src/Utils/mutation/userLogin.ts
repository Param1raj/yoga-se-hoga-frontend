"use client";

import axios from "axios";
import { User_Login } from "../../../apis";
// import Cookies from "js-cookie";

export type UserInput = {
  email: string;
  password: string;
};

export const userLogin = async (data: UserInput) => {
  return await axios.post(
    User_Login,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
