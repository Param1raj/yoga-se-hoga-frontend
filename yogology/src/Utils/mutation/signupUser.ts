"use client";

import axios from "axios";
import { User_Login, User_Signup } from "../../../apis";
// import Cookies from "js-cookie";

export type UserSignupInput = {
  email: string;
  password?: string;
  name: string;
  phone?: string;
  uid?: string;
};

export const userSignup = async (data: UserSignupInput, type: string) => {
  return await axios.post(
    User_Signup + `/${type}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
