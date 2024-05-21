"use server"

import { cookies } from "next/headers";


export default async function deleteNC(url,email,societe,date){
  // console.log("yes")
    try{
      // console.log("yes")
      if(email !== "" && societe !== "" && date !== "" && cookies().has("token")){
        const url2 = url.toString() + date.toString() + "/" + societe.toString() + "/" +email.toString()
        // console.log(url2);
       const res = await fetch(url2, {
          method: 'DELETE',
          headers: { 
            "Authorization": "Bearer "+cookies().get("token")["value"],
            "Content-Type": "application/json"
          }
      })
      
      if(res.ok){
        return "ok"
        
      }else{
        console.log("impossible")
        return "impossible"
      }
      }
    }catch(e){
        console.log("Une erreur s'est produite Impossible de proceder a requete"+e)
        return "impossible"
    }
    
    
}