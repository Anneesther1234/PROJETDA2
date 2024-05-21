
'use client'

import HomeItems from "../../components/ui/HomeItems"

export default function HomeNC(){
    return(
        <>
            <h1 className=' text-gris text-2xl text-center font-bold m-10'> Note de conjoncture</h1>
            <div className='w-full flex justify-center items-center pt-[5%] px-[6%]'>
            <HomeItems src="/menu (1).png" label="Historique VIE" href="/employeDA/NC/historique/historiqueEmployVIE" ></HomeItems>
                <HomeItems src="/menu (1).png" label="Historique IARD" href="/employeDA/NC/historique/historiqueEmployIARD" ></HomeItems>
                <HomeItems src="/menu (1).png" label="Historique COURTIER" href="/employeDA/NC/historique/historiqueEmployCOURTIER" ></HomeItems>
                <HomeItems src="/monitor.png" label="Dashboard NC" href="/employeDA/NC/dashboard" />
            </div>
        </>
    )
}