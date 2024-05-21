import { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

 
export const authConfig = {
  pages: {
    signIn: '/connexion',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      
      console.log(isLoggedIn)
      const isOnDashboard = nextUrl.pathname.startsWith('/compagnies');
      const isConnexion = nextUrl.pathname.startsWith('/connexion');
      if (isOnDashboard) {
        if (isLoggedIn){
          console.log(auth.role)
          console.log("continue to next url")
          return  true;
        } 
        else return Response.redirect(new URL('/connexion', nextUrl));
      }else if(isConnexion){
        if (isLoggedIn){
          console.log("continue to next url after connexion")
          return  Response.redirect(new URL('/compagnies', nextUrl));
        } 
        
      }
    },
    
  },// Add providers with an empty array for now
};