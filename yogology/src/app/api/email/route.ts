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
  console.log({
    name: data.name,
    query: data.query,
    email: data.email,
  });
  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kumarmanish303@gmail.com",
      subject: data.subject,
      html: `<p style="font-size:20px;">Congrats on getting a new <strong>Contact</strong>!</p>
             <p style="font-weight:bold;font-size:15px;">Name: ${data.name}<p/><p style="font-weight:bold;font-size:15px;">Email: ${data.email}<p/><p style="font-weight:bold;font-size:15px;">Phone: ${data.phone}<p/><p style="font-size:15px;max-width:100vw">Query: ${data.query}<p/>`,
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
