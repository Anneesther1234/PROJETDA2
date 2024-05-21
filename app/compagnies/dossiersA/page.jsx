"use client"

import DAVie from "./DAVie"
import DANonVie from "./DANonVie"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import getInfo from '../../../lib/api/getInfo'

export default function DA()  {
    const [type_compagnie,setType_compagnie] = useState(null)
    const router = useRouter()
    const getCompagnie =  async () => {
        const res = await getInfo()
        if(!res) {
            router.push('/connexion')
        }
        setType_compagnie(res.typeAssurance)
    }
    useEffect(()=>{
      getCompagnie()  
    })
    
    return (
        <div className='w-full flex justify-center items-center px-[2%]  '>
        {type_compagnie == "VIE" && <DAVie></DAVie> } 
        {type_compagnie == "IARD" && <DANonVie></DANonVie>}
        </div>
    );
}

