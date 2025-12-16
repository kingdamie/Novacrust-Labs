import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Novacrust Labs",
  description: "simple crypto checkout experience",
  openGraph: {
    title: "Novacrust Labs",
    description: "simple crypto checkout experience",
    url: "https://novacrust-labs.vercel.app",
    siteName: "Novacrust Labs",
    images: [
      {
        url: "/NovacrustLogo.png",
        width: 1200,
        height: 630,
        alt: "Novacrust Labs",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
