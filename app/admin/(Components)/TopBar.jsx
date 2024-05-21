'use server'

import Image from "next/image"

export default async function TopBar(props){
    // Logo de la compagnie connectée
    const email = props.email
    const nom = props.nom
    // booléen pour déterminer si il s'agit de la page d'accueil ou pas
    const accueil = props.accueil != null ? props.accueil == "accueil" ? true : false :false 
    // URL de retour
    const urlback = props.urlback != null ? props.urlback : "#"
    return (
        <div className="w-full h-12 border flex p-2 sticky top-0 bg-white z-100">
            
            <div className="flex-col">
                <h1 className="text-gris text-sm font-bold">Dashboard</h1>
                <h2 className="text-gris text-[11px]">Partenaires de la DA</h2>
            </div>
            <div className="ml-auto h-full w-fit flex pr-[2%]">
                <div className="flex-col">
                    <h1 className="text-gray-600 font-bold text-sm ">{nom}</h1>
                    <h2 className="text-gray-400 text-[11px]">{email}</h2>
                </div>
                
            </div>
        </div>
    );
}