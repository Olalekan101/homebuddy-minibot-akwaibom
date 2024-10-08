import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import TelegramWapper from "@/modules/TelegramWapper";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";


const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <TelegramWapper>
        {children}
        </TelegramWapper>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
