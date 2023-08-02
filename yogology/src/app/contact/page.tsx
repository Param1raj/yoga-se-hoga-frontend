import Contactus from "@/components/ContactUs/Contactus";
import styles from "../page.module.css";
import PageHeader from "@/components/PageHeader/Header";

export const metadata = {
  title: "Yogaratha - Contact",
  description: "Contact us to find our best!",
};
export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader title="Contact Us" linkData={[{ name: "Home", link: "/" }]} />
      <Contactus />
    </main>
  );
}
