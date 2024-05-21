'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { disconnectUser } from "../../../lib/deconnexion"

function LeftBar() {
    const [menu, setMenu] = useState("accueilC");

    useLayoutEffect(() => {
        const path = window.location.pathname.split("/");
        if (path[1] === "compagnies" && window.location.pathname.length === 2) {
            setMenu("accueilC");
        } else {
            switch (path[2]) {
                case "NC":
                    setMenu("nc");
                    break;
                case "CEG":
                    setMenu("ceg");
                    break;
                default:
                    setMenu("accueilC");
                    break;
            }
        }
    }, []); // Effectue la mise à jour une seule fois après le rendu initial
    const handleDisconnect = async (event) => {
        event.preventDefault();
        await disconnectUser();
    };

    return (
        <div className="w-[15%] bg-orange h-screen p-3 flex-col sticky top-0">
            <div className='w-full h-[93%]'>
                <Link href='/compagnies' className="flex space-x-1 items-center" onClick={() => setMenu('accueilC')}>
                    <Image src="/logoDA.png" className="rounded-full" alt="logo DA" width={50} height={50} style={{ minHeight:50, minWidth:50 }}/>
                    <h1 className="text-center text-white text-[13px]">Partenaires de la direction des assurances</h1>
                </Link>
                <div className="flex-col pt-3 space-y-2">
                    <Link href='/compagnies' className="text-orangetxt hover:text-white" onClick={() => setMenu('accueilC')}>MENU</Link>
                    <hr className="border-orangetxt"/>
                    <ul>
                        <li>
                            <Link href="/compagnies/NC" className={clsx('flex space-x-5 items-center hover:bg-orangebg rounded-md p-1', {' bg-orangebg ':menu == "nc"})} onClick={() => setMenu('nc')}>
                                <Image src="/sheets.png" alt="NC" width={30} height={30}/>
                                <h1 className="text-white text-sm">Note de conjoncture</h1>
                            </Link>
                            <div className="mt-3">
                                <hr className="border-orangetxt"/>
                            </div>
                            
                        </li>
                        <li className="mt-2">
                            <Link href="/compagnies/dossiersA" className={clsx('flex space-x-5 items-center hover:bg-orangebg rounded-md p-1', {' bg-orangebg p-1':menu == "dossierA"})} onClick={() => setMenu('dossierA')}>
                                <Image src="/dossier.png" alt="DOssier Annuel" width={30} height={30}/>
                                <h1 className="text-white text-sm">Dossier annuels</h1>
                            </Link>
                            <div className="mt-3">
                                <hr className="border-orangetxt "/>
                            </div>
                        </li>

                     
                        
                        
                        <li className="mt-2">
                            <Link href="#" className='flex space-x-5 items-center hover:bg-orangebg rounded-md p-1'>
                                <Image src="/courrier-ouvert.png" alt="DOssier Annuel" width={30} height={30}/>
                                <h1 className="text-white text-sm">Echanges</h1>
                            </Link>
                            <div className="mt-3">
                                <hr className="border-orangetxt "/>
                            </div>
                        </li>
                        <li className="mt-2">
                            <Link href="/compagnies/profils" className={ menu == "profils" ? "flex space-x-5 items-center bg-orangebg p-1 rounded-md" : "flex space-x-5 items-center hover:bg-orangebg hover:rounded-md hover:p-1"} onClick={() => setMenu('profils')}>
                                <Image src="/user-profile.png" alt="user-profile" width={30} height={30}/>
                                <h1 className="text-white text-sm">Profils</h1>
                            </Link>
                            <div className="mt-3">
                                <hr className="border-orangetxt "/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <form onSubmit={handleDisconnect} className='flex items-end justify-center w-full h-[7%]'>
                <button href="#" className="flex space-x-3 items-center bg-orangebg py-1 px-3 rounded-md" >
                    <Image src="/logout (3).png" alt="NC" width={30} height={30}/>
                    <h1 className="text-white text-sm">Déconnexion</h1>
                </button>
            </form>
        </div>
    );
}
// onClick={disconnectUser()}


export default LeftBar;
