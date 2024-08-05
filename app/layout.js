import "./globals.css";

export const metadata = {
  title: "Five.0",
  description: "School Productivity App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
