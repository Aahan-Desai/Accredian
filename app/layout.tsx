import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Workforce Upskilling",
  description:
    "A responsive partial clone of Accredian Enterprise for corporate learning, analytics, and career-linked upskilling."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-accredian-ink antialiased">{children}</body>
    </html>
  );
}
