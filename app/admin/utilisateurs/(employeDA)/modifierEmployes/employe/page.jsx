"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Alert from "../../../../../components/ui/Alert"
import FormError from '../../../../../components/ui/FormError';
import { useRouter } from 'next/router';
import getInfo from '../../../../../../lib/api/getInfo'
import putEmployeDA from '../../../../../../lib/api/employeDA/putEmployeDA'
import  {useSearchParams}  from 'next/navigation';

export default function Employe(){
    const searchParams = useSearchParams()
    const [resSubmit, setresSubmit] = useState(null);
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
    
    useEffect(() =>{
      const fetchData = async () => {
        const userS = await getUser();
        console.log(user);
        if (userS != null) {
            setUser(userS);
            setIsUser(true);
            document.addEventListener('submit',handleSubmit)
        }else{
          setIsUser(false);
        }
        // console.log(user.nom);
      };
      fetchData()
    }, [isUser])
    
    const handleSubmit = async (event) => {
        setresSubmit(null)
        event.preventDefault();
        console.log('handleSubmit');
        if (isUser){
          const formData = new FormData(event.target);
          formData.append("email",searchParams.get('email').toString())
          console.log('email ' +formData.get("email"));
          if(formData != null ){
            const res = await putEmployeDA(formData);
            setresSubmit(res)
          }
          
          console.log("resSubmit :"+resSubmit)
        }
        
    };
    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            { isUser && <form id='form' className='flex-col space-y-[5%]'>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de modification d'un employé DA </h1>
              <div className='w-full flex space-x-[3%]'>
                  <div className="block w-1/2">
                      <label htmlFor='nom'  className="text-gray-600">Nom</label>
                      <input id='nom' type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.nom ? user.nom : ""} disabled/>
                  </div>
                  <div className="block w-1/2">
                      <label htmlFor='prenoms' className="text-gray-600">Prénoms</label>
                      <input id='prenoms' type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.prenom ? user.prenom : ""}  disabled/>
                  </div>
              </div>
              
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <label htmlFor='email' className="text-gray-700">Email </label>
                    <input id='email' type="email" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.email}  disabled />
                </div>
                <div className="block w-1/2">
                    <label htmlFor='username' className="text-gray-700">Nom d'utilisateur</label>
                    <input id='username' type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.username}  disabled />
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <label htmlFor='poste' className="text-gray-600">Poste</label>
                  <input id='poste' type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.poste}  disabled/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='telephone' className="text-gray-600">Téléphone</label>
                  <input id='telephone' type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.telephone}  disabled/>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <label htmlFor='motpasse1' className="text-gray-600">Mot de passe</label>
                  <input id='motpasse1' name='motpasse1' type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" minLength="8" placeholder="(plus de 6+ caractères)" required/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='motpasse2' className="text-gray-600">Nouveau mot de passe</label>
                  <input id='motpasse2' name='motpasse2' type="password" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" minLength="8" placeholder="(plus de 6+ caractères)" required/>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                
                <div className="block w-1/2">
                  <label htmlFor='role' className="text-gray-600">Rôle</label>
                  <select id='role' name="role" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" defaultValue={user.role == "1" ? 1 : 2}>
                    <option value="1" >ADMINISTRATEUR</option>
                    <option value="2" >EMPLOYÉ</option>
                  </select>
                </div>
              </div>
              {resSubmit == false && <div className="w-full h-fit  flex justify-center">
                <div className='w-full'>
                  <FormError message="Nous ne pouvons pas modifier cet Utilisateur"></FormError>
                </div>
              </div>}
              <div className="w-full h-full flex justify-center pt-[2%]">
                <button type="submit"className=" h-10 w-1/2 px-5 text-white bg-green-700 rounded-lg transition-colors focus:shadow-outline hover:bg-green-800">
                  Modifier
                </button>
              </div>
              <div>
              
              </div>
            </form>}
          </div>
        </div>
        {resSubmit == true && <Alert message="L'utilisateur a bien été modifié" onClose={()=>{setresSubmit(null)}}></Alert>}
        </div>
       
    )
}
