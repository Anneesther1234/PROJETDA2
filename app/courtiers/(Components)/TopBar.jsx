'use client'

import { useEffect, useState } from "react"
import getInfo from "../../../lib/api/getInfo"
import { useRouter } from "next/navigation"


export default  function TopBar(props){
    const [email,setEmail] = useState(null)
    const [nom,setNom] = useState(null)
    const [nom_societe,setSociete] = useState(null)
    const [type,setType] = useState(null)
    const router = useRouter()
    const getCompagnie =  async () => {
        const res = await getInfo()
        if(!res) {
            router.push('/connexion')
        }
        console.log(res);
        setType(res.typeAssurance)
        setEmail(res.email)
        setSociete(res.nom_societe)
        // setNom(res)
    }
    useEffect(()=>{
      getCompagnie()  
    })
    // Logo de la compagnie connectée
    
    // let type_assurance = ""

    // if(type == "VIE"){
    //     type_assurance ="COMPAGNIE VIE"
    // }else if(type == "IARD"){
    //     type_assurance ="COMPAGNIE IARD"
    // }else if(type == "COURTIER"){
    //     type_assurance ="COURTIER"
    // }else{

    // }

    // booléen pour déterminer si il s'agit de la page d'accueil ou pas
    const accueil = props.accueil != null ? props.accueil == "accueil" ? true : false :false 
    // URL de retour
    const urlback = props.urlback != null ? props.urlback : "#"
    return (
        <div className="w-full h-12 border flex justify-between p-2 sticky top-0 bg-white z-100">
            
            <div className="flex-col">
                <h1 className="text-gris text-sm font-bold">Dashboard</h1>
                <h2 className="text-gris text-[11px]">Partenaires de la DA</h2>
            </div>
            <div>
                <h1 className="text-gris text-xl font-bold">{nom_societe}</h1>
            </div>
            <div className="h-full w-fit flex pr-[2%]">
                <div className="flex-col">
                    <h1 className="text-gray-600 font-bold text-sm ">{nom}</h1>
                    <h2 className="text-gray-400  text-xl">{email}</h2>
                   
                </div> 
                
            </div>
        </div>
    );
}