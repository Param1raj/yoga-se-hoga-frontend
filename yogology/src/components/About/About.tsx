import React from "react";
import styles from "./About.module.css";
import PageHeader from "../PageHeader/Header";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Feedback from "./Feedback/Feedback";
function About() {
  return (
    <main className={styles.main}>
      <PageHeader title="Who We Are" linkData={[{ name: "Home", link: "/" }]} />
      <Services />
      <Gallery />
      <Feedback />
    </main>
  );
}

export default About;
