import styles from "../page.module.css";
import PageHeader from "@/components/PageHeader/Header";
import Feedback from "@/components/About/Feedback/Feedback";
import Services from "@/components/About/Services/Services";
export const metadata = {
  title: "Yogaratha - About",
  description: "Find more about us!",
};
export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader title="Who We Are" linkData={[{ name: "Home", link: "/" }]} />
      <Services />

      <Feedback />
    </main>
  );
}
