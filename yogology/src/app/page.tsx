"use client";
import Header from "@/components/Home/Header/Header";
import styles from "./page.module.css";
import VideoBaner from "../components/Home/Videobanne/VideoBaner";
import YogaQuetes from "@/components/Home/YogaQuetes/YogaQuetes";
import CardContainer from "@/components/Home/ServiceCards/CardContainer";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import WhatWeDo from "@/components/Home/WhatWeDo/WhatWeDo";
import Careers from "@/components/Home/Careers/Careers";
import EmailSubscrib from "@/components/Home/EmailSubscrib/EmailSubscrib";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import ParticleComp from "@/components/Particle";

export default function Home() {
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
