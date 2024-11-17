import type { Metadata } from "next";
import "./globals.css";
import HomeLayout from "./HomeLayout";


export const metadata: Metadata = {
  title: "Mortadha Houch",
  description: "Mortadha's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  );
}
