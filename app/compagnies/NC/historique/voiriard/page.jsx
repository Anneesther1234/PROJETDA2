"use client"


import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import getDetail from "../../../../../lib/api/NC/getDetail"



    export default function DetailsNCIARD (){
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
          const url = "http://localhost:9191/api/RetrouverInfo/rechercheParSocieteTemporaireIARD/"
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
        <h1 className="text-center font-bold text-gris m-5 text-xl">Détails note de conjoncture  IARD</h1>
         <div className='w-full flex justify-center items-center px-[2%]'>
         <div className="overflow-x-auto ">
       
       {isDetail && <form action="" className="p-[2%] border border-vert shadow-md"> <table className="w-full whitespace-no-wrap">
        <tbody>

          
          {/* <tr>
            <td>&nbsp;  &nbsp; </td>
          </tr> */}
          <tr className="h-30.6 border">
            <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid">  Libellés </td>
            <td className="p-2"> Données </td>
            
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Date de soumission</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.date_soumission? detail.date_soumission:""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
            <td> <div class="md:w-48 p-2" >

            <h1 className="text-base text-green-600 dark:text-green-500">{detail.trimestre? detail.trimestre: detail.trimestre == 0 ? 0 :""}</h1>
              </div> </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-gray-800 p-1" htmlFor="nbr">Année</label></td>
            <td> <div class="md:w-48 p-2">
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.annee? detail.annee: detail.annee == 0 ? 0 :""}</h1>
              </div> </td>
          </tr>
          
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nombre de contrats d'assurance</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_de_contrats_assurance? detail.nombre_de_contrats_assurance: detail.nombre_de_contrats_assurance == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
         
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Primes émises nettes d'annulations (Chiffre d'affaires)</label></td>
            {/* <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td> */}
              <td> <div className="md:w-48 p-2"><h1 className="text-base text-green-600 dark:text-green-500">{detail.prime_emise_nette_annulations? detail.prime_emise_nette_annulations: detail.prime_emise_nette_annulations == 0 ? 0 :""}</h1></div> 
 </td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="11" className="border-b-0.5 h-171.6 border ">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Maladie</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.maladie_prime_emise? detail.maladie_prime_emise: detail.maladie_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Accidents corporels</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.accidents_corporels_prime_emise? detail.accidents_corporels_prime_emise: detail.accidents_corporels_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic"> RC Automobile</label> </td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.rc_automobile_prime_emise? detail.rc_automobile_prime_emise: detail.rc_automobile_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_risques_automobiles_prime_emise? detail.autres_risques_automobiles_prime_emise: detail.autres_risques_automobiles_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Incendie et autres dommages aux biens</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.incendie_et_autres_dommages_aux_biens_prime_emise? detail.incendie_et_autres_dommages_aux_biens_prime_emise: detail.incendie_et_autres_dommages_aux_biens_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.credit_prime_emise? detail.credit_prime_emise: detail.credit_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.caution_prime_emise? detail.caution_prime_emise: detail.caution_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Assurance importation des marchandises</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurance_importation_des_marchandises_prime_emise? detail.assurance_importation_des_marchandises_prime_emise: detail.assurance_importation_des_marchandises_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">Microassurance</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.microassurance_prime_emise? detail.microassurance_prime_emise: detail.microassurance_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <label htmlFor="">dont Assurances indicielles</label>  </td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurances_indicielles_prime_emise? detail.assurances_indicielles_prime_emise: detail.assurances_indicielles_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border   px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_risques_dommages_prime_emise  ? detail.autres_risques_dommages_prime_emise: detail.autres_risques_dommages_prime_emise == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Acceptations dommages</label> </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.acceptations_dommages? detail.acceptations_dommages: detail.acceptations_dommages == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Primes cédées en Réassurance</label> </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.prime_cedee_en_reassurance? detail.prime_cedee_en_reassurance: detail.prime_cedee_en_reassurance == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Sinistres à payer (SAP)**</label> </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.sinistre_a_payees? detail.sinistre_a_payees: detail.sinistre_a_payees == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Stock de sinistres bons à payer</label> </td>
            <td> <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.stock_de_sinistres_bons_a_payer? detail.stock_de_sinistres_bons_a_payer: detail.stock_de_sinistres_bons_a_payer == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="11" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Maladie</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.maladie_stock? detail.maladie_stock: detail.maladie_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Accidents corporels</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.accidents_corporels_stock? detail.accidents_corporels_stock: detail.accidents_corporels_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">RC Automobile</label> </td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.rc_automobile_stock? detail.rc_automobile_stock: detail.rc_automobile_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label>  </td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_risques_automobiles_stock? detail.autres_risques_automobiles_stock: detail.autres_risques_automobiles_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Incendie et autres dommages aux biens</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.incendie_et_autres_dommages_aux_biens_stock? detail.incendie_et_autres_dommages_aux_biens_stock: detail.incendie_et_autres_dommages_aux_biens_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.credit_stock? detail.credit_stock: detail.credit_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.caution_stock? detail.caution_stock: detail.caution_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Assurance importation des marchandises</label> </td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurance_importation_des_marchandises_stock? detail.assurance_importation_des_marchandises_stock: detail.assurance_importation_des_marchandises_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Microassurance</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.microassurance_stock? detail.microassurance_stock: detail.microassurance_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  dont  <label htmlFor="">Assurances indicielles</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurances_indicielles_stock? detail.assurances_indicielles_stock: detail.assurances_indicielles_stock == 0 ? 0 :""}</h1>


              </div></td>
            
          </tr>
          <tr className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_risques_dommages_stock? detail.autres_risques_dommages_stock: detail.autres_risques_dommages_stock == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">  <label htmlFor="">Sinistres payés </label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.dont_sisnistre_payee? detail.dont_sisnistre_payee: detail.dont_sisnistre_payee == 0 ? 0 :""}</h1>


              </div></td>
            </tr>
            <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">  <label htmlFor="">Recours à encaisser** </label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.recours_encaisser? detail.recours_encaisser: detail.recours_encaisser == 0 ? 0 :""}</h1>


              </div></td>
            </tr>
            <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">  <label htmlFor="">Recours effectivement encaissés</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.recours_effectivement_encaisser? detail.recours_effectivement_encaisser: detail.recours_effectivement_encaisser == 0 ? 0 :""}</h1>


              </div></td>
            </tr>
            <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Production des Courtiers</label> </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.production_des_courtiers? detail.production_des_courtiers: detail.production_des_courtiers == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux Courtiers</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_servies_aux_courtiers? detail.commissions_servies_aux_courtiers: detail.commissions_servies_aux_courtiers == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Production des autres intermédiaires</label> </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.production_autres_intermediaires? detail.production_autres_intermediaires: detail.production_autres_intermediaires == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux autres intermédiaires</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_servies_aux_autres_intermediaires? detail.commissions_servies_aux_autres_intermediaires: detail.commissions_servies_aux_autres_intermediaires == 0 ? 0 :""}</h1>


              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor="">Créances sur l’Etat</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.creances_sur_etat? detail.creances_sur_etat: detail.creances_sur_etat == 0 ? 0 :""}</h1>


              </div>
            </td>
          </tr>
          <tr className="h-31.2 border">
            <td rowSpan="2" className="h-31.2 border-b-0.5 border">
              dont
            </td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid">
             <label htmlFor="" className="italic"> Primes impayées</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.prime_impayee? detail.prime_impayee: detail.prime_impayee == 0 ? 0 :""}</h1>


              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid">
             <label htmlFor="" className="italic">Emprunts publics échus</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.emprunts_public_echus? detail.emprunts_public_echus: detail.emprunts_public_echus == 0 ? 0 :""}</h1>


              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor=""> Frais du personnel</label>
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.frais_du_personnel? detail.frais_du_personnel: frais_du_personnel == 0 ? 0 :""}</h1>


              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid ">
             <label htmlFor="">Effectif du personnel</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.effectif_du_personnel? detail.effectif_du_personnel: detail.effectif_du_personnel == 0 ? 0 :""}</h1>


              </div>
            </td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="2" className="border-b-0.5 h-171.6 border ">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Hommes</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_hommes? detail.nombre_hommes: detail.nombre_hommes == 0 ? 0: ""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Femmes</label></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_femmes? detail.nombre_femmes: detail.nombre_femmes == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor="">Autres charges</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_charges? detail.autres_charges: detail.autres_charges == 0 ? 0 :""}</h1>


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