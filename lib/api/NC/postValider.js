"use server"

import { cookies } from "next/headers";

export default async function postValider(url, date, societe, email) {
  const requestBody = {
    newStatutId: 2
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
        // console.log(data);
        // return data.length === 0 ? null : data[0];
        return "ok"
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
