import type { Metadata } from "next";
import { Figtree} from "next/font/google";
import "./globals.css";


const figTree = Figtree({
  variable: "--font-fig-tree",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Frontend Task",
  description: "Frontend task to TBS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.variable} `}>
        {children}
      </body>
    </html>
  );
}
