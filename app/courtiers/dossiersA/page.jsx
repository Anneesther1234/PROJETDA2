"use serveur"

import { cookies } from 'next/headers';
import DAVie from "./DAVie"
import DANonVie from "./DANonVie"

export default function DANonvie ()  {
    const type_compagnie = cookies().has("type_compagnie") ? cookies().get("type_compagnie")["value"] : ""
    return (
        <div className='w-full flex justify-center items-center px-[2%]  '>
        {type_compagnie == "VIE" && <DAVie></DAVie> } 
        {type_compagnie == "IARD" && <DANonVie></DANonVie>}
        </div>
    );
}

