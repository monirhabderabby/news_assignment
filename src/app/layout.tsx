// Packages
import { meta } from "@prisma/client";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

// Local Imports

import { auth } from "@/auth";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NProgress from "@/provider/NProgress";
import ToastProvider from "@/provider/toast-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meta/home`);
  const JSON: meta = await res.json();
  return {
    title: JSON?.title,
    description: JSON?.description,
    keywords: JSON?.description,
    openGraph: {
      images: JSON?.image,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <NProgress />
          <Header />
          {children}

          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
