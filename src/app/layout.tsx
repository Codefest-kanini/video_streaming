import { Inter } from "next/font/google";
//@ts-ignore
import supportsColor from 'supports-color';
// Styles
import "./globals.css";

// Components
import Navbar from "@/components/common/Navbar";
import HuddleProvider from "@/components/ClientComponents/HuddleProvider";
import { cn } from "@/utils/helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Audio Spaces Example App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen relative font-inter", inter.className)}>
        <Navbar />
        <HuddleProvider>{children}</HuddleProvider>
      </body>
    </html>
  );
}
