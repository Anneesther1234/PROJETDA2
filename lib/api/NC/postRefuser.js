"use server"
import { cookies } from "next/headers";

export default async function postRefuser(url, date, societe, email, contenuMessage) {
  const requestBody = {
    newStatutId: 3,
    contenuMessage: contenuMessage
  };

  try {
    if (date !== "" && societe !== "" && email !== "" && cookies().has("token")) {
      const url2 = url.toString() + date.toString() + "/" + societe.toString() + "/" + email.toString();
      const res = await fetch(url2, {
        method: 'POST',
        headers: {
        "Authorization": "Bearer "+cookies().get("token")["value"],
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (res.ok) {
        // const data = await res.json();
        console.log(await res.text());
        return "ok"
        // console.log(data);
        // return data.length === 0 ? null : data[0];
      } else {
        console.log("Réponse HTTP incorrecte :", res.status);
        return null;
      }
    } else {
      console.log("Paramètres invalides ou jeton manquant");
      return null;
    }
  } catch (e) {
    console.log("Erreur lors de la validation :", e);
    return null;
  }
}
