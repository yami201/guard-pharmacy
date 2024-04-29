import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pharmacie de Garde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-3 py-4 font-serif">
        {children}
        </body>
    </html>
  );
}
