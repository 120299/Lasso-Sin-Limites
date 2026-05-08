import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";
// Strapi Data
import { getMenuPrimary } from "@/services/menuPrimary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lasso Sin Límites",
  description: "La mejor agencia publicitaria de valencia",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuPrimary = await getMenuPrimary();
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}>
        <div className="min-h-screen bg-background">
          <Header data={menuPrimary} />
          {children}
        </div>
      </body>
    </html>
  );
}
