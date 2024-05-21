
import { Inter } from "next/font/google";
import "../globals.css";
import LeftBar from "./(Components)/LeftBar";
import TopBar from "./(Components)/TopBar";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  let email = ""
  let nom = ""
  let type_compagnie = ""
  if(cookies().has("nom")){
    nom = cookies().get("nom").value
  }
  if(cookies().has("email")){
    email = cookies().get("email").value
  }
  if(cookies().has("type_compagnie")){
    type_compagnie = cookies().get("type_compagnie").value
  }
  return (
    <html lang="fr">
      <body id="root" className={inter.className}>
        <div>
            <div className='w-full flex'>
            <LeftBar menu ="nc"/>
            <div className='flex-col w-[85%]'>
              <TopBar email={email} accueil="accueil" nom={nom} />
                {children}
            </div>
            </div>
        </div>
        
        </body>
    </html>
  );
}
