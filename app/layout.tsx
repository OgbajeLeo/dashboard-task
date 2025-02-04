import type { Metadata } from "next";
import { Figtree} from "next/font/google";
import "./globals.css";
import "./main.css";


const figTree = Figtree({
  variable: "--font-fig-tree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Frontend Task",
  description: "Frontend task to TBS by leonardaromeh@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.variable}`}>
        {children}
      </body>
    </html>
  );
}
