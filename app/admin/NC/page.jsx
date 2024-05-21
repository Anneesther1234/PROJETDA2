
'use client'

import HomeItems from "../../components/ui/HomeItems"

export default function HomeNC(){
    return(
        <>
            <h1 className=' text-gris text-2xl text-center font-bold m-10'> Note de conjoncture</h1>
            <div className='w-full grid grid-cols-3 gap-14 justify-center items-center pt-[5%] px-[6%]'>
                <HomeItems src="/remove.png" label="Supprimer NC VIE" href="/admin/NC/SupprimerNCVIE" ></HomeItems>
               <HomeItems src="/remove.png" label="Supprimer NC IARD" href="/admin/NC/SupprimerNCNonVIE" ></HomeItems>
              <HomeItems src="/remove.png" label="Supprimer NC COURTIER" href="/admin/NC/SupprimerNcCOURTIER" ></HomeItems>
             <HomeItems src="/7391458.png" label="Supprimer Dossier Annuel" href="#" ></HomeItems>
             <HomeItems src="/monitor.png" label="Dashboard NC" href="#" />
              
            </div>
        </>
    )
}