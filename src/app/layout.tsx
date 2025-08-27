import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FutureFrame Photography",
  description: "Showcasing a futuristic photographer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
        style={{ background: 'linear-gradient(135deg, #0A0A12 0%, #0A0A12 60%, #0A0A12 100%)' }}
      >
        <SiteThemeProvider theme={{
          styleVariant: 'futuristicAndOutOfBox',
          colorTemplate: 1,
          textAnimation: 'slide'
        }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
