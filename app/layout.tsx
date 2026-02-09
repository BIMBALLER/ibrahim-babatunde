import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Babatunde Folaranmi | Mechanical Engineer & Project Manager",
  description: "Official portfolio of Ibrahim Babatunde Folaranmi. Officer II Mechanical Engineer at NSPM. Specialist in industrial maintenance and project management.",
  openGraph: {
    title: "Ibrahim Babatunde Folaranmi | Engineering Portfolio",
    description: "Expertise in Mechanical Engineering & Project Management.",
    url: "https://your-domain.com", // Change this to your actual link later
    siteName: "IB Folaranmi Portfolio",
    images: [
      {
        url: "/assets/images/1001971690(1).jpg", // Uses your photo for the link preview
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