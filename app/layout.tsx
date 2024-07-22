import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],  
  style: ['normal', 'italic'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Akram ameublement",
  description: "akram ameublement à marrakech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header className="w-full flex items-center justify-center my-3">
            <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
