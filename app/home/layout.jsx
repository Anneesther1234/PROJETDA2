 
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DA",

};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
      </head>
      <body id="root" className={inter.className}>
        <Header menu="accueil" />
        {children}
        </body>
    </html>
  );
}
