"use client"

import { useEffect, useState } from "react"
import postNCCourtier from "../../../../lib/api/NC/COURTIER/postNCCourtier"
import FormError from "../../../components/ui/FormError"
// import Alert from "../../../components/ui/Alert"
import Image from "next/image"

export default function Form(){
  const normal = "border-gray-200 bg-gray-200"
  const success = "border-green-400 bg-green-100"
  const warning = "border-[#FF4545]"
  const [ Trimestre , setTrimestre ] = useState({style : normal , value : 0})
  const [ annee , setAnnee ] = useState({style : normal , value : 0})
  const [ NomSociete , setNomSociete ] = useState({style : normal , value : 0})
  const [ siege , setsiege ] = useState({style : normal , value : 0})
  const [ Gerant , setGerant ] = useState({style : normal , value : 0})
  const [ Contact , setContact ] = useState({style : normal , value : 0})
  const [ Adresse , setAdresse ] = useState({style : normal , value : 0})
  const [ RCCM , setRCCM ] = useState({style : normal , value : 0})
  const [ Abidjan , setAbidjan ] = useState({style : normal , value : 0})
  const [ Interieur , setInterieur ] = useState({style : normal , value : 0})
  const [ SAP , setSAP ] = useState({style : normal , value : 0})
  const [ CCVTDA , setCCVTDA ] = useState({style : normal , value : 0})
  const [ Hommes , setHommes ] = useState({style : normal , value : 0})
  const [ Femmes , setFemmes ] = useState({style : normal , value : 0})
  const [ EP , setEP ] = useState({style : normal , value : 0})
  const [ CE , setCE ] = useState({style : normal , value : 0})
  const [ TCFG , setTCFG ] = useState({style : normal , value : 0})
  const [ AC , setAC ] = useState({style : normal , value : 0})
  const [ MFG , setMFG ] = useState({style : normal , value : 0})
  const [ MH , setMH ] = useState({style : normal , value : 0})

  const [ BS , setBS ] = useState(0)
  const [ TP , setTP ] = useState(0)

  //valeur qui désactive le bouton d'envoie
  const [submit,setSubmit] = useState(false)

  //Réponse après la soumission du formulaire
  const [resSubmit, setresSubmit] = useState(null);
  useEffect(()=>{
  setBS(((isNaN(parseFloat(Abidjan.value))) ? 0 : parseFloat(Abidjan.value)) + 
    ((isNaN(parseFloat(Interieur.value))) ? 0 : parseFloat(Interieur.value)))
  setTP(((isNaN(parseFloat(Hommes.value))) ? 0 : parseFloat(Hommes.value)) + 
    ((isNaN(parseFloat(Femmes.value))) ? 0 : parseFloat(Femmes.value)))
  })
  
  const handleSubmit = async (event) => {
    setSubmit(true)
    event.preventDefault();
    const integerRegExp = /^\d*\.?\d+$/;
    let resS = true

    const verif = (value, fonctionSuccess, fonctionError) => {
      let string = value.toString();
      // Utiliser replace() correctement pour supprimer les espaces
      string = string.replace(/\s/g, ""); // Utilisation d'une expression régulière pour supprimer tous les espaces
      if (string === "") {
        fonctionError(); 
        resS = false
      }
      if (integerRegExp.test(string)) {
        fonctionSuccess();
      } else {
        resS = false
        fonctionError();
      }
    }




    // verif(event.target.elements.Trimestre.value, () => setTrimestre((prevState) => ({ ...prevState, style: success})) , () => setTrimestre((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.annee.value, () => setAnnee((prevState) => ({ ...prevState, style: success})) , () => setAnnee((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Abidjan.value, () => setAbidjan((prevState) => ({ ...prevState, style: success})) , () => setAbidjan((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Interieur.value, () => setInterieur((prevState) => ({ ...prevState, style: success})) , () => setInterieur((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.SAP.value, () => setSAP((prevState) => ({ ...prevState, style: success})) , () => setSAP((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCVTDA.value, () => setCCVTDA((prevState) => ({ ...prevState, style: success})) , () => setCCVTDA((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Hommes.value, () => setHommes((prevState) => ({ ...prevState, style: success})) , () => setHommes((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Femmes.value, () => setFemmes((prevState) => ({ ...prevState, style: success})) , () => setFemmes((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.EP.value, () => setEP((prevState) => ({ ...prevState, style: success})) , () => setEP((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CE.value, () => setCE((prevState) => ({ ...prevState, style: success})) , () => setCE((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.TCFG.value, () => setTCFG((prevState) => ({ ...prevState, style: success})) , () => setTCFG((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AC.value, () => setAC((prevState) => ({ ...prevState, style: success})) , () => setAC((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.MFG.value, () => setMFG((prevState) => ({ ...prevState, style: success})) , () => setMFG((prevState) => ({ ...prevState, style: warning})));    
    verif(event.target.elements.MH.value, () => setMH((prevState) => ({ ...prevState, style: success})) , () => setMH((prevState) => ({ ...prevState, style: warning})));    

    console.log(resS)
    console.log('handleSubmit');
    if(resS){
      console.log("yes")
      const formData = new FormData(event.target);
      const res = await postNCCourtier(formData);
      setresSubmit(res)
      console.log("resSubmit :"+resSubmit)
    }
    
    setSubmit(false)
  };

    return (
      <div className="flex justify-center items-center">
      <div>
        <h1 className="text-center font-bold text-gris m-5 text-xl">Nouvelle note de conjoncture COURTIER</h1>
        <div className='w-full flex justify-center items-center px-[2%]'>
          <form onSubmit={handleSubmit} className="p-[2%] border border-vert shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <tbody>
                  {/* Trimestre */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
                    <td> 
                      <div className="md:w-48" >
                        <select name="Trimestre" id="Trimestre" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Trimestre.style } required>
                            <option value="Trimestre 1" className="rounded-none">Trimestre 1</option>
                            <option value="Trimestre 2" className="rounded-none">Trimestre 2</option>
                            <option value="Trimestre 3" className="rounded-none">Trimestre 3</option>
                            <option value="Trimestre 4" className="rounded-none">Trimestre 4</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  {/* Année */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-gray-800 p-1" htmlFor="nbr">Année</label></td>
                    <td> 
                      <div className="md:w-48">
                        <input type="text" id="annee" name="annee" defaultValue="2000" min="1900" max="2100" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + annee.style } onChange={ (e) => {setAnnee({style: normal,value: e.target.value})}} placeholder="0" />
                      </div> 
                    </td>
                  </tr>
                  {/* I-  Identification */}
                  <tr className="h-15.6  ">
                    <td colSpan="4" className="h-15.6   px-4 py-3  font-bold"> <label htmlFor="" >I- Identification</label></td>
                  </tr>
                {/* Dénomination de la société  NomSociete */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Dénomination de la société   :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="NomSociete" name="NomSociete" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + NomSociete.style } onChange={ (e) => {setNomSociete({style: normal,value: e.target.value})}} placeholder="NSIA"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Lieu de siège  siege */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Lieu de siège     :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="siege" name="siege" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + siege.style } onChange={ (e) => {setsiege({style: normal,value: e.target.value})}} placeholder="Abidjan"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Nom du Gérant/Directeur Général Gerant */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nom du Gérant/Directeur Général   :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="Gerant" name="Gerant" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Gerant.style } onChange={ (e) => {setGerant({style: normal,value: e.target.value})}} placeholder="DAOUDA KONAN"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Contacts téléphoniques Contact */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Contacts téléphoniques  :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="Contact" name="Contact" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Contact.style } onChange={ (e) => {setContact({style: normal,value: e.target.value})}} placeholder="0767568887"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Adresse mail Adresse */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Adresse mail  :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="Adresse" name="Adresse" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Adresse.style } onChange={ (e) => {setAdresse({style: normal,value: e.target.value})}} placeholder="daouda@gmail.com"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Numéro du RCCM RCCM  */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Numéro du RCCM  :</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="RCCM" name="RCCM" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + RCCM.style } onChange={ (e) => {setRCCM({style: normal,value: e.target.value})}} placeholder="0002"/>
                      </div>
                    </td> 
                  </tr>
                  {/* II- Renseignements généraux */}
                  <tr className="h-15.6  ">
                    <td colSpan="4" className="h-15.6   px-4 py-3 font-bold"> <label htmlFor="" >II- Renseignements généraux</label></td>
                  
                  </tr>
                  <tr className="h-30.6 border">
                    <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid font-medium">  Libellés </td>
                    <td className="font-medium">Effectif </td>
                  </tr>
                  {/*(Auto) Bureaux secondaires BS */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Bureaux secondaires</label></td>
                    <td>
                      <div className="md:w-48 px-4" >
                        {BS}
                      </div>
                    </td>
                  </tr>
                  {/* Abidjan Abidjan */}
                  <tr className="h-171.6 border">
                    <td rowSpan="2" className="border-b-0.5 h-171.6 border ">dont</td>
                    <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Abidjan</label></td>
                    <td className="border">
                      <div className="md:w-48" >
                        <input type="text" id="Abidjan" name="Abidjan" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Abidjan.style } onChange={ (e) => {setAbidjan({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Intérieur Interieur */}
                  <tr className="h-15.6 border">
                    <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Intérieur</label></td>
                    <td className="border">
                      <div className="md:w-48" >
                        <input type="text" id="Interieur" name="Interieur" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Interieur.style } onChange={ (e) => {setInterieur({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Sociétés d'assurances partenaires SAP */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Sociétés d'assurances partenaires</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="SAP" name="SAP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + SAP.style } onChange={ (e) => {setSAP({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td> 
                  </tr>
                  {/* Comptes Courants validés et transmis à la DA CCVTDA */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Comptes Courants validés et transmis à la DA</label></td>
                    <td>
                      <div className="md:w-48" >
                        <input type="text" id="CCVTDA" name="CCVTDA" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCVTDA.style } onChange={ (e) => {setCCVTDA({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td> 
                  </tr>
                  {/* (Auto) Total du Personnel TP */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Total du Personnel</label></td>
                    <td>
                      <div className="md:w-48  px-4" >
                        {TP}
                      </div>
                    </td>
                  </tr>
                  {/* Hommes Hommes */}
                  <tr className="h-171.6 border">
                    <td rowSpan="2" className="border-b-0.5 h-171.6 border ">dont</td>
                    <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Hommes</label></td>
                    <td className="border">
                      <div className="md:w-48" >
                        <input type="text" id="Hommes" name="Hommes" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Hommes.style } onChange={ (e) => {setHommes({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Femmes Femmes */}
                  <tr className="h-15.6 border">
                    <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Femmes</label></td>
                    <td className="border">
                      <div className="md:w-48" >
                        <input type="text" id="Femmes" name="Femmes" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Femmes.style } onChange={ (e) => {setFemmes({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* III- Activités */}
                  <tr className="h-15.6  ">
                    <td colSpan="4" className="h-15.6   px-4 py-3 font-bold"> <label htmlFor="" >III- Activités</label></td>    
                  </tr>
                  <tr className="h-30.6 border">
                    <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid font-medium">  Libellés </td>
                    <td className="font-medium">Montant en francs CFA </td>
                  </tr>
                  {/* Emissions de primes EP*/}
                  <tr className="h-16.2 border">
                    <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Emissions de primes</label> </td>
                    <td> 
                      <div className="md:w-48" >
                        <input type="text" id="EP" name="EP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + EP.style } onChange={ (e) => {setEP({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Commissions encaissées CE*/}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"><label htmlFor=""> Commissions encaissées</label></td>
                    <td className="border-t-0">
                      <div className="md:w-48" >
                        <input type="text" id="CE" name="CE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CE.style } onChange={ (e) => {setCE({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Total des Charges ou Frais Généraux TCFG */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Total des Charges ou Frais Généraux</label> </td>
                    <td className="border-t-0">
                      <div className="md:w-48" >
                        <input type="text" id="TCFG" name="TCFG" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + TCFG.style } onChange={ (e) => {setTCFG({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Autres charges AC*/}
                  <tr className="h-16.2 border">
                    <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli"> <label htmlFor="">Autres charges</label> </td>
                    <td className="border-t-0">
                      <div className="md:w-48" >
                        <input type="text" id="AC" name="AC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC.style } onChange={ (e) => {setAC({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* * Courtiers gestionnaire de fonds maladies: */}
                  <tr className="h-16.2 ">
                    <td colSpan="3" className="h-16.2  px-4 py-3 border-r-1 border-soli">
                    <p className="font-bold text-red-500">* Courtiers gestionnaire de fonds maladies:</p>
                    </td>
                  </tr>
                  {/* Montant des fonds gérés MFG */}
                  <tr className="h-16.2 border">
                    <td colSpan="4" className="h-16.2 border px-4 py-2 "> <label htmlFor="">Montant des fonds gérés</label> </td>
                    <td className="border-t-0">
                      <div className="md:w-48" >
                        <input type="text" id="MFG" name="MFG" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + MFG.style } onChange={ (e) => {setMFG({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                  {/* Montant des honoraires MH */}
                  <tr className="h-16.2 border">
                    <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli"><label htmlFor="">Montant des honoraires</label> </td>
                    <td className="border-t-0">
                      <div className="md:w-48" >
                        <input type="text" id="MH" name="MH" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + MH.style } onChange={ (e) => {setMH({style: normal,value: e.target.value})}} placeholder="0"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {resSubmit == false && <div className="w-full h-fit  flex justify-center">
              <div className='w-full'>
                <FormError message="Impossible d'enregistrer la note de conjoncture"></FormError>
              </div>
            </div>}
            <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
              <div className="w-[45%] bg-bleu rounded-lg ">
                <button type="submit" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" disabled={submit}>Envoyer le formulaire</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Popup de suppression d'une societe  */}
      {resSubmit == true && <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              {/* <!--content--> */}
              <div className="">
                  {/* <!--body--> */}
                  <div className="text-center p-5 flex flex-col items-center justify-between">
                      <Image src='/check-mark.png' width={70} height={70} alt="check-mark"/>
                      <p className="text-sm text-gray-500 px-8">La note de conjoncture a été enregistré avec succès</p>    
                  </div>
                  {/* <!--footer--> */}
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                      <button onClick={()=>{setresSubmit(null)}}  className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-blue-600">
                        OK
                      </button>
                  </div>
              </div>
          </div>
      </div>}

      </div>
  )
}