import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./(Providers)/NextUiProvider";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: "" });
export const metadata: Metadata = {
  title: "Ai-PromptHub",
  description: "Ai Prompt Selling Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
