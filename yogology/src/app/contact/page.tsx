// import Image from "next/image";
"use client";
import Contactus from "@/components/ContactUs/Contactus";
import styles from "../page.module.css";
import PageHeader from "@/components/PageHeader/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader title="Contact Us" linkData={[{ name: "Home", link: "/" }]} />
      <Contactus />
    </main>
  );
}
