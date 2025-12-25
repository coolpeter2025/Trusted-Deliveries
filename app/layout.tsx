import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trusted Deliveries - Aggregate Delivery Services Cleveland Ohio | Dirt, Gravel, Sand & Salt",
  description: "Trusted Deliveries provides aggregate delivery services in Cleveland, Ohio. Specializing in dirt delivery, gravel delivery, sand delivery, bulk salt delivery, and snow removal services.",
  keywords: "aggregate delivery Cleveland, dirt delivery Cleveland Ohio, gravel delivery, sand delivery, salt delivery, snow removal Cleveland",
  openGraph: {
    title: "Trusted Deliveries - Aggregate Delivery Services Cleveland Ohio",
    description: "Professional aggregate delivery services in Cleveland, Ohio. Fast, reliable delivery for residential and commercial projects.",
    type: "website",
    locale: "en_US",
    siteName: "Trusted Deliveries",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
