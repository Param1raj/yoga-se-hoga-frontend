"use client";
import Header from "@/src/components/Home/Header/Header";
import styles from "./page.module.css";
import VideoBaner from "../components/Home/Videobanne/VideoBaner";
import YogaQuetes from "@/src/components/Home/YogaQuetes/YogaQuetes";
import CardContainer from "@/src/components/Home/ServiceCards/CardContainer";
import AboutUs from "@/src/components/Home/AboutUs/AboutUs";
import WhatWeDo from "@/src/components/Home/WhatWeDo/WhatWeDo";
import Careers from "@/src/components/Home/Careers/Careers";
import EmailSubscrib from "@/src/components/Home/EmailSubscrib/EmailSubscrib";
import ContactUs from "@/src/components/Home/ContactUs/ContactUs";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "./AuthProvider";

export default function Home() {
  const { auth } = useContext(AuthContext) as AuthContextType;
  console.log("authentication is here we are doing.", auth);
  return (
    <div className={styles.main}>
      <Header />
      <VideoBaner />
      <YogaQuetes />
      <CardContainer />
      <AboutUs />
      <WhatWeDo />
      <Careers />
      <EmailSubscrib />
      <ContactUs />
    </div>
  );
}
