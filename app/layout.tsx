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
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Babatunde Folaranmi | Portfolio",
    description: "Mechanical Engineer & Project Management Professional",
    images: ["/assets/images/1001971690(1).jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#030014] text-slate-300">
        {children}
      </body>
    </html>
  );
}