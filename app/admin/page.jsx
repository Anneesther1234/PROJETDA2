"use client"
import HomeItems from "../components/ui/HomeItems"

export default function HomeAdmin(){
    return(
        <>
         <h1 className='font-bold text-gris text-2xl text-center m-10'> Espace Administrateur DA</h1>
                <div className='w-full grid grid-cols-3 gap-14 justify-center items-center pt-[5%] px-[6%]'>
                    <HomeItems src="/sheets.png" label="Note de conjecture" href="/admin/NC"></HomeItems>
                    <HomeItems src="/dossier.png" label="Dossier annuels" href="/admin/dossiersDAVIEIARD"></HomeItems>
                    <HomeItems src="/dossier.png" label="Etats trimestrels" href="#"></HomeItems>
                    <HomeItems src="/dossier.png" label="Etats semestrels" href="#" ></HomeItems>
                    <HomeItems src="/courrier-ouvert.png" label="Echanges" href="#" ></HomeItems>
                </div>
        </>
    )
}








