import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "5.zero",
  description: "Productivity Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-NavBg">{children}</body>
    </html>
  );
}
