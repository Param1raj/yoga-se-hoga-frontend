import React from "react";
import style from "./page.module.css";
import { Content } from "@/components/Content/Content";
export const metadata = {
  title: "Yogaratha - Content",
  description: "Your online yoga institute!",
};

function Page() {
  return (
    <>
      <div className={style.main}>
        {/* <iframe
        width="5%"
        height="5%"
        src={"https://www.youtube.com/embed/ksY3wb4vtlA"}
        title="Asteya"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media;  picture-in-picture;"
        allowFullScreen
        autoCapitalize="true"
        // autoFocus
      ></iframe> */}
        <Content />
      </div>
    </>
  );
}

export default Page;
