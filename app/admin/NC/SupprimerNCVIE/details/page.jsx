"use client"


import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import getDetail from "../../../../../lib/api/NC/getDetail"

export default function DetailsNCVie(){
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
      const url = "http://localhost:9191/api/RetrouverInfo/rechercheParSocieteReelleVIE/"
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
      console.log("details "+ details);
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
    <h1 className="text-center font-bold text-gris m-5 text-xl">Détails note de conjoncture VIE</h1>
        <div className='w-full flex justify-center items-center px-[2%]'>
          <form action="" className="p-[2%] border border-vert shadow-md"> {isDetail &&   <div className="overflow-x-auto">
      <table className="w-full whitespace-no-wrap">
        <tbody>
          <tr className="h-15.6  ">
            <td colSpan="4" className="h-15.6   px-4 py-3  font-bold"> <label htmlFor="" >* Créateur de la note de conjecture</label></td>
          
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Nom société</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nom_societe? detail.nom_societe:""}</h1>
              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Type assurance</label></td>
            <td><div className="md:w-48 p-2" >
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.type_assurance? detail.type_assurance:""}</h1>
              </div></td>
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
           <h1 className="text-base text-green-600 dark:text-green-500">{detail.prenoms_membre? detail.prenoms_membre:""}</h1>

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

          {/* Trimestre */}
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
            <td> <div class="md:w-48 p-2" >

            <h1 className="text-base text-green-600 dark:text-green-500">{detail.trimestre? detail.trimestre: detail.trimestre == 0 ? 0 :""}</h1>
              </div> </td>
          </tr>
          {/* Année */}
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-gray-800 p-1" htmlFor="nbr">Année</label></td>
            <td> <div class="md:w-48 p-2">
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.annee? detail.annee:   detail.annee == 0 ? 0 :""}</h1>
              </div> </td>
          </tr>
          {/* nombre_contrat_assurance */}
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nombre de contrats d'assurance</label></td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.nombre_contrat_assurance? detail.nombre_contrat_assurance: detail.nombre_contrat_assurance == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          {/*(Auto) Primes émises nettes d'annulations */}
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Primes émises nettes d'annulations (Chiffre d'affaires)</label></td>
              <td> <div className="md:w-48 p-2"><h1 className="text-base text-green-600 dark:text-green-500">{detail.prime_emise_nette_annulations? detail.prime_emise_nette_annulations: detail.prime_emise_nette_annulations == 0 ? 0:""}</h1></div> </td>
          </tr>
          {/*(Auto) Assurances individuelles */}
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid">(b) Assurances individuelles </td>
            <td>
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurance_individuelle_prime? detail.assurance_individuelle_prime: detail.assurance_individuelle_prime == 0 ? 0: ""}</h1>

              </div>
            </td>
            
          </tr>
          {/* Contrats en cas de vie */}
          <tr className="h-171.6 border">
            <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic"> Contrats en cas de vie</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_cas_vie_prime_emise? detail.contrats_cas_vie_prime_emise : detail.contrats_cas_vie_prime_emise == 0 ? 0 : ""}</h1>

              </div></td>
          </tr>
          {/* Contrats en cas de décès */}
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic" >Contrats en cas de décès</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_cas_deces_prime_emise? detail.contrats_cas_deces_prime_emise: detail.contrats_cas_deces_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          {/* Contrats mixtes */}
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_mixtes_prime_emise? detail.contrats_mixtes_prime_emise: detail.contrats_mixtes_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          {/* Capitalisation & épargne */}
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.capitalisation_et_epargne_prime_emise? detail.capitalisation_et_epargne_prime_emise: detail.capitalisation_et_epargne_prime_emise == 0 ? 0:""}</h1>

              </div></td>
          </tr>
          {/* Complémentaires */}
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.complementaire_prime_emise? detail.complementaire_prime_emise: detail.complementaire_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          {/* (Auto) Assurances collectives */}
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "> (c) Assurances collectives </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurance_collective_prime? detail.assurance_collective_prime: detail.assurance_collective_prime == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          
          <tr className="h-171.6 border">
            <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de vie</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_cas_vie_collective_prime_emise? detail.contrats_cas_vie_collective_prime_emise: detail.contrats_cas_vie_collective_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p>Contrats en cas de décès</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_cas_deces_collective_prime_emise? detail.contrats_cas_deces_collective_prime_emise: detail.contrats_cas_deces_collective_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_mixtes_collective_prime_emise? detail.contrats_mixtes_collective_prime_emise: detail.contrats_mixtes_collective_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.capitalisation_et_epargne_collective_prime_emise? detail.capitalisation_et_epargne_collective_prime_emise:detail.capitalisation_et_epargne_collective_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.complementaire_collective_prime_emise? detail.complementaire_collective_prime_emise: detail.complementaire_collective_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          
          
            <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(d) Microassurance vie  </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.microassurance_vie_prime_emise? detail.microassurance_vie_prime_emise: detail.microassurance_vie_prime_emise == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(e) Acceptations vie </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.acceptations_vie? detail.acceptations_vie: detail.acceptations_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">Primes cédées en réassurance</td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.primes_cedees_en_reassurance? detail.primes_cedees_en_reassurance: detail.primes_cedees_en_reassurance == 0 ? 0 :""}</h1>
              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            Provisions mathématiques*
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.provisions_mathematiques? detail.provisions_mathematiques: detail.provisions_mathematiques == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            Stock de sinistres et capitaux échus*
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.stock_de_sinistres_et_capitaux_echus? detail.stock_de_sinistres_et_capitaux_echus: detail.stock_de_sinistres_et_capitaux_echus == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            Prestations vie effectivement payées:
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.prestations_vie_effectivement_payees? detail.prestations_vie_effectivement_payees: detail.prestations_vie_effectivement_payees == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            (f) Assurances individuelles 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurances_individuelles? detail.assurances_individuelles: detail.assurances_individuelles == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de vie</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_en_cas_de_vie_individuelles_prestation_vie? detail.contrats_en_cas_de_vie_individuelles_prestation_vie: detail.contrats_en_cas_de_vie_individuelles_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de décès</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_en_cas_de_deces_individuelles_prestation_vie? detail.contrats_en_cas_de_deces_individuelles_prestation_vie: detail.contrats_en_cas_de_deces_individuelles_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_mixtes_individuelles_prestation_vie? detail.contrats_mixtes_individuelles_prestation_vie: detail.contrats_mixtes_individuelles_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.capitalisation_et_epargne_individuelles_prestation_vie? detail.capitalisation_et_epargne_individuelles_prestation_vie: detail.capitalisation_et_epargne_individuelles_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.complementaires_individuelles_prestation_vie? detail.complementaires_individuelles_prestation_vie: detail.complementaires_individuelles_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "> (g) Assurances collectives </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.assurances_collectives? detail.assurances_collectives: detail.assurances_collectives == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de vie</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_en_cas_de_vie_collectives_prestation_vie? detail.contrats_en_cas_de_vie_collectives_prestation_vie: detail.contrats_en_cas_de_vie_collectives_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de décès</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_en_cas_de_deces_collectives_prestation_vie? detail.contrats_en_cas_de_deces_collectives_prestation_vie: detail.contrats_en_cas_de_deces_collectives_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.contrats_mixtes_collectives_prestation_vie? detail.contrats_mixtes_collectives_prestation_vie:  detail.contrats_mixtes_collectives_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.capitalisation_et_epargne_collectives_prestation_vie? detail.capitalisation_et_epargne_collectives_prestation_vie:  detail.capitalisation_et_epargne_collectives_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
            <td className="border"><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.complementaires_collectives_prestation_vie? detail.complementaires_collectives_prestation_vie: detail.complementaires_collectives_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(h) Microassurance vie  </td>
            <td><div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.microassurance_vie_prestation_vie? detail.microassurance_vie_prestation_vie: detail.microassurance_vie_prestation_vie == 0 ? 0 :""}</h1>

              </div></td>
          </tr>
          
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            Production des Courtiers 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.production_des_courtiers? detail.production_des_courtiers:  detail.production_des_courtiers == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid ">
            Commissions servies aux Courtiers
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_servies_courtiers? detail.commissions_servies_courtiers: detail.commissions_servies_courtiers == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
            Production des autres intermédiaires
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.production_des_autres_intermediaires? detail.production_des_autres_intermediaires: detail.production_des_autres_intermediaires == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
            Commissions servies aux autres intertermédiaires
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_servies_autres_intermediaires? detail.commissions_servies_autres_intermediaires: detail.commissions_servies_autres_intermediaires == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
            Autres charges (compte 80)
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_charges? detail.autres_charges: detail.autres_charges == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
              Frais du personnel
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.dont_frais_du_personnel? detail.dont_frais_du_personnel: detail.dont_frais_du_personnel == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-solid">
            Effectif du personnel*
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
            Créances sur l’Etat*
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
             <p className="italic"> Primes impayées</p>
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.prime_impayee? detail.prime_impayee: detail.prime_impayee == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid">
             <p className="italic">Emprunts publics échus</p> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.emprunts_publics_echus? detail.emprunts_publics_echus: detail.emprunts_publics_echus == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> }   
</form>
       
       
    {/* <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
    <div className="w-[30%] bg-bleu rounded-lg ">
                            <button type="button" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Valider</button>
                        </div>

                        <div className="w-[30%] bg-bleu rounded-lg ">
                        <Link href="/employeDA/NC/commentaires" > <button type="button" className="font-medium bg-red-500 hover:bg-red-700  rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Refuser</button> </Link>
                        </div>
    </div> */}

   

  
    </div>
       
        
        </>
    )
}