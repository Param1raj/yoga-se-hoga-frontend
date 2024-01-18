import PageHeader from "@/src/components/PageHeader/Header";
import styles from "../page.module.css";
// import { useRouter } from "next/navigation";
import Blog from "@/src/components/Blogs/Blog";

export const metadata = {
  title: "Yogaratha - Blogs",
  description: "Find our best blogs!",
};
export default function Home() {
  // const router = useRouter();
  return (
    <main className={styles.main}>
      <PageHeader title="Blogs" linkData={[{ name: "Home", link: "/" }]} />
      <Blog />
    </main>
  );
}
