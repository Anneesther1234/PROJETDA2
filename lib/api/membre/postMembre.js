'use server'

import { cookies } from "next/headers"


export async function  postMembre( formData ){

    const nom = formData.get("nom").toString()
    const prenoms = formData.get("prenoms").toString()
    const genre = formData.get("genre").toString()
    const email = formData.get("email").toString()
    const username = formData.get("username").toString()
    const motpasse = formData.get("motpasse").toString()
    const poste = formData.get("poste").toString()
    const telephone = formData.get("telephone").toString()
    const id = formData.get("societe")
    try{
        // console.log('poste :'+ formData.get("role"))
        if(nom !== '' && prenoms !== '' && genre !== '' && email !== '' && username !== '' && motpasse !== '' && poste !== '' && telephone !== '' && id !== null && cookies().has("token")){
            const data = {
                "nom": nom,
                "prenoms": prenoms,
                "genre": genre,
                "email": email,
                "username": username,
                "motpasse": motpasse,
                "poste": poste,
                "telephone": telephone,
                "actif": true,
                "societe": {
                  "id_societe": parseInt(id) // Assurez-vous que cet ID correspond à un rôle valide dans votre base de données
                }
              } 
            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/MembreAssurance/creer", {
                method: 'POST',
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
        console.log("Erreur au niveau de l'envoie du formulaire de creation de l'employe DA: "+e)
        return false ;
    }
}