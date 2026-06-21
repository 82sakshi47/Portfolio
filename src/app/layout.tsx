import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakshi Singh | Web Developer & CSE Student Portfolio",
  description: "Explore the portfolio of Sakshi Singh, a passionate Web Developer and Computer Science Student at Kashi Institute of Technology. Projects include Smart Farming Assistant (SIH 2025) and Online Code Editor.",
  keywords: ["Sakshi Singh", "Web Developer", "Kashi Institute of Technology", "Smart India Hackathon", "Portfolio", "Next.js", "React", "Developer"],
  authors: [{ name: "Sakshi Singh" }],
  openGraph: {
    title: "Sakshi Singh | Web Developer & CSE Student Portfolio",
    description: "Explore the portfolio of Sakshi Singh, a passionate Web Developer and Computer Science Student at Kashi Institute of Technology.",
    url: "https://sakshisingh.dev",
    siteName: "Sakshi Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakshi Singh | Web Developer Portfolio",
    description: "Explore the portfolio of Sakshi Singh, a passionate Web Developer and Computer Science Student.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased text-white bg-dark-bg selection:bg-indigo-500/30 selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col bg-dark-bg bg-grid">
            {/* Ambient background glows */}
            <div className="glow-spot w-[600px] h-[600px] bg-indigo-500/10 top-[-200px] left-[-100px]" />
            <div className="glow-spot w-[500px] h-[500px] bg-pink-500/10 bottom-[-100px] right-[-100px]" />
            <div className="glow-spot w-[800px] h-[800px] bg-purple-500/5 top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
            
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
