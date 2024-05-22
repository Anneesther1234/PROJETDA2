import { Inter } from "next/font/google";
import "../globals.css";
import bgimage from "../../public/assurancevie.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="text/html; charset=utf-8"/><meta></meta>
      </head>
      <body id="root" className={inter.className} style={{backgroundImage:`url(${bgimage.src})`}}>
        {children}
      </body>
    </html>
  );
}
