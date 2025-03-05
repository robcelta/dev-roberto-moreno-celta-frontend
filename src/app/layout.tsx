import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { PostProvider } from "@/context/PostContext";

export const metadata: Metadata = {
  title: "Lite-tech",
  description: "Litebox Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dhe4cqn.css" />
      </head>
      <body className="bg-black">
        <PostProvider>
          <Navbar />
          {children}
        </PostProvider>
      </body>
    </html>
  );
}
