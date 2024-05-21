"use server"

import { cookies } from "next/headers";


export default async function getInfo(){
  if(!cookies().has("token")) return false;
      const cookie = cookies().get("token")["value"]
       const res = await fetch("http://localhost:9191/api/RetrouverInfo/withtoken", {
          method: 'GET',
          headers: { 
            "Authorization": "Bearer "+ cookie,
            "Content-Type": "application/json"
          }
      })
      
      if(!res.ok){
        // const user = await res.json()
        console.log("l'utilisateur n'est pas retrouvé");
        return false
        
      }

      return res.json()
    
}
 