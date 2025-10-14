import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Portifólio",
  description: "Meu portifólio como desenvolvedor de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="flex flex-col min-h-screen">
          <Header/>
            <main className="flex-grow">
              {children}
            </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
