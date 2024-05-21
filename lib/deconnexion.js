"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function disconnectUser() {
    cookies().delete('token')
    cookies().delete('email')
    cookies().delete('role')
    cookies().delete('nom')
    cookies().delete('type_compagnie')
    return redirect("/home")
}