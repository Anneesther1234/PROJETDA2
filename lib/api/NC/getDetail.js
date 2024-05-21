"use server"

import { cookies } from "next/headers";


export default async function getDetail(url,email,societe,date){
  // console.log("yes")
    try{
      // console.log("yes")
      if(email !== "" && societe !== "" && date !== "" && cookies().has("token")){
        const url2 = url.toString() +societe.toString() + "/" + email.toString() + "/" + date.toString()
        // console.log(url2);
       const res = await fetch(url2, {
          method: 'GET',
          headers: { 
            "Authorization": "Bearer "+cookies().get("token")["value"],
            "Content-Type": "application/json"
          }
      })
      
      if(res.ok){
        const user = await res.json()
        if(user.length == 0){
          return null
        }else{
          return user[0]
        }
        // console.log(user[0])
        
        
      }else{
        console.log("impossible")
        return null
      }
      }
    }catch(e){
        console.log("Une erreur s'est produite Impossible de proceder a requete"+e)
        return null
    }
    
    
}