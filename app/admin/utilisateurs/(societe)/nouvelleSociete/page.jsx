"use client"


import { useState } from "react";
import Alert from "../../../../components/ui/Alert"
import FormError from '../../../../components/ui/FormError';
import postSociete from "../../../../../lib/api/Societe/postSociete"



export default function NouvelleSociete() {
  const [resSubmit, setresSubmit] = useState(null);
  const handleSubmit = async (event) => {
      setresSubmit(null)
      event.preventDefault();
      console.log('handleSubmit');
      const formData = new FormData(event.target);
      const res = await postSociete(formData);
      setresSubmit(res)
      console.log("resSubmit :"+resSubmit)
  };

    return (
      <div className='flex justify-center items-center'>
      <div className=" w-[60%] h-[60%] mx-auto ml-35 mt-[3%]">
        <div className="px-10 py-4 border border-gray-300 sm:rounded-md">
          <form onSubmit={handleSubmit} className='flex-col space-y-[5%]'>
              <h1 className="text-center font-bold text-gris m-5 text-xl">Formulaire de création d'une nouvelle société </h1>
            <div className='w-full flex space-x-[3%]'>
                <div className="block w-1/2">
                    <label htmlFor='nom'  className="text-gray-600">Nom de la compagnie</label>
                    <input id='nom' type="text" name="nom" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="NSIA" required/>
                </div>
                <div className="block w-1/2">
                  <label htmlFor='num_agrement' className="text-gray-700">Numéro d'agrement</label>
                  <input id='num_agrement' name="num_agrement" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="AGR1234569" required />
                </div>
            </div>
            
            <div className='w-full flex space-x-[3%]'>
              <div className="block w-1/2">
                  <label htmlFor='siege' className="text-gray-700">Siege</label>
                  <input id='siege' name="siege" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="Bingerville" required />
              </div>
              <div className="block w-1/2">
                  <label htmlFor='dirigeant' className="text-gray-700">Nom du dirigeant </label>
                  <input id='dirigeant' name="dirigeant" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="KOUAKOU ANDREY" required />
                </div>
            </div>
            <div className='w-full flex space-x-[3%]'>
            <div className="block w-1/2">
                <label htmlFor='email' className="text-gray-600">Email</label>
                <input id='email' name="email" type="email" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" placeholder="kouame@nsia.com" required/>
              </div>
            <div className="block w-1/2">
                <label htmlFor='contact' className="text-gray-600">Téléphone</label>
                <input id='contact' name="contact" type="text" className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert" maxLength={10} minLength={10} placeholder="0767568887" required/>
              </div>
              
            </div>
            <div className='w-full flex space-x-[3%]'>
              <div className="block w-1/2">
                <label htmlFor='typeAssurance' className="text-gray-600">Type</label>
                <select id='typeAssurance' name="typeAssurance" required className="appearance-none w-full h-3/4 rounded border border-gray-300 p-1  focus:outline-none focus:border-2 focus:border-vert">
                  <option value="1">VIE</option>
                  <option value="2">IARD</option>
                  <option value="3">COURTIER</option>
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
      {resSubmit == true && <Alert message="La société a bien été enregistré" onClose={()=>{setresSubmit(null)}}></Alert>}
      </div>
       
    )
}
