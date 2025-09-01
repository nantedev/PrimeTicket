import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "@/app/_navigation/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { RedirectToast } from "@/components/redirect-toast";
import { Sidebar } from "@/app/_navigation/sidebar/components/sidebar";

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
        <NuqsAdapter>
          <ThemeProvider>
            <Header />
            <div className="flex h-screen overflow-hidden border-collapse">
              <Sidebar />
              <main
                className="
                 min-h-screen 
                 flex-1
                 overflow-y-auto 
                 overflow-x-hidden 
                 py-24 
                 px-8
                 bg-secondary/20
                 flex 
                 flex-col
               "
              >
                {children}
              </main>
            </div>
            <Toaster expand />
            <RedirectToast />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
