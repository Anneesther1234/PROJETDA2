'use client'


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


function Header(props) {

    const [menu, setMenu] = useState(props.menu)
    // const path = usePathname()
    // const [path2,setPath2] = useState("")
    // console.log(path2);
    

    // useEffect(()=>{
    //     setPath2 (path.split("/"))
    //     if(path2[1] === "home"){
    //         switch(path2[2]){
    //             case "" :
    //                 console.log("/home");
    //                 break
    //             case "partenaires" :
    //                 console.log("/home/partenaires");
    //                 break
    //             case "rapports" :
    //                 console.log("/home/rapports");
    //                 break
    //             case "apropos" :
    //                 console.log("/home/apropos");
    //                 break
    //         }
    //     }
    // })
    
  return (

        <div className='flex p-2 w-full items-center h-[70px] border-b-2 border-gray-200 border-t-2'>
            <Image src="/logoDA.png" loading="lazy" alt="logo DA" height={70} width={70}/>
            <div className='mx-10 flex w-2/4 justify-between items-center h-full'>
                <div className=' w-fit h-full pt-3 pb-1' >
                    <Link id="homeLink" href="/home" className="">Accueil</Link>
                    <div id="homeUnderline" className=""></div>
                </div> 
                <div className='w-fit  h-full pt-3 pb-1'>
                    <Link id="partenairesLink" href="/home/partenaires" className="">Nos partenaires</Link>
                    <div id="partenairesUnderline" className=""></div>
                </div>
                <div className='w-fit  h-full pt-3 pb-1'>
                    <Link id="aproposLink" href="/home/apropos" className="">Apropos de nous </Link>
                    <div id="aproposUnderline" className=""></div>
                </div>
                <div className='w-fit  h-full pt-3 pb-1'>
                    <Link id="rapportsLink" href="/home/rapports" className="">Rapport du marché </Link>
                    <div id="rapportsUnderline"></div>
                </div>
            </div>
            <a className='bg-orange px-5 py-2 rounded-md text-white ml-auto mr-5' href="/connexion">CONNEXION</a>
        </div>

  )
}

export default Header

// onClick={() => setMenu('accueil')} className={menu == 'accueil' ? 'text-orange text-base' : 'text-gris text-base'}
// className={menu == 'rapports' ? 'mt-2 w-full bg-orange h-[1.8px]' : 'mt-2 w-full h-[1.8px]'}