import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/context/AuthContext'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thaara AI",
  description: "Thaara AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
