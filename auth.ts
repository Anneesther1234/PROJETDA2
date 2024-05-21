// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"

// export const {
//   handlers: { GET, POST },
//   auth,
// } = NextAuth({
//   providers: [GitHub],
// })

import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from 'zod';
import { Router } from 'next/router';
import { NextRequest } from 'next/server';

interface Role {
  libelle: string;
  // Ajoutez d'autres propriétés si nécessaire
}

interface TypeCompagnie {
  libelle: string;
  // Ajoutez d'autres propriétés si nécessaire
}

// interface User {
//   id: number;
//   email: string;
//   nom: string;
//   role: Role;
//   type_compagnie: TypeCompagnie;
//   // Ajoutez d'autres propriétés si nécessaire
//   // Addon: any; // S'il existe d'autres propriétés que vous ne connaissez pas à l'avance
// }
declare module 'next-auth' {
  export interface User {
    _id: number;
    nom: string;
    role: Role;
    type_compagnie: TypeCompagnie;
  }
}

async function getUser(email: string, mot_de_passe: string): Promise<User | undefined> {
  try {
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:x-MqcywK/user1", {
          method: 'POST',
          body: JSON.stringify({ email, mot_de_passe }),
          headers: { "Content-Type": "application/json" }
      });
      
      if (res.ok) {
          const data = await res.json();
          const users = data?.user ?? []; // Récupération du tableau d'utilisateurs, ou un tableau vide par défaut
          
          // Vérifier si des utilisateurs ont été renvoyés
          if (users.length > 0) {
              const userData = users[0]; // Nous supposons ici qu'il n'y a qu'un seul utilisateur renvoyé
              
              // Création d'un objet User avec les données récupérées
              return {
                  id: userData.id,
                  email: userData.email,
                  nom: userData.nom,
                  role: { libelle: userData.role.libelle },
                  type_compagnie: { libelle: userData.type_compagnie.libelle }
              } as User;
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



 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {label: "email", type: "email", placeholder: "Username ou email"},
        password: { label: "password ", type: "password", placeholder: "Mot de passe" },
      },
      authorize: async (credentials, _req) => {
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
      
          if (parsedCredentials.success) {
              const { email, password } = parsedCredentials.data;
              const user = await getUser(email,password);
              if (user) return user;
              else return null ;
          }
        }catch(e){
          console.log('Invalid credentials');
          return null;
        }
      
    },
  })],
});

