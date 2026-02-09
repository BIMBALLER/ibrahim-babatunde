import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Babatunde Folaranmi | Mechanical Engineer",
  description: "Official portfolio of Ibrahim Babatunde Folaranmi. Mechanical Engineer at NSPM and Project Management professional.",
  openGraph: {
    title: "Ibrahim Babatunde Folaranmi | Portfolio",
    description: "Mechanical Engineer & Project Manager specializing in industrial operations.",
    url: "https://ibrahim-babatunde-portfolio.vercel.app",
    siteName: "Ibrahim Folaranmi Portfolio",
    images: [
      {
        url: "/assets/images/1001971690(1).jpg", 
        width: 1200,
        height: 630,
        alt: "Ibrahim Babatunde Folaranmi",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}