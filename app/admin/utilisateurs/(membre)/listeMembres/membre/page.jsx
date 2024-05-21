"use client"
import React, { useEffect, useState } from 'react';
import getInfo from '../../../../../../lib/api/getInfo'
import getInfoEmail from '../../../../../../lib/api/getInfo copy';
import { useSearchParams } from 'next/navigation';




export default function NouveauMembre () { 
    const [user, setUser] = useState(null);
    const [isUser,setIsUser] =  useState(false);
    const searchParams = useSearchParams()
    const getUser = async () => {
        const email = searchParams.get('email').toString()
        if(email){
          const res = await getInfoEmail(email)
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


    return (
        <div className='flex justify-center items-center'>
        <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
          <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
            { isUser &&  <div  className='flex-col space-y-[5%]'>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Détails de l'utilisateur</h1>
              <div className='w-full flex space-x-[3%]'>
                  <div className="block w-1/2">
                      <h1   className="text-gray-600 text-center">Nom</h1>
                      <p className="w-full h-3/4 rounded  p-1 text-center border">{user.nom ? user.nom:""}</p>
                  </div>
                  <div className="block w-1/2">
                      <h1 className="text-gray-600 text-center">Prénoms</h1>
                      <p className="w-full h-3/4 rounded  p-1 text-center border">{user.prenoms ? user.prenoms:""}</p>
                  </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <h1 className="text-gray-700 text-center">Genre</h1>
                    <p  className="w-full h-3/4 rounded  p-1 text-center border">{user.genre ? user.genre:""}</p>
                </div>
                <div className="block w-1/2">
                  <h1 className="text-gray-600 text-center">Poste</h1>
                  <p className="w-full h-3/4 rounded  p-1 text-center border" >{user.poste ? user.poste:""}</p>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <h1 className="text-gray-700 text-center">Email </h1>
                    <p className="w-full h-3/4 rounded  p-1 text-center border" >{user.email ? user.email:""}</p>
                </div>
                <div className="block w-1/2">
                    <h1 className="text-gray-700 text-center">Nom d'utilisateur</h1>
                    <p className="w-full h-3/4 rounded  p-1 text-center border" >{user.username ? user.username:""}</p>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <h1 className="text-gray-600 text-center">Téléphone</h1>
                  <p className="w-full h-3/4 rounded  p-1 text-center border" >{user.telephone ? user.telephone:""}</p>
                </div>
                <div className="block w-1/2">
                    <h1 className="text-gray-600 text-center">Société</h1>
                    <p  required className="w-full h-3/4 rounded  p-1 text-center border">{user.nom_societe ? user.nom_societe:""}</p>
                </div>
              </div>
              <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                  <h1 className="text-gray-600 text-center">Type</h1>
                  <p className="w-full h-3/4 rounded  p-1 text-center border" >{user.typeAssurance? user.typeAssurance:""}</p>
                </div>
              </div>
            {/* <div className="w-full h-full flex justify-center pt-[2%]">
              <button className=" h-10 w-1/2 px-5 text-white bg-green-700 rounded-lg transition-colors focus:shadow-outline hover:bg-green-800">
                Enregistrer
              </button>
            </div> */}
          </div>}
        </div>
      </div>
      </div>
       
    )
}
