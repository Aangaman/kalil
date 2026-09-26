import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Afrique Business Global — Immobilier en Guinée pour la diaspora",
    template: "%s — Afrique Business Global",
  },
  description:
    "Terrains, maisons, appartements et boutiques en Guinée. Afrique Business Global accompagne la diaspora guinéenne en Europe dans ses projets immobiliers au pays.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
