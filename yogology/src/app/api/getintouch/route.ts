// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_iYg8bCoE_9SiiTPPZzbsjqPigHHQYvr2i");

export const POST = async (req: Request | NextRequest) => {
  const body = req.body;
  let reader = await body?.getReader().read();
  let uint8Array;
  if (reader && reader.value) {
    uint8Array = new Uint8Array(reader.value);
  }
  const decoder = new TextDecoder();
  const data = JSON.parse(decoder.decode(uint8Array));
  // console.log("data----->", data);
  console.log({
    name: data.name,
    last_name: data.last_name,
    email: data.email,
  });
  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kumarmanish303@gmail.com",
      subject: "Get In Touch",
      html: `<p style="font-size:20px;">Congrats on getting a new person wants to <strong>GET IN TOUCH with you</strong>!</p>
             <p style="font-weight:bold;font-size:15px;">Name: ${
               data.name + " " + data.last_name
             }<p/><p style="font-weight:bold;font-size:15px;">Email: ${
        data.email
      }<p/>`,
    });
    return NextResponse.json({
      status: 200,
      message: "Ok",
    });
  } catch (err) {
    console.log("this is the error for sending email", err);
    return NextResponse.json({ status: 404, err });
  }
};
