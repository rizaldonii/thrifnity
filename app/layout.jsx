import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-custom-white text-black font-inter"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
