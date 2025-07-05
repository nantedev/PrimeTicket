import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { homePath, ticketsPath } from "../paths";
import { buttonVariants } from "@/src/components/ui/button";
import { ChartNoAxesGantt, Kanban } from "lucide-react";
import { Header } from "../components/header";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Road To Next",
  description: "My Road To Next Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main
          className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
        >
          {children}
        </main>≈
      </body>
    </html>
  );
}
