"use client"
import React, { useEffect, useState } from 'react';
import { postMembre } from '../../../../../lib/api/membre/postMembre'
import Image from 'next/image';
import Alert from "../../../../components/ui/Alert"
import FormError from '../../../../components/ui/FormError';
import getSocietes from '../../../../../lib/api/Societe/getSocietes'




export default function NouveauMembre () { 
  const [resSubmit, setresSubmit] = useState(null);
  const [societe,setSociete] = useState([{id:"", nom:"",type_assurance:""}])
  const fetchSociete = async () => {
    const result = await getSocietes();
    const table = new Array()
    if(result != null){
      result.forEach((element) => {
          table.push(
            {
              "id": element.id_societe,
              "nom": element.nom,
              "type_assurance": element.type_assurance
            }
          )
      });
      table.sort(function (a, b) {
        return (a.nom).localeCompare(b.nom);
      });
      console.log(table)
      setSociete(table)
    }
  };
  const listeSociete = societe.map((element) => (  
    <option key={element.id} value={element.id}>{element.nom} {element.type_assurance} </option>
  ))
  const [isMounted, setIsMounted] = useState(true);
  useEffect(()=>{
    if(isMounted) {
      fetchSociete();
    }
    return setIsMounted(false)

  })

   const handleSubmit = async (event) => {
      setresSubmit(null)
      event.preventDefault();
      console.log('handleSubmit');
      const formData = new FormData(event.target);
      const res = await postMembre(formData);
      setresSubmit(res)
     console.log("resSubmit :"+resSubmit)
  };

    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            <form  className='flex-col space-y-[5%]' onSubmit={handleSubmit}>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de création d'un nouveau membre d'assurance</h1>
              <div className='w-full flex space-x-[3%]'>
                  <div className="block w-1/2">
                      <label htmlFor='nom'  className="text-gray-600">Nom</label>
                      <input id='nom' type="text" name="nom" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="KOUAME" required/>
                  </div>
                  <div className="block w-1/2">
                      <label htmlFor='prenoms' className="text-gray-600">Prénoms</label>
                      <input id='prenoms' type="text" name="prenoms" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="BENJAMIN FRANCK" required/>
                  </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <label htmlFor='genre' className="text-gray-700">Genre</label>
                    <select id='genre' name="genre" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert">
                      <option value="F">Feminin</option>
                      <option value="M">Masculin</option>
                    </select>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='poste' className="text-gray-600">Poste</label>
                  <input id='poste' name="poste" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="actuaire" required/>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <label htmlFor='email' className="text-gray-700">Email </label>
                    <input id='email' name="email" type="email" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="LINZAAE@tresor.gouv.ci" required />
                </div>
                <div className="block w-1/2">
                    <label htmlFor='username' className="text-gray-700">Nom d'utilisateur</label>
                    <input id='username' name="username" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="LINZAAE" required />
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <label htmlFor='motpasse' className="text-gray-600">Mot de passe</label>
                  <input id='motpasse' name="motpasse" type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" minLength="8" placeholder="(plus de 6+ caractères)" required/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='telephone' className="text-gray-600">Téléphone</label>
                  <input id='telephone' name="telephone" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="(numéro à 10 chiffres)" required/>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                <label htmlFor='societe' className="text-gray-600">Societe</label>
                <select id='societe' name="societe" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert">
                  {
                    listeSociete
                  }
                </select>
              </div>
             
              </div>
              {resSubmit == false && <div className="w-full h-fit  flex justify-center">
              <div className='w-full'>
                <FormError message="L'email existe déjà"></FormError>
              </div>
            </div>}
            <div className="w-full h-full flex justify-center pt-[2%]">
              <button type="submit"className=" h-10 w-1/2 px-5 text-white bg-green-700 rounded-lg transition-colors focus:shadow-outline hover:bg-green-800">
                Enregistrer
              </button>
            </div>
            <div>
            
            </div>
          </form>
        </div>
      </div>
      {resSubmit == true && <Alert message="L'utilisateur a bien été enregistré" onClose={()=>{setresSubmit(null)}}></Alert>}
      </div>
       
    )
}
