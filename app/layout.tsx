import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "5.zero",
  description: "Productivity Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SpaceGrotesk.className}`}>{children}</body>
    </html>
  );
}
