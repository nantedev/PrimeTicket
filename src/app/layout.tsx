import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { homePath, ticketsPath } from "../paths";
import { buttonVariants } from "@/components/ui/button";
import { ChartNoAxesGantt, Kanban } from "lucide-react";


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
        <header>
          <nav
            className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
            shadow-lg"
          >
            <div>
                <Link href={homePath()} className={buttonVariants({variant: "ghost"})}>
                  <Kanban />
                  <h1 className="text-lg bold">TicketBounty</h1>
                </Link>
            </div>
            <div className="text-sm">
              <Link href={ticketsPath()} className={buttonVariants({variant: "outline"})}>Tickets</Link>
            </div>
          </nav>
        </header>
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
