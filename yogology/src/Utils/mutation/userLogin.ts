"use client";

import axios from "axios";
import { User_Login } from "../../../apis";
// import Cookies from "js-cookie";

export type UserInput = {
  email: string;
  password?: string;
  uid?: string;
};

export const userLogin = async (data: UserInput, type: string) => {
  return await axios.post(
    User_Login + `/${type}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
