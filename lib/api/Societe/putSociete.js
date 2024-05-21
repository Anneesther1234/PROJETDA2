"use server"

import { cookies } from "next/headers";

export default async function putSociete(formData) {
  if (formData != null) {
    const nom = formData.get("nom").toString()
    const dirigeant = formData.get("dirigeant").toString()
    const siege = formData.get("siege").toString()
    const contact = formData.get("contact").toString()
    const num_agrement = formData.get("num_agrement").toString()
    const email = formData.get("email").toString()

    try {
      if(nom !== '' && dirigeant !== '' && siege !== '' && contact !== '' && num_agrement !== '' && email !== '' && cookies().has("token")){
        const data = {
            "nom": nom,
            "dirigeant": dirigeant,
            "actif": true,
            "siege": siege,
            "contact": contact,
            "num_agrement": num_agrement,
            "email": email,
          }
        console.log(JSON.stringify(data));

        const res = await fetch("http://localhost:9191/api/MODIFICATION/modifier/SOCIETE", {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            "Authorization": "Bearer " + cookies().get("token")["value"],
            "Content-Type": "application/json"
          }
        });

        if (res.ok) {
          return true;
        } else {
          console.log('Erreur lors de la requête fetch:', res.status);
          return false;
        }
      }
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire de modification de la commpagnie: "+ error);
      return false;
    }
  }
}
