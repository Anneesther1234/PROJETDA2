"use client"

// import { useFormStatus } from 'react-dom';
import {useFormStatus} from 'react-dom';



import Image from "next/image"
import { useEffect, useState } from 'react';
import {  formAuthentification } from '../../lib/actionConnexion';
import FormError from "../components/ui/FormError"
import FormSucess from "../components/ui/FormSucess"
import { signIn } from '../../auth';
import { useRouter } from 'next/navigation';
import getInfo from '../../lib/api/getInfo';

function Connexion(){
    const [messageSubmit, setmessageSubmit] = useState('');
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setmessageSubmit('');
        const formData = new FormData(event.target);
        const token = await formAuthentification(formData);
        console.log('token ',token);
        if(token === null){
            setmessageSubmit("mot de passe ou email incorrecte");
        }
        if(token !== null){
            const user = await getInfo()
            console.log(user)
            if(user.role === "ADMINISTRATEUR"){
            router.push("/admin")
            }
            if(user.role === "EMPLOYEE"){
                router.push("/employeDA")
            }
            if(user.typeAssurance == "IARD" || user.typeAssurance == "VIE"){
                router.push("/compagnies")
            }
            if(user.typeAssurance === "COURTIER"){
                router.push("/courtiers")
            }
        }
        
        
    };
    
    return (
        <div className="flex items-center justify-center w-full h-screen" loading="leazy" >
            <div className="w-2/6 h-5/6 border border-orange rounded-xl bg-white/[.90]" >
                <div className="flex flex-col items-center justify-between w-full h-full px-[13%] ">
                    <div className="flex justify-center pt-[2%]">
                        <Image src="/logoDA.png" alt="logo DA" height={80} width={80}/>
                    </div>
                    <h1 className="text-vert font-bold text-[20px] text-center py-2">Connexion à l'espace société</h1>
                    <form id='formConnexion' onSubmit={handleSubmit} className="flex h-2/3 justify-between flex-col space-y-[5%] w-full pb-[10%]">
                        <input type="email" id="email" name="email" className="w-full border-2 border-vert h-[40px] shadow-sm p-1 placeholder-vert" placeholder="Email" required/>
                        <input type="password" id="password" name="password" className="w-full border-2 border-vert h-[40px] shadow-sm p-1 placeholder-vert" placeholder="Mot de passe" required/>
                        <div className="">
                            <a className="text-vert font-semibold" href="#">Mot de passe oublié ?</a><br/>
                        </div>
                        {messageSubmit === "mot de passe ou email incorrecte" && <FormError message="mot de passe ou email incorrecte"></FormError>}
                        {messageSubmit === "Connexion rérussie" && <FormSucess message="Connexion rérussie"></FormSucess> }
                        
                        <LoginButton />
                    </form>
                </div>
            </div>
        </div>
    )
}

function LoginButton() {
    const { pendding } = useFormStatus()
    return (
    <div className="flex justify-center" >
        <button type="submit" className="bg-orange text-white rounded-2xl py-1 px-3 text-xl" >Connexion</button>
    </div>
    );
}



export default Connexion