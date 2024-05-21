"use server"

import { cookies } from "next/headers"


export default async function getNcCOURTIERComp(){
    try{
        if(cookies().has("token")){
            //  console.log(cookies().get("token")["value"].toString());
            const res = await fetch("http://localhost:9191/api/COURTIER/rechercheNoteParNomSociete", {
                method: 'GET',
                headers: { 
                    "Authorization": "Bearer " + cookies().get("token")["value"],
                    "Content-Type": "application/json"
                }
            })
            if(res.ok){
                const NoteCOURTIERComp = await res.json()
                return NoteCOURTIERComp;
                
            }else{
                console.log("impossible de récupérer la liste des notes de conjecture COURTIER")
                return null
            }
        }
        
     }catch(e){
         console.log("Une erreur s'est produite Impossible de proceder a la requete car:"+e)
         return null
     }
     
     
 }