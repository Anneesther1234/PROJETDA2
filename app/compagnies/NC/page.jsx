
'use client'

import HomeItems from "../../components/ui/HomeItems"

export default function HomeNC(){
    return(
        <>
            <h1 className=' text-gris text-2xl text-center font-bold m-10'> Note de conjoncture</h1>
            <div className='w-full flex justify-center items-center pt-[5%] px-[6%]'>
            <HomeItems src="/plus.png" label="Nouvelle NC" href="/compagnies/NC/nouvelle"></HomeItems>
            <HomeItems src="/menu (1).png" label="Historique des NC" href="/compagnies/NC/historique" ></HomeItems>
            <HomeItems src="/monitor.png" label="Dashboard NC" href="#" />
            </div>
        </>
    )
}