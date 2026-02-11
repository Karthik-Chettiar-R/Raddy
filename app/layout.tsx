import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkToggle from "./DarkToggle";
import Chatbot from "./components/Chatbot";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raddy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <Analytics />
      <title>Raddy <img ></img></title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <DarkToggle />
        </div>

        <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
          <AppSidebar variant="inset" />

          <SidebarInset>
            <div className="fixed top-4 right-4 z-50">
              
            </div>
            <SiteHeader />
            {children}
          </SidebarInset>
    </SidebarProvider>
        <Chatbot />
      </body>
    </html>
  );
}
