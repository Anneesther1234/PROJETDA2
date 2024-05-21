"use server"

import { cookies } from "next/headers";


export default async function getInfoEmail(email){
    try{
      if(email && cookies().has("token")){


       const res = await fetch("http://localhost:9191/api/RetrouverInfo/withEmail", {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 
            "Authorization": "Bearer "+cookies().get("token")["value"],
            "Content-Type": "application/json"
          }
      })
      
      if(res.ok){
        const user = await res.json()
        // console.log()
        return user
        
      }else{
        console.log("impossible")
        return null
      }
      }
    }catch(e){
        console.log("Une erreur s'est produite Impossible de proceder a requete: "+e)
        return null
    }
    
    
}