// import { env } from "node:process";

export const envs = {
  KEY_ID: process.env.NEXT_PUBLIC_KEY_ID || "",
  KEY_SECRET: process.env.NEXT_PUBLIC_KEY_SECRET || "",
  RAZORPAY_URI: process.env.NEXT_PUBLIC_RAZORPAY_URI || "",
  RESEND_KEY: process.env.NEXT_PUBLIC_RESEND_KEY || "",
  ADMIN_COOKIE_KEY: process.env.NEXT_PUBLIC_ADMIN_COOKIE_KEY ?? "",
  USER_COOKIE_KEY: process.env.NEXT_PUBLIC_USER_COOKIE_KEY ?? "",
  API_KEY: process.env.NEXT_PUBLIC_GOOGLE_AUTH_API_KEY ?? "",
  DOMAIN: process.env.NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN ?? "",
  PROJECT_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_PROJECT_ID ?? "",
  STORAGE_BUCKET: process.env.NEXT_PUBLIC_GOOGLE_AUTH_STORAGE_BUCKET ?? "",
  MESSAGING_SENDER_ID:
    process.env.NEXT_PUBLIC_GOOGLE_AUTH_MESSAGING_SENDER_ID ?? "",
  APP_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_APP_ID ?? "",
  MEASUREMENT_ID: process.env.NEXT_PUBLIC_GOOGLE_AUTH_MEASUREMENT_ID ?? "",
};
