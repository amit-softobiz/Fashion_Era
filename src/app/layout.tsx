import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FASHION_ERA",
  description: "Digital-Fashion-Store website using NEXTJS and Material UI",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="flex-grow">
            <Header />
            <main className="my-0 py-16">{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
