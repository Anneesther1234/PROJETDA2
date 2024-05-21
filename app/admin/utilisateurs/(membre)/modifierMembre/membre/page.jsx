"use client"
import React, { useEffect, useState } from 'react';
import { putMembre } from '../../../../../../lib/api/membre/putMembre'
import Image from 'next/image';
import Alert from "../../../../../components/ui/Alert"
import FormError from '../../../../../components/ui/FormError';
import getInfo from '../../../../../../lib/api/getInfo'
import { useSearchParams } from 'next/navigation';


export default function NouveauMembre () { 
    const searchParams = useSearchParams()
    const [resSubmit, setresSubmit] = useState(null);
    const [societe,setSociete] = useState([{id:"", nom:"",type_assurance:""}])
    const [isUser,setIsUser] =  useState(false);
    const [user, setUser] = useState(null);
    const getUser = async () => {
    const email = searchParams.get('email').toString()
    if(email){
        const res = await getInfo(email)
        if(res != null){
        return res 
        }else{
        return null
        }
    }else{
        return null;
    }
    };
    const fetchMembre = async () => {
        const userS = await getUser();
        // console.log(user);
        if (userS != null) {
            setUser(userS);
            setIsUser(true);
        }else{
        setIsUser(false);
        }
        // console.log(user.nom);
    };
    const [isMounted, setIsMounted] = useState(true);
    useEffect(()=>{
    if(isMounted) {
        fetchMembre();
    }
    return setIsMounted(false)

    })

    const handleSubmit = async (event) => {
        setresSubmit(null)
        event.preventDefault();
        console.log('handleSubmit');
        const formData = new FormData(event.target);
        if(searchParams.get('email')){
          formData.append("email",searchParams.get('email').toString())
        }
        console.log('email ' +formData.get("email"));
        if(formData != null ){
            const res = await putMembre(formData);
            setresSubmit(res)
        }
        console.log("resSubmit :"+resSubmit)
    };

    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            { isUser && <form  className='flex-col space-y-[5%]' onSubmit={handleSubmit}>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de création d'un nouveau membre d'assurance</h1>
              <div className='w-full flex space-x-[3%]'>
                  <div className="block w-1/2">
                      <h1   className="text-gray-600 ">Nom</h1>
                      <p className="w-full h-3/4 rounded  " placeholder="KOUAME">{user.nom ? user.nom:""}</p>
                  </div>
                  <div className="block w-1/2">
                      <h1 className="text-gray-600 ">Prénoms</h1>
                      <p className="w-full h-3/4 rounded " placeholder="BENJAMIN FRANCK">{user.prenoms ? user.prenoms:""}</p>
                  </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <h1 htmlFor='poste' className="text-gray-600 ">Poste</h1>
                  <p className="w-full h-3/4 rounded " placeholder="actuaire">{user.poste ? user.poste:""}</p>
                </div>
                <div className="block w-1/2">
                    <h1 className="text-gray-700 ">Email </h1>
                    <p className="w-full h-3/4 rounded" placeholder="LINZAAE@tresor.gouv.ci">{user.email ? user.email:""}</p>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <h1 className="text-gray-600 ">Téléphone</h1>
                  <p className="w-full h-3/4 rounded  " placeholder="(numéro à 10 chiffres)">{user.telephone ? user.telephone:""}</p>
                </div>
                <div className="block w-1/2">
                    <h1 className="text-gray-600 ">Société</h1>
                    <p  required className="w-full h-3/4 rounded ">{user.nom_societe ? user.nom_societe:""} {user.typeAssurance ? user.typeAssurance:""}</p>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <label htmlFor='nouveauMotDePasse' className="text-gray-600">Nouveau mot de passe</label>
                  <input id='nouveauMotDePasse' name="nouveauMotDePasse" type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" minLength="8" placeholder="(plus de 8+ caractères)" required/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='confirmerNouveauMotDePasse' className="text-gray-600">Confirmer le mot de passe</label>
                  <input id='confirmerNouveauMotDePasse' name="confirmerNouveauMotDePasse" type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert"minLength="8" placeholder="(plus de 8+ caractères)" required/>
                </div>
              </div>
              {resSubmit == false && <div className="w-full h-fit  flex justify-center">
              <div className='w-full'>
                <FormError message="Nous ne pouvons pas modifier cet Utilisateur"></FormError>
              </div>
            </div>}
            <div className="w-full h-full flex justify-center pt-[2%]">
              <button type="submit"className=" h-10 w-1/2 px-5 text-white bg-green-700 rounded-lg transition-colors focus:shadow-outline hover:bg-green-800">
                Enregistrer
              </button>
            </div>
            <div>
            
            </div>
          </form>}
        </div>
      </div>
      {resSubmit == true && <Alert message="L'utilisateur a bien été enregistré" onClose={()=>{setresSubmit(null)}}></Alert>}
      </div>
       
    )
}
