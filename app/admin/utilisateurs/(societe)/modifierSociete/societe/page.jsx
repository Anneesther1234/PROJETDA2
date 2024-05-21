"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Alert from "../../../../../components/ui/Alert"
import FormError from '../../../../../components/ui/FormError';
import { useRouter } from 'next/router';
import getInfo from '../../../../../../lib/api/getInfo'
import putSociete from '../../../../../../lib/api/Societe/putSociete'
import  {useSearchParams}  from 'next/navigation';

export default function Societe(){
    const searchParams = useSearchParams()
    const [resSubmit, setresSubmit] = useState(null);
    const [isUser,setIsUser] =  useState(false);
    const [user, setUser] = useState(null);
    const [type, setType] = useState(1);
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
    const fetchData = async () => {
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
    
    useEffect(() =>{
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
            const res = await putSociete(formData);
            setresSubmit(res)
          }
          
          console.log("resSubmit :"+resSubmit)
        }
        
    };
    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            { isUser && <form id='form' onSubmit={handleSubmit} className='flex-col space-y-[5%]'>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de modification d'un employé </h1>
              <div className='w-full flex space-x-[3%]'>
                  <div className="block w-1/2">
                      <label htmlFor='nom'  className="text-gray-600">Nom de la compagnie</label>
                      <input id='nom' type="text" name="nom" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="NSIA" defaultValue={user.nom ? user.nom : ""} required/>
                  </div>
                  <div className="block w-1/2">
                      <label htmlFor='num_agrement' className="text-gray-700">Numéro d'agrement</label>
                  <input id='num_agrement' name="num_agrement" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="AGR1234569" defaultValue={user.num_agrement ? user.num_agrement : ""} required />
                  </div>
              </div>
              
              <div className='w-full flex space-x-[3%]'>
              <div className="block w-1/2">
                  <label htmlFor='siege' className="text-gray-700">Siege</label>
                  <input id='siege' name="siege" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="Bingerville" defaultValue={user.siege ? user.siege : ""} required />
              </div>
              <div className="block w-1/2">
                  <label htmlFor='dirigeant' className="text-gray-700">Nom du dirigeant </label>
                  <input id='dirigeant' name="dirigeant" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="KOUAKOU ANDREY" defaultValue={user.dirigeant ? user.dirigeant : ""} required />
                </div>
            </div>
            <div className='w-full flex space-x-[3%]'>
            <div className="block w-1/2">
                <label htmlFor='email' className="text-gray-600">Email</label>                
                <p  className="w-full h-3/4 rounded  p-1"  >{user.email ? user.email : ""}</p>

              </div>
            <div className="block w-1/2">
                <label htmlFor='contact' className="text-gray-600">Téléphone</label>
                <input id='contact' name="contact" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" maxLength={10} minLength={10} placeholder="0767568887" defaultValue={user.contact ? user.contact : ""} required/>
              </div>
              
            </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <label  className="text-gray-600">Type</label>
                  <p  className="w-full h-3/4 rounded  p-1 "  >{user.type_assurance ? user.type_assurance : ""}</p>
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
