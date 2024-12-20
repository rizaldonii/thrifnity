import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-custom-white text-black font-inter"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
