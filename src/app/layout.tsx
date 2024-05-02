import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const UrbanistFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export const metadata: Metadata = {
  title:
    "Blog sur l'Handicap et l'Inclusion : Inspirations et Conseils pour une Vie Accessible",
  description:
    "Bienvenue sur notre blog dédié à l'handicap et à l'inclusion ! Découvrez des histoires inspirantes, des ressources et des conseils pour créer une société plus accessible et inclusive pour tous",
  publisher:
    "Emmanuel SARPEDON | https://www.linkedin.com/in/emmanuel-sarpedon/",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "font-urbanist min-h-screen antialiased",
          UrbanistFont.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
