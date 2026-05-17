import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SOLCEF — Spirit Of Life Community Empowerment Foundation",
  description:
    "A 501(c)(3) nonprofit dedicated to empowering communities in Haiti through education and student sponsorship. Sponsor a student today.",
  keywords: [
    "nonprofit",
    "Haiti",
    "education",
    "sponsorship",
    "501c3",
    "SOLCEF",
    "Haiti school",
    "student sponsor",
  ],
  openGraph: {
    title: "SOLCEF — Education for Haiti",
    description:
      "Sponsor a student in Haiti and change a life through education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
