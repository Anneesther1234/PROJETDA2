"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import getInfo from '../../../../lib/api/getInfo'
import DetailNCIARD from "./historiqueIARD";
import DetailNCVIE from './historiqueVIE'

//Page de création d'une note de conjoncture
export default  function Newhist(){

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
    return(
        <>    
            {type_compagnie == "VIE" && <DetailNCVIE></DetailNCVIE> } 
            {type_compagnie == "IARD" && <DetailNCIARD></DetailNCIARD>}    
        </>
    );
}

