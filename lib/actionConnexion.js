"use server"
import { redirect } from 'next/navigation'
// import { z } from 'zod';
// import { Router } from 'next/router';
// import { NextRequest } from 'next/server';
// import { createContext, useContext } from 'react';
import { cookies } from 'next/headers';
 

 
export async function formAuthentification( formData ) {
  console.log('connexion');
  try {
      const email = formData.get("email").toString()
      const password = formData.get("password").toString()
      try {
            const user = await getUser(email,password);
          console.log("user : ",user)
          
          if(user){
            if( user['token']){
              console.log('yes');
              const expiration = {
                expires: new Date(new Date().getTime() + 38 * 60 * 1000),
                // secure: true, // Envoie le cookie uniquement sur HTTPS
                // httpOnly: true, // Empêche l'accès via JavaScript
                // sameSite: 'strict' // Ne permet que les requêtes du même site
              };
              cookies().set('token',user['token'].toString(),expiration)
            }else{
              return null
            } 
          }else{
            return null
          }
          
      }catch(e){
        console.log("Erreur de récupération de l'utilisateur");
        return "erreur";
      }
    } catch (error) {
      console.log({ error });  
      throw error;
    }
  
}


async function getUser(email, motpasse) {
  try {
      const res = await fetch("http://localhost:9191/api/CONNEXION_COMPTES/connexion", {
          method: 'POST',
          body: JSON.stringify({ email, motpasse }),
          headers: { "Content-Type": "application/json" }
      });
      
      if (res.ok) {
          const user = await res.json(); // Récupération du tableau d'utilisateurs, ou un tableau vide par défaut
          // Vérifier si des utilisateurs ont été renvoyés
          if (user) { 
            return {
              token: user.token,
            }
          } else {
              return null; // Aucun utilisateur trouvé
          }
      } else {
        return null; // Réponse invalide de l'API
      }
  } catch (error) {
    return null; // Propager l'erreur pour que l'appelant puisse la gérer
  }
}