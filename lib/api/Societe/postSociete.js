'use server'

import { cookies } from "next/headers"


export default async function  postSociete( formData ){

    const nom = formData.get("nom").toString()
    const dirigeant = formData.get("dirigeant").toString()
    const siege = formData.get("siege").toString()
    const contact = formData.get("contact").toString()
    const num_agrement = formData.get("num_agrement").toString()
    const email = formData.get("email").toString()
    const id_typeassurance = formData.get("typeAssurance").toString()
    
    
    try{
        // console.log('poste :'+ formData.get("role"))
        if(nom !== '' && dirigeant !== '' && siege !== '' && contact !== '' && num_agrement !== '' && email !== '' && id_typeassurance !== null && cookies().has("token")){
            const data = {
                "nom": nom,
                "dirigeant": dirigeant,
                "actif": true,
                "siege": siege,
                "contact": contact,
                "num_agrement": num_agrement,
                "email": email,
                "roles": {
                    "id": 3
                },
                "typeAssurance": {
                  "id_typeassurance": parseInt(id_typeassurance)
                }
              }
            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/Societe/creer", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 
                    "Authorization": "Bearer " + cookies().get("token")["value"] ,
                    "Content-Type": "application/json"
                 }
            })
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