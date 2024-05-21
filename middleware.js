'use server'

import { NextRequest, NextResponse } from 'next/server';
import getInfo from './lib/api/getInfo'


export async function middleware(request){
  const isCompagnies = request.nextUrl.pathname.startsWith(`/compagnies`);
  const isCourtiers = request.nextUrl.pathname.startsWith(`/courtiers`);
  const isAdmin = request.nextUrl.pathname.startsWith(`/admin`);
  const isEmployeDA = request.nextUrl.pathname.startsWith(`/employeDA`);
  //Rediriger vers /home si l'url est /
  if(request.nextUrl.pathname == '/'){
    request.nextUrl.pathname = "/home"
    return NextResponse.redirect(request.nextUrl)
  }
  //Verifier si le token existe dans les cookies
  const authToken = request.cookies.token;
  console.log("methode :" + request.method);
  if (!authToken){
    request.nextUrl.pathname = '/connexion'
    NextResponse.redirect(request.nextUrl);
  }
  //Recuperer l'utilisateur connecter
  let user = false
  try{
    // Récupérer l'utilisateur
    user = await getInfo()
    // console.log("user : ",user);
  }catch{
    user = false
  }
  // console.log("role :"+role)
  if(user){
    if (isCompagnies) {
      console.log("url start with /compagnies")
      if (user.typeAssurance === "VIE"){
        request.nextUrl.pathname = '/compagnies'
        NextResponse.redirect(request.nextUrl);
      }else if (user.typeAssurance === "IARD"){
        request.nextUrl.pathname = '/compagnies'
        NextResponse.redirect(request.nextUrl);
      }else{
        console.log("redirect /connexion");
        request.nextUrl.pathname = `/connexion`
        return NextResponse.redirect(request.nextUrl);
      }
    }
    if(isAdmin){
      console.log("url start with /admin")
      if (user.role === "ADMINISTRATEUR"){
      //   request.nextUrl.pathname = '/admin'
        return NextResponse.next()
      }else{
        console.log("redirect /connexion");
        request.nextUrl.pathname = `/connexion`
        return NextResponse.redirect(request.nextUrl)
      }
    }
    if(isEmployeDA){
      console.log("url start with /compagnies")
      if (user.role === "EMPLOYEE"){
        request.nextUrl.pathname = '/employeDA'
        NextResponse.redirect(request.nextUrl);
      }else{
        console.log("redirect /connexion");
        request.nextUrl.pathname = `/connexion`
        return NextResponse.redirect(request.nextUrl);
      }
    }
    if(isCourtiers){
      console.log("url start with /courtiers")
      if (user.typeAssurance === "COURTIER"){
        request.nextUrl.pathname = '/courtiers'
        NextResponse.next();
      }else{
        console.log("redirect /connexion");
        request.nextUrl.pathname = `/connexion` 
        return NextResponse.redirect(request.nextUrl);
      }
    }
  }else{
    console.log("no");
    console.log("redirect 1 /connexion");
    request.nextUrl.pathname = '/connexion'
    return NextResponse.redirect(request.nextUrl);
  }
  
}
 
// export const config = { matcher: ['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|trpc)(.*)'] }
export const config = { matcher: [
  "/admin/:path*",
  "/employeDA/:path*",
  "/compagnies/:path*",
  "/courtiers/:path*",
] }