"use client"

import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import FormError from "../../../../components/ui/FormError"
import getDetail from "../../../../../lib/api/NC/getDetail"
import postValider from "../../../../../lib/api/NC/postValider"
import postRefuser from "../../../../../lib/api/NC/postRefuser"
import Image from "next/image"


export default function DetailsNCVieTemp(){
  const searchParams = useSearchParams()
  const [detail, setDetail] = useState(null);
  const [isDetail,setIsDetail] =  useState(false);
  const [contenuMessage, setCommentaire] = useState('');
  const [showCommentaireForm, setShowCommentaireForm] = useState(false);
  //valeur qui désactive le bouton d'envoie
  const [submit,setSubmit] = useState(false)

  //Réponse après la soumission du formulaire
  const [resSuccess, setSuccess] = useState(false);
  const [resError, setError] = useState(false);

  // const handleSubmit = () => {
  //   setResSubmit(true);
  // };

 const validerNote = async (event) => {
  event.preventDefault();

  const email = searchParams.get('email').toString()
  const societe = searchParams.get('societe').toString()
  const date = searchParams.get('date').toString()
  console.log(email);
  console.log(societe);
  console.log(date);
  if(email && societe && date){
    const url = "http://localhost:9191/api/VIE/final/"
    const res = await  postValider(url, date, societe, email)
    
    //console.log("resSubmit :"+resSubmit)

    if(res != null){
      setSuccess(true)
    //  setShowSuccessPopup(true);
      return res 
     
    }else{
      setError(true)
      return null
    }
  }else{
    return null;
  
  }

  

  } 

  
  // const RefuserNote = async () => {
  //   const email = searchParams.get('email').toString()
  //   const societe = searchParams.get('societe').toString()
  //   const date = searchParams.get('date').toString()
  //   console.log(email);
  //   console.log(societe);
  //   console.log(date);
  //   if(email && societe && date){
  //     const url = "http://localhost:9191/api/VIE/final/"
  //     const res = await postRefuser(url, date, societe, email)
  
  //     if(res != null){
  //       return res 
  //     }else{
  //       return null
  //     }
  //   }else{
  //     return null;
  //   }
  
  //   }
  

  // async function refuserNote() {  
  //   setShowCommentaireForm(true);
  // }

  // async function soumettreCommentaire() {
  //   await postRefuser('http://localhost:9191/api/VIE/final/', date, societe, email, contenuMessage);
  //   setShowCommentaireForm(false);
  // }
  
  const email = searchParams.get('email').toString()
  const societe = searchParams.get('societe').toString()
  const date = searchParams.get('date').toString()

  const getCompVIE = async (email,societe,date) => {
        console.log(email);
        console.log(societe);
        console.log(date);
        if(email && societe && date){
          const url = "http://localhost:9191/api/RetrouverInfo/rechercheParSocieteTemporaireVIE/"
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
    const fetchCompVie = async () => {
        const compVies= await getCompVIE(email,societe,date);
        // console.log(user);
        if (compVies != null) {
          setDetail(compVies);
          setIsDetail(true);
        }else{
          setIsDetail(false);
        }
        // console.log(user.nom);
    };
  const [isMounted, setIsMounted] = useState(true);
  useEffect(()=>{
      if(isMounted) {
        fetchCompVie();
      }
      return setIsMounted(false)

  },[isMounted])
//   const handleSubmit = async (event) => {
//     setresSubmit(null)
//     event.preventDefault();
//     console.log('handleSubmit');
//     const formData = new FormData(event.target);
//     if(searchParams.get('societe')){
//       formData.append("societe",searchParams.get('societe').toString())
//     }
//     console.log('societe ' +formData.get("societe"));
//     if(formData != null ){
//         const res = await putMembre(formData);
//         setresSubmit(res)
//     }
//     console.log("resSubmit :"+resSubmit)
// };
    return (
        <>
    <h1 className="text-center font-bold text-gris m-5 text-xl">Détails note de conjoncture VIE</h1>
        <div className='w-full flex justify-center items-center px-[2%] '>
        <div className="overflow-x-auto border border-vert shadow-md">
       
        {isDetail &&  <form onSubmit={validerNote} className="p-[2%] border border-vert shadow-md">
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
            <td> Données </td>
            
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
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
            Production des autres intermédiaires
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.production_des_autres_intermediaires? detail.production_des_autres_intermediaires: detail.production_des_autres_intermediaires == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
            Commissions servies aux autres intertermédiaires
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.commissions_servies_autres_intermediaires? detail.commissions_servies_autres_intermediaires: detail.commissions_servies_autres_intermediaires == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
            Autres charges (compte 80)
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.autres_charges? detail.autres_charges: detail.autres_charges == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
              Frais du personnel
            </td>
            <td className="border-t-0">
            <div className="md:w-48 p-2" >
            <h1 className="text-base text-green-600 dark:text-green-500">{detail.dont_frais_du_personnel? detail.dont_frais_du_personnel: detail.dont_frais_du_personnel == 0 ? 0 :""}</h1>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
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
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
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
      <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
    <div className="w-[30%] bg-bleu rounded-lg ">
        <button type="submit" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md"   >Valider</button>
    </div>

    <div className="w-[30%] bg-bleu rounded-lg ">
    <Link href={"/employeDA/NC/historique/voir/refuser?email="+email.toString()+"&societe="+societe.toString()+"&date="+date.toString()} > <button type="button" className="font-medium bg-red-500 hover:bg-red-700  rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Refuser</button> </Link>    
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
                <p className="text-sm text-gray-500 px-8">La note de conjoncture a été validée avec succès</p>
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
     </form>}

      
    </div> 

    

   

  
    </div>
       
        
        </>
    )
}

{/* <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
    <div className="w-[30%] bg-bleu rounded-lg ">
                            <button type="button" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Valider</button>
                        </div>

                        <div className="w-[30%] bg-bleu rounded-lg ">
                        <Link href="/employeDA/NC/commentaires" > <button type="button" className="font-medium bg-red-500 hover:bg-red-700  rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Refuser</button> </Link>
                        </div>
    </div> */}