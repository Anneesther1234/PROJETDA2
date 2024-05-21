"use server"

import { cookies } from "next/headers"


export default async function getNCVIETemp(){
    try{
        if(cookies().has("token")){
            //  console.log(cookies().get("token")["value"].toString());
            const res = await fetch("http://localhost:9191/api/VIE/ConjonctureVIEtemporaire", {
                method: 'GET',
                headers: { 
                    "Authorization": "Bearer " + cookies().get("token")["value"],
                    "Content-Type": "application/json"
                }
            })
            if(res.ok){
                const users  = await res.json()
                return users ;
                
            }else{
                console.log("impossible de récupérer la liste des notes de conjecture VIE de la base temporelle")
                return null
            }
        }
        
     }catch(e){
         console.log("Une erreur s'est produite Impossible de proceder a la requete car:"+e)
         return null
     }
     
     
 }