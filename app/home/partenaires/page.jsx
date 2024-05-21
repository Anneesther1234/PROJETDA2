'use client'


import Partenaire from './Partenaire';
import clsx from 'clsx';


function Partenaires(){
    const assurancesVie = [
        {source : "/assurances/2ACI.jpg",altlogo : "2ACI"},
        {source : "/assurances/activa.jpg",altlogo : "activa"},
        {source : "/assurances/allianz-logo.svg",altlogo : "allianz-logo"},
        {source : "/assurances/amsa.png",altlogo : "amsa"},
        {source : "/assurances/Atl.png",altlogo : "Atl"},
        {source : "/assurances/Atlantique-Assurances.png",altlogo : "Atlantique-Assurances"},
        {source : "/assurances/axaci.jpg",altlogo : "axaci"},
        {source : "/assurances/comar.png",altlogo : "comar"},
        {source : "/assurances/gnaci.png",altlogo : "gnaci"},
        {source : "/assurances/laloyale.jpg",altlogo : "laloyale"},
        {source : "/assurances/Leadway.png",altlogo : "Leadway"},
        {source : "/assurances/matca.jpg",altlogo : "matca"},
        {source : "/assurances/nsia.png",altlogo : "nsia"},
        {source : "/assurances/saar.jpg",altlogo : "saar"},
        {source : "/assurances/sanlam.png",altlogo : "sanlam"},
        {source : "/assurances/schiba.jpg",altlogo : "schiba"},
        {source : "/assurances/serenity.jpg",altlogo : "serenity"},
        {source : "/assurances/sidam.jpg",altlogo : "sidam"},
        {source : "/assurances/smabtp.jpg",altlogo : "smabtp"},
        {source : "/assurances/sonam.jpg",altlogo : "sonam"},
        {source : "/assurances/sunu.jpg",altlogo : "sunu"},
        {source : "/assurances/wafa.jpg",altlogo : "wafa"},
    ]

    const assurancesNonVie = [
        {source : "/assurances/allianz-logo.svg",altlogo : "allianz-logo"},
        {source : "/assurances/Atlantique-Assurances.png",altlogo : "Atlantique-Assurances"},
        {source : "/assurances/belife.jpg",altlogo : "belife"},
        {source : "/assurances/Leadway.png",altlogo : "Leadway"},
        {source : "/assurances/nsia.png",altlogo : "nsia"},
        {source : "/assurances/saar.jpg",altlogo : "saar"},
        {source : "/assurances/sanlam.png",altlogo : "sanlam"},
        {source : "/assurances/somavie.jpg",altlogo : "somavie"},
        {source : "/assurances/sonam.jpg",altlogo : "sonam"},
        {source : "/assurances/sunu.jpg",altlogo : "sunu"},
        {source : "/assurances/wafa.jpg",altlogo : "wafa"},
    ]

    return(
        <>
            <h1 className="text-orange text-center text-[25px] mt-5 font-bold">Assurances Vie</h1>
            <div className='flex flex-wrap justify-between p-10 w-full space-y-10 space-x-10'>
                {
                    assurancesVie.map((assurance, index) => {
                        return (
                            <Partenaire key={index} source={assurance.source} altlogo={assurance.altlogo} className={clsx("w-full h-full", {"pl-10 pt-10" : index !== 0})} /> 
                        );
                    })
                }
            </div>

            <h1 className="text-orange text-center text-[25px] mt-10 font-bold">Assurances IARD</h1>
            <div className='flex flex-wrap justify-between p-10 w-full space-y-10 space-x-10'>
                {
                    assurancesNonVie.map((assurance, index) => {
                        return (
                            <Partenaire key={index} source={assurance.source} altlogo={assurance.altlogo} className={clsx("w-full h-full", {"pl-10 pt-10" : index !== 0})} /> 
                        );
                    })
                }
            </div>
        </>
    )
}
export default Partenaires