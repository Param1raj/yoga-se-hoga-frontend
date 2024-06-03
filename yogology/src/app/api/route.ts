import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

export const POST = async (req: Request) => {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID || "",
    key_secret: process.env.NEXT_PUBLIC_KEY_SECRET,
  });
  const payment_capture = 1;
  const amount = 700;
  const currency = "INR";
  const options = {
    amount: (amount * 100).toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response, "responce");
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log("this is the error", err);
    return NextResponse.json({ status: 404, err });
  }
};
