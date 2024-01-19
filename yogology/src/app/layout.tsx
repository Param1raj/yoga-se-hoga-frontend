import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";
import App from "./app";
import QueryProvider from "./QueryProvider";
import ProgressbarProvider from "@/src/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Yogaratha ",
  description: "Your online yoga institute!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <QueryProvider>
            <ProgressbarProvider>
              <App>{children}</App>
            </ProgressbarProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
