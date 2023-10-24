import axios from "axios";
import { User_Signup } from "../../../apis";
import { AuthenticationType } from "@/components/types";

export type GoogleSignupInput = {
  email: string;
  name: string;
  uid?: string;
};

export const userGoogleSignup = async (data: GoogleSignupInput) => {
  return await axios.post(
    User_Signup + `/${AuthenticationType.google}`,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
