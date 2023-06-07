import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

export const metadata = {
  title: "Social Media Feed",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex  flex-col justify-center max-w-2xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
