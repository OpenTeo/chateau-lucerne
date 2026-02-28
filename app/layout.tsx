import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Château de La Lucerne d'Outremer | Chambres d'Hôtes & Réceptions",
  description: "Domaine historique en Normandie - Chambres d'hôtes de charme, mariages, séminaires et événements près du Mont Saint-Michel",
  keywords: "château normandie, chambres d'hôtes manche, mariage château, séminaire normandie, mont saint-michel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
