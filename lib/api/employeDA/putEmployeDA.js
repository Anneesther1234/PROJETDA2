"use server"

import { cookies } from "next/headers";

export default async function putEmployeDA(formData) {
  if (formData != null) {
    const email = formData.get("email")?.toString() ?? null;
    const nouveauMotDePasse = formData.get("motpasse1")?.toString() ?? "";
    const confirmerNouveauMotDePasse = formData.get("motpasse2")?.toString() ?? "";
    const id = formData.get("role");

    try {
      if (email && nouveauMotDePasse && confirmerNouveauMotDePasse && id && cookies().has("token")) {
        const data = {
          "email": email,
          "nouveauMotDePasse": nouveauMotDePasse,
          "confirmerNouveauMotDePasse": confirmerNouveauMotDePasse,
          "role": {
            "id": parseInt(id)
          }
        };
        console.log(JSON.stringify(data));

        const res = await fetch("http://localhost:9191/api/MODIFICATION/modifier/Employe_DA", {
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
      console.log("Erreur lors de l'envoi du formulaire de modification de l'employé DA:"+ error);
      return false;
    }
  }
}
