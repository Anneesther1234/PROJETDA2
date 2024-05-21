'use client'

import React, { useEffect, useState } from 'react';
import postRefuser from "../../../../../../lib/api/NC/postRefuser"
import { useSearchParams } from "next/navigation";
export default function FormRefusernc (props){
return (
    <div>
        <h1 className="text-center font-bold text-gris m-4 text-xl my-5">Motif de refus de la note de conjecture</h1>
                    
                    
        <form onSubmit={props.handle} className="my-10  'w-full flex flex-col justify-center items-center px-[2%]">
            <textarea id="message" name='message'  rows="15" cols="80" className="block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Veillez entrer votre motif de refus..." value={contenuMessage} onChange={(e) => setCommentaire(e.target.value)}></textarea>
            <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
                <div className="w-[40%] bg-bleu rounded-lg ">
                    <button type="submit" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md"  >Envoyer le message</button>
                </div>
            </div>
        </form>

    </div>
);
}