'use server'

import { NextRequest, NextResponse } from 'next/server';
import getInfo from './lib/api/getInfo'


export async function middleware(request){
  // const isCompagnies = request.nextUrl.pathname.startsWith(`/compagnies`);
  // const isCourtiers = request.nextUrl.pathname.startsWith(`/courtiers`);
  // const isAdmin = request.nextUrl.pathname.startsWith(`/admin`);
  // const isEmployeDA = request.nextUrl.pathname.startsWith(`/employeDA`);
  //Rediriger vers /home si l'url est /
  if(request.nextUrl.pathname == '/'){
    request.nextUrl.pathname = "/home"
    return NextResponse.redirect(request.nextUrl)
  }
 
  NextResponse.next()
  
}
 
// export const config = { matcher: ['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|trpc)(.*)'] }
export const config = { matcher: [
  "/admin/:path*",
  "/employeDA/:path*",
  "/compagnies/:path*",
  "/courtiers/:path*",
] }