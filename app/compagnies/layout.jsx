
import { Inter } from "next/font/google";
import "../globals.css";
import LeftBar from "./(Components)/LeftBar";
import TopBar from "./(Components)/TopBar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body id="root" className={inter.className}>
        <div>
            <div className='w-full flex'>
            <LeftBar menu ="nc"/>
            <div className='flex-col w-[85%]'>
              <TopBar accueil="accueil"/>
                {children}
            </div>
            </div>
        </div>
        
        </body>
    </html>
  );
}
