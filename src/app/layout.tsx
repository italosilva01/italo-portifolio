import type { Metadata } from "next";
import { raleway } from "./ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Francisco Italo | Portifolio",
  description: "Portifolio do Desenvolvedor Front end Francisco Italo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
