'use client'

import React, { useEffect, useState } from 'react';
import postRefuser from "../../../../../../lib/api/NC/postRefuser"
import { useSearchParams } from "next/navigation";
import Image from "next/image"

export default function Commentaire () {
    const searchParams = useSearchParams()
    const [contenuMessage, setCommentaire] = useState('');
    const [resSubmit, setResSubmit] = useState(false);
    //Réponse après la soumission du formulaire
    const [resSuccess, setSuccess] = useState(false);
    const [resError, setError] = useState(false);

    //  const handleSubmit = () => {
    //   setResSubmit(true);
    // };

    const RefuserNote = async (event) => {
        event.preventDefault();
        const email = searchParams.get('email').toString()
        const societe = searchParams.get('societe').toString()
        const date = searchParams.get('date').toString()
        console.log(email);
        console.log(societe);
        console.log(date);
        if(email && societe && date){
          const url = "http://localhost:9191/api/VIE/final/"
          const res = await postRefuser(url, date, societe, email, contenuMessage)
          if(res != null){
            setSuccess(true)
            return res 
          }else{
            setError(true)
            return null
          }
        }else{
          return null;
        }
      
        }
      
    return (
        <div>
            <h1 className="text-center font-bold text-gris m-4 text-xl my-5">Motif de refus de la note de conjecture VIE</h1>
                        
                        
            <form onSubmit={RefuserNote} className="my-10 w-full flex flex-col justify-center items-center px-[2%]">
                <textarea id="message" name='message'  rows="15" cols="80" className="block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2" placeholder="Veillez entrer votre motif de refus..." value={contenuMessage} onChange={(e) => setCommentaire(e.target.value)}></textarea>
                <div className="w-full flex justify-center space-x-[5%] my-[2%] mr-[2%]">
                    <div className="w-[25%] bg-bleu rounded-lg ">
                        <button type="submit" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Envoyer le message</button>
                    </div>
                </div>
                  {/* Popup de succès */}
     {resSuccess && (
        <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            {/* <!--content--> */}
            <div className="">
              {/* <!--body--> */}
              <div className="text-center p-5 flex flex-col items-center justify-between">
                <Image src="/check-mark.png" width={70} height={70} alt="check-mark" />
                <p className="text-sm text-gray-500 px-8">La note de conjoncture a été refusée</p>
              </div>
              {/* <!--footer--> */}
              <div className="p-3 mt-2 text-center space-x-4 md:block">
                <button onClick={() => setSuccess(false)} className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-blue-600">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup d'erreur de validation  */}
      {resError && <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                {/* <!--content--> */}
                <div className="">
                    {/* <!--body--> */}
                    <div className="text-center p-5 flex flex-col items-center justify-between">
                        <Image src='/exclamation.png' width={50} height={50} alt="check-mark"/>
                        <p className="text-sm text-gray-500 px-8">La note de conjoncture a déjà eté traitée</p>    
                    </div>
                    {/* <!--footer--> */}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={()=>{setError(false)}}  className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-blue-600">
                          OK
                        </button>
                    </div>
                </div>
            </div>
        </div>}
            </form>
    

        </div>
    );
};