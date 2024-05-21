"use client"
import React, { useState } from 'react';
import { postEmployeDA } from '../../../../../lib/api/employeDA/postEmployeDA'
import Image from 'next/image';
import Alert from "../../../../components/ui/Alert"
import FormError from '../../../../components/ui/FormError';



export default function Nouvelemploye () {
  const [resSubmit, setresSubmit] = useState(null);
  const handleSubmit = async (event) => {
      setresSubmit(null)
      event.preventDefault();
      console.log('handleSubmit');
      const formData = new FormData(event.target);
      const res = await postEmployeDA(formData);
      setresSubmit(res)
      console.log("resSubmit :"+resSubmit)
  };

    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleSubmit} className='flex-col space-y-[5%]'>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de création d'un nouvel employé </h1>
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
                  <label htmlFor='genre' className="text-gray-600">Genre</label>
                  <select id='genre' name="genre" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert">
                    <option value="F">Feminin</option>
                    <option value="M">Masculin</option>
                  </select>
                </div>
                <div className="block w-1/2">
                    <label htmlFor='email' className="text-gray-700">Email </label>
                    <input id='email' name="email" type="email" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="LINZAAE@tresor.gouv.ci" required />
                </div>
               
              </div>
              <div className='w-full flex space-x-[3%]'>
              <div className="block w-1/2">
                    <label htmlFor='username' className="text-gray-700">Nom d'utilisateur</label>
                    <input id='username' name="username" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="LINZAAE@tresor.gouv.ci" required />
                </div>
                <div className="block w-1/2">
                  <label htmlFor='motpasse' className="text-gray-600">Mot de passe</label>
                  <input id='motpasse' name="motpasse" type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" minLength="8" placeholder="(plus de 6+ caractères)" required/>
                </div>
                
              </div>
              <div className='w-full flex space-x-[3%]'>
              <div className="block w-1/2">
                  <label htmlFor='poste' className="text-gray-600">Poste</label>
                  <input id='poste' name="poste" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="actuaire" required/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='telephone' className="text-gray-600">Téléphone</label>
                  <input id='telephone' name="telephone" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="(numéro à 10 chiffres)" required/>
                </div>
                
                
              </div>
              <div className="block w-1/2">
                  <label htmlFor='role' className="text-gray-600">Rôle</label>
                  <select id='role' name="role" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert">
                    <option value="1">ADMINISTRATEUR</option>
                    <option value="2">EMPLOYÉ</option>
                  </select>
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
