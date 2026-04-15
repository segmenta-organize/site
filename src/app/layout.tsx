import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/components";
import { Footer } from "../components/footer/components";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Segmenta",
  description: "Make your learn more effective with Segmenta",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <Navbar />
        <main 
          className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
