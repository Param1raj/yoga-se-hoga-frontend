// import { env } from "node:process";

export const envs = {
  KEY_ID: process.env.NEXT_PUBLIC_KEY_ID || "",
  KEY_SECRET: process.env.NEXT_PUBLIC_KEY_SECRET || "",
  RAZORPAY_URI: process.env.NEXT_PUBLIC_RAZORPAY_URI || "",
  RESEND_KEY: process.env.NEXT_PUBLIC_RESEND_KEY || "",
  ADMIN_COOKIE_KEY: process.env.NEXT_PUBLIC_ADMIN_COOKIE_KEY ?? "",
  USER_COOKIE_KEY: process.env.NEXT_PUBLIC_USER_COOKIE_KEY ?? "",
};
