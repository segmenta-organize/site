import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Segmenta",
  description: "Make your learn more effective with Segmenta",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
