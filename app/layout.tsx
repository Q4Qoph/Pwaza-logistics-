import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pweza Logistics – Smart Logistics. Seamless Connections.",
  description:
    "Modern logistics and supply chain company in East Africa. Freight forwarding, customs clearance, warehousing, and last-mile delivery.",
  openGraph: {
    title: "Pweza Logistics",
    description: "Smart Logistics. Seamless Connections.",
    url: "https://pwezalogistics.com",
    siteName: "Pweza Logistics",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
