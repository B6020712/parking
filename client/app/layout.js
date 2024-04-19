import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project01",
  description: "project01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-sky-50">
      <body className={inter.className}>
        <div className="max-w-5xl mx-auto p-4">
          <Navbar />
          <div className="mt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
