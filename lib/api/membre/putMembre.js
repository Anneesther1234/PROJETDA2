'use server'

import { cookies } from "next/headers"


export async function  putMembre( formData ){

    const email = formData.get("email").toString()
    const nouveauMotDePasse = formData.get("nouveauMotDePasse").toString()
    const confirmerNouveauMotDePasse = formData.get("confirmerNouveauMotDePasse").toString()
    try{
        // console.log('poste :'+ formData.get("role"))
        if(email !== '' && nouveauMotDePasse !== '' && confirmerNouveauMotDePasse !== '' && cookies().has("token")){
            const data = {
                "email": email,
                "nouveauMotDePasse": nouveauMotDePasse,
                "confirmerNouveauMotDePasse": confirmerNouveauMotDePasse
            }
            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/MODIFICATION/modifier/Membre", {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 
                    "Authorization": "Bearer "+cookies().get("token")["value"],
                    "Content-Type": "application/json"
                 }
            }).catch((e)=>{
                console.log(e);
            });
            if(res.ok){
               return true;
            }else{
                return false ;
            }

        }
    }catch(e){
        console.log("Erreur au niveau de l'envoie du formulaire de modification du membre de pa societé: "+e)
        return false ;
    }
}