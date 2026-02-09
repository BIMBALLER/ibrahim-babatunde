import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Babatunde Folaranmi | Mechanical Engineer & Project Manager",
  description: "Official portfolio of Ibrahim Babatunde Folaranmi. Officer II Mechanical Engineer at NSPM. Specialist in industrial maintenance and project management.",
  openGraph: {
    title: "Ibrahim Babatunde Folaranmi | Engineering Portfolio",
    description: "Expertise in Mechanical Engineering & Project Management.",
    url: "https://ibrahim-babatunde-portfolio.vercel.app/",
    siteName: "IB Folaranmi Portfolio",
    images: [
      {
        url: "/assets/images/1001971690(1).jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}