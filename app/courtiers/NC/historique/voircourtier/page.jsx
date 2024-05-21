"use client"


import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import getDetail from "../../../../../lib/api/NC/getDetail"



    export default function DetailsCOURTIER(){
      const searchParams = useSearchParams()
      const [detail, setDetail] = useState(null);
      const [isDetail,strosetIsDetail] =  useState(false);
            
    
      const getDetails = async () => {
        const email = searchParams.get('email').toString()
        const societe = searchParams.get('societe').toString()
        const date = searchParams.get('date').toString()
        console.log(email);
        console.log(societe);
        console.log(date);
        if(email && societe && date){
          const url = "http://localhost:9191/api/RetrouverInfo/rechercheParSocieteTemporaireCOURTIER/"
          const res = await getDetail(url,email,societe,date)

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
          const details = await getDetails();
          //console.log("details "+ details);
          if (details != null) {
              setDetail(details);
              strosetIsDetail(true);
          }else{
            strosetIsDetail(false);
          }
          //console.log(user.nom);
      };
      const [isMounted, setIsMounted] = useState(true);
      useEffect(()=>{
          if(isMounted) {
          fetchMembre();
          }
          return setIsMounted(false)
    
      },[isMounted])
      
    return (
        <>
        <h1 className="text-center font-bold text-gris m-5 text-xl">Détails note de conjoncture  COURTIER</h1>
         <div className='w-full flex justify-center items-center px-[2%]'>
         <div className="overflow-x-auto ">
       
       {isDetail && <form action="" className="p-[2%] border border-vert shadow-md">  <table className="w-full whitespace-no-wrap">
        <tbody>
        <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3  font-bold"> <label htmlFor="" >I- Identification de la société</label></td>
          
          </tr>
         
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Dénomination de la société   :</label></td>
             <td><div className="md:w-48 p-2" >
              <h1 className="text-base text-green-600 dark:text-green-500 ">{detail.societe? detail.societe:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Type assurance</label></td>
            <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.type_assurance? detail.type_assurance:""}</h1>
              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Lieu de siège     :</label></td>
             <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500" >{detail.siege? detail.siege:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nom du Gérant/Directeur Général   :</label></td>
             <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.gerant? detail.gerant:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Contacts téléphoniques  :</label></td>
             <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.telephone? detail.telephone:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Adresse mail  :</label></td>
             <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.email? detail.email:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Numéro du RCCM  :</label></td>
             <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.numero_RCCM? detail.numero_RCCM:""}</h1>

              </div></td> 
          </tr>

          <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3  font-bold"> <label htmlFor="" >* Créateur de la note de conjecture</label></td>
          
          </tr>
    
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nom membre</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nom_membre? detail.nom_membre:""}</h1>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Prénoms membre</label></td>
            <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.prenoms_membre? detail. prenoms_membre:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Adresse mail  :</label></td>
             <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.email_membre? detail.email_membre:""}</h1>

              </div></td> 
          </tr>


          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Genre</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.genre_membre? detail.genre_membre:""}</h1>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Poste </label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.poste_membre? detail.poste_membre:""}</h1>

              </div></td>
          </tr>
         
          <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3  font-bold"> <label htmlFor="" >* Informations sur la note de conjecture</label></td>
          
          </tr>
    

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Date de soumission</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.dateSoumission? detail.dateSoumission:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
            <td> <div class="md:w-48" >

            <h1 className="text-base text-green-600 dark:text-green-500">{detail.trimestre? detail.trimestre:""} </h1>
              </div> </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-gray-800 p-1" htmlFor="nbr">Année</label></td>
            <td> <div class="md:w-48 p-2">
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.annee? detail.annee:""}</h1>
              </div> </td>
          </tr>
          
          <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3 font-bold"> <label htmlFor="" >II- Renseignements généraux</label></td>
          
          </tr>
          <tr className="h-30.6 border">
            <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid font-medium">  Libellés </td>
            <td className="font-medium">Effectif </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Bureaux secondaires</label></td>
             <td><div className="md:w-48 p-2" >
             <h1 className="text-base text-green-600 dark:text-green-500">{detail. bureaux_secondaire? detail. bureaux_secondaire:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="2" className="border-b-0.5 h-171.6 border ">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Abidjan</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.abidjan? detail.abidjan:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Intérieur</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.interieur? detail. interieur:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Sociétés d'assurances partenaires</label></td>
             <td><div className="md:w-48 p-2" >
             <h1 className="text-base text-green-600 dark:text-green-500">{detail.societe_partenaire? detail.societe_partenaire:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Comptes Courants validés et transmis à la DA</label></td>
             <td><div className="md:w-48 p-2" >
             <h1 className="text-base text-green-600 dark:text-green-500">{detail.compte_courant? detail.compte_courant:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Total du Personnel</label></td>
             <td><div className="md:w-48 p-2" >
             <h1 className="text-base text-green-600 dark:text-green-500">{detail.total_personnel? detail.total_personnel:""}</h1>

              </div></td> 
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="2" className="border-b-0.5 h-171.6 border ">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Hommes</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_hommes? detail.nombre_hommes:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Femmes</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_femmes? detail.nombre_femmes:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3 font-bold"> <label htmlFor="" >III- Activités</label></td>
          
          </tr>
          <tr className="h-30.6 border">
            <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid font-medium">  Libellés </td>
            <td className="font-medium">Montant en francs CFA </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Emissions de primes</label> </td>
            <td> <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.emissions_primes? detail.emissions_primes:""}</h1>

              </div></td>
          </tr>
         
         
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor=""> Commissions encaissées</label>
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_encaissees? detail.commissions_encaissees:""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid ">
             <label htmlFor="">Total des Charges ou Frais Générauxl</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.total_charge_ou_frais_generaux? detail.total_charge_ou_frais_generaux:""}</h1>

              </div>
            </td>
          </tr>
    
          <tr className="h-16.2 ">
            <td colSpan="3" className="h-16.2  px-4 py-3 border-r-1 border-soli">
            <p className="font-bold text-red-500">* Courtiers gestionnaire de fonds maladies:</p>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 ">
             <label htmlFor="">Montant des fonds gérés</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.montant_fonds_geres? detail.montant_fonds_geres:""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
             <label htmlFor="">Montant des honoraires</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.montant_honoraires? detail.montant_honoraires:""}</h1>

              </div>
            </td>
          </tr>
          
        </tbody>
      </table></form>
     
    } 
     </div>
{/* 
    <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
    <div className="w-[45%] bg-bleu rounded-lg ">
                            <button type="button" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Envoyer le formulaire</button>
                        </div>
    </div> */}
      
      

         </div>
       
        </>
    )
}