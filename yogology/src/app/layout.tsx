import "./globals.css";
import { Inter } from "next/font/google";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YogaRatha",
  description: "Your online yoga institute!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
