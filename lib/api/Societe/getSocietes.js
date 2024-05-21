"use server"

import { cookies } from "next/headers"


export default async function getSociete(){    
    try{
        if(cookies().has("token")){
            // console.log(cookies().get("token")["value"].toString());
            const res = await fetch("http://localhost:9191/api/Societe/societe", {
                method: 'GET',
                headers: { 
                    "Authorization": "Bearer " + cookies().get("token")["value"],
                    "Content-Type": "application/json"
                }
            })
            if(res.ok){
                const users = await res.json()
                return users;
                
            }else{
                console.log("impossible de récupérer la liste des utilisateurs")
                return null
            }
        }
        
     }catch(e){
         console.log("Une erreur s'est produite Impossible de proceder a la requete car:"+e)
         return null
     }
     
     
 }