"use client"

import { useEffect, useState } from "react"
import FormError from "../../../components/ui/FormError"
import Alert from "../../../components/ui/Alert"
import postNCVIE from "../../../../lib/api/NC/VIE/postNCVIE"
import Image from "next/image"

export default function FormVie(){
  // Style des champs
  const normal = "border-gray-200 bg-gray-200 "
  const success = "border-green-400 bg-green-100"
  const warning = "border-[#FF4545]"
  const [ trimestre , setTrimestre ] = useState({style : normal , value : 0})
  const [ annee , setAnnee ] = useState({style : normal , value : 0})
  const [ NCA , setNCA ] = useState({style : normal , value : 0})
  const [ CCV1 , setCCV1 ] = useState({style : normal , value : 0})
  const [ CCD1 , setCCD1 ] = useState({style : normal , value : 0})
  const [ CM1 , setCM1 ] = useState({style : normal , value : 0})
  const [ CE1 , setCE1 ] = useState({style : normal , value : 0})
  const [ C1 , setC1 ] = useState({style : normal , value : 0})
  const [ CCV2 , setCCV2 ] = useState({style : normal , value : 0})
  const [ CCD2 , setCCD2 ] = useState({style : normal , value : 0})
  const [ CM2 , setCM2 ] = useState({style : normal , value : 0})
  const [ CE2 , setCE2 ] = useState({style : normal , value : 0})
  const [ C2 , setC2 ] = useState({style : normal , value : 0})
  const [ MV1 , setMV1 ] = useState({style : normal , value : 0})
  const [ AC1 , setAC1 ] = useState({style : normal , value : 0})
  const [ PCR , setPCR ] = useState({style : normal , value : 0})
  const [ PM , setPM ] = useState({style : normal , value : 0})
  const [ SSCE , setSSCE ] = useState({style : normal , value : 0})
  const [ CCV3 , setCCV3 ] = useState({style : normal , value : 0})
  const [ CCD3 , setCCD3 ] = useState({style : normal , value : 0})
  const [ CM3 , setCM3 ] = useState({style : normal , value : 0})
  const [ CE3 , setCE3 ] = useState({style : normal , value : 0})
  const [ C3 , setC3 ] = useState({style : normal , value : 0})
  const [ CCV4 , setCCV4 ] = useState({style : normal , value : 0})
  const [ CCD4 , setCCD4 ] = useState({style : normal , value : 0})
  const [ CM4 , setCM4 ] = useState({style : normal , value : 0})
  const [ CE4 , setCE4 ] = useState({style : normal , value : 0})
  const [ C4 , setC4 ] = useState({style : normal , value : 0})
  const [ MV4 , setMV4 ] = useState({style : normal , value : 0})
  const [ PC , setPC ] = useState({style : normal , value : 0})
  const [ CSC , setCSC ] = useState({style : normal , value : 0})
  const [ PAI , setPAI ] = useState({style : normal , value : 0})
  const [ CSAI , setCSAI ] = useState({style : normal , value : 0})
  const [ AC , setAC ] = useState({style : normal , value : 0})
  const [ FP , setFP ] = useState({style : normal , value : 0})
  //const [ EP , setEP ] = useState({style : normal , value : 0})
  const [ Hommes , setHommes ] = useState({style : normal , value : 0})
  const [ Femmes , setFemmes ] = useState({style : normal , value : 0})

  const [ PI , setPI ] = useState({style : normal , value : 0})
  const [ EPE , setEPE ] = useState({style : normal , value : 0})

  // Calculs
  const [ PENA , setPENA ] = useState(0)
  const [ NAI , setNAI ] = useState(0)
  const [ NAC , setNAC ] = useState(0)
  const [ PVEP , setPVEP ] = useState(0)
  const [ VAI , setVAI ] = useState(0)
  const [ VAC , setVAC ] = useState(0)
  const [ CSE , setCSE ] = useState(0)
  const [ TP , setTP ] = useState(0)

  //valeur qui désactive le bouton d'envoie
  const [submit,setSubmit] = useState(false)

  //Réponse après la soumission du formulaire
  const [resSubmit, setresSubmit] = useState(null);


  useEffect(()=>{
    setPENA(NAI + NAC + ((isNaN(parseFloat(MV1.value))) ? 0 : parseFloat(MV1.value)) + ((isNaN(parseFloat(AC1.value))) ? 0 : parseFloat(AC1.value)))
    setNAI(((isNaN(parseFloat(CCV1.value))) ? 0 : parseFloat(CCV1.value)) + ((isNaN(parseFloat(CCD1.value))) ? 0 : parseFloat(CCD1.value)) + ((isNaN(parseFloat(CM1.value))) ? 0 : parseFloat(CM1.value)) + ((isNaN(parseFloat(CE1.value))) ? 0 : parseFloat(CE1.value)) + ((isNaN(parseFloat(C1.value))) ? 0 : parseFloat(C1.value)))
    setNAC( ((isNaN(parseFloat(CCV2.value))) ? 0 : parseFloat(CCV2.value))+ ((isNaN(parseFloat(CCD2.value))) ? 0 : parseFloat(CCD2.value)) + ((isNaN(parseFloat(CM2.value))) ? 0 : parseFloat(CM2.value)) + ((isNaN(parseFloat(CE2.value))) ? 0 : parseFloat(CE2.value)) + ((isNaN(parseFloat(C2.value))) ? 0 : parseFloat(C2.value)))
    setPVEP (VAI + VAC + ((isNaN(parseFloat(MV4.value)) )? 0 : parseFloat(MV4.value)))
    setVAI( ((isNaN(parseFloat(CCV3.value))) ? 0 : parseFloat(CCV3.value))+ ((isNaN(parseFloat(CCD3.value))) ? 0 : parseFloat(CCD3.value))+ ((isNaN(parseFloat(CM3.value))) ? 0 : parseFloat(CM3.value))+ ((isNaN(parseFloat(CE3.value))) ? 0 : parseFloat(CE3.value)) + ((isNaN(parseFloat(C3.value))) ? 0 : parseFloat(C3.value)))
    setVAC(((isNaN(parseFloat(CCV4.value))) ? 0 : parseFloat(CCV4.value))+ ((isNaN(parseFloat(CCD4.value))) ? 0 : parseFloat(CCD4.value))+ ((isNaN(parseFloat(CM4.value))) ? 0 : parseFloat(CM4.value))+ ((isNaN(parseFloat(CE4.value))) ? 0 : parseFloat(CE4.value))+ ((isNaN(parseFloat(C4.value))) ? 0 : parseFloat(C4.value)))
    setCSE( ((isNaN(parseFloat(PI.value))) ? 0 : parseFloat(PI.value)) + ((isNaN(parseFloat(EPE.value))) ? 0 : parseFloat(EPE.value)))
    setTP(((isNaN(parseFloat(Hommes.value))) ? 0 : parseFloat(Hommes.value)) + 
    ((isNaN(parseFloat(Femmes.value))) ? 0 : parseFloat(Femmes.value)))
    // console.log("yes");
    // console.log("PI :" + (isNaN(parseFloat(EPE.value)) ? "yes " + EPE.value + " is NaN" : parseFloat(EPE.value)));

    
    // console.log(isNaN(parseFloat(PI.value)) ? 0 : parseFloat(PI.value) + " + " + isNaN(parseFloat(EPE.value)) ? 0 : parseFloat(EPE.value) + " = " + CSE);
    // setTimeout(() => {
    //   setAnnee("border-red-400 bg-red-100")
    // }, 5000);
    // console.log("Annee : "+annee.value);
  })

  //Evénement de soumission
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
    //Vérifier les différentes entrées
    verif(event.target.elements.NCA.value, () => setNCA((prevState) => ({ ...prevState, style: success})) , () => setNCA((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCV1.value, () => setCCV1((prevState) => ({ ...prevState, style: success})) , () => setCCV1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCD1.value, () => setCCD1((prevState) => ({ ...prevState, style: success})) , () => setCCD1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CM1.value, () => setCM1((prevState) => ({ ...prevState, style: success})) , () => setCM1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CE1.value, () => setCE1((prevState) => ({ ...prevState, style: success})) , () => setCE1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.C1.value, () => setC1((prevState) => ({ ...prevState, style: success})) , () => setC1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCV2.value, () => setCCV2((prevState) => ({ ...prevState, style: success})) , () => setCCV2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCD2.value, () => setCCD2((prevState) => ({ ...prevState, style: success})) , () => setCCD2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CM2.value, () => setCM2((prevState) => ({ ...prevState, style: success})) , () => setCM2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CE2.value, () => setCE2((prevState) => ({ ...prevState, style: success})) , () => setCE2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.C2.value, () => setC2((prevState) => ({ ...prevState, style: success})) , () => setC2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.MV1.value, () => setMV1((prevState) => ({ ...prevState, style: success})) , () => setMV1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AC1.value, () => setAC1((prevState) => ({ ...prevState, style: success})) , () => setAC1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PCR.value, () => setPCR((prevState) => ({ ...prevState, style: success})) , () => setPCR((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PM.value, () => setPM((prevState) => ({ ...prevState, style: success})) , () => setPM((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.SSCE.value, () => setSSCE((prevState) => ({ ...prevState, style: success})) , () => setSSCE((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCV3.value, () => setCCV3((prevState) => ({ ...prevState, style: success})) , () => setCCV3((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCD3.value, () => setCCD3((prevState) => ({ ...prevState, style: success})) , () => setCCD3((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CM3.value, () => setCM3((prevState) => ({ ...prevState, style: success})) , () => setCM3((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CE3.value, () => setCE3((prevState) => ({ ...prevState, style: success})) , () => setCE3((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.C3.value, () => setC3((prevState) => ({ ...prevState, style: success})) , () => setC3((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCV4.value, () => setCCV4((prevState) => ({ ...prevState, style: success})) , () => setCCV4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CCD4.value, () => setCCD4((prevState) => ({ ...prevState, style: success})) , () => setCCD4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CM4.value, () => setCM4((prevState) => ({ ...prevState, style: success})) , () => setCM4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CE4.value, () => setCE4((prevState) => ({ ...prevState, style: success})) , () => setCE4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.C4.value, () => setC4((prevState) => ({ ...prevState, style: success})) , () => setC4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.MV4.value, () => setMV4((prevState) => ({ ...prevState, style: success})) , () => setMV4((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PC.value, () => setPC((prevState) => ({ ...prevState, style: success})) , () => setPC((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CSC.value, () => setCSC((prevState) => ({ ...prevState, style: success})) , () => setCSC((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PAI.value, () => setPAI((prevState) => ({ ...prevState, style: success})) , () => setPAI((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.CSAI.value, () => setCSAI((prevState) => ({ ...prevState, style: success})) , () => setCSAI((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AC.value, () => setAC((prevState) => ({ ...prevState, style: success})) , () => setAC((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.FP.value, () => setFP((prevState) => ({ ...prevState, style: success})) , () => setFP((prevState) => ({ ...prevState, style: warning})));
    //verif(event.target.elements.EP.value, () => setEP((prevState) => ({ ...prevState, style: success})) , () => setEP((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Hommes.value, () => setHommes((prevState) => ({ ...prevState, style: success})) , () => setHommes((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Femmes.value, () => setFemmes((prevState) => ({ ...prevState, style: success})) , () => setFemmes((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PI.value, () => setPI((prevState) => ({ ...prevState, style: success})) , () => setPI((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.EPE.value, () => setEPE((prevState) => ({ ...prevState, style: success})) , () => setEPE((prevState) => ({ ...prevState, style: warning})));
    console.log(resS)
    console.log('handleSubmit');
    if(resS){
      console.log("yes")
      const formData = new FormData(event.target);
      const res = await postNCVIE(formData);
      setresSubmit(res)
      console.log("resSubmit :"+resSubmit)
    }
    
    setSubmit(false)
  };

    return (
        <div className="flex w-full  justify-center items-center">
        <div className="w-full ">
          <h1 className="text-center font-bold text-gris m-5 text-xl">Nouvelle note de conjoncture VIE</h1>
          <div className='w-full flex justify-center items-center px-[2%] '>
            <form onSubmit={handleSubmit} className="p-[2%] border border-vert shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <tbody>
                    <tr className="h-30.6 border">
                      <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid">  Libellés </td>
                      <td> Données </td>
                    </tr>
                    {/* Trimestre */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
                      <td> 
                        <div className="md:w-48" >
                          <select name="trimestre" id="trimestre" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + trimestre.style } required>
                              <option defaultValue="Trimestre 1" className="rounded-none">Trimestre 1</option>
                              <option defaultValue="Trimestre 2" className="rounded-none">Trimestre 2</option>
                              <option defaultValue="Trimestre 3" className="rounded-none">Trimestre 3</option>
                              <option defaultValue="Trimestre 4" className="rounded-none">Trimestre 4</option>
                          </select>
                        </div> </td>
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
                    {/* nombre_contrat_assurance NCA */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nombre de contrats d'assurance</label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="NCA" name="NCA" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + NCA.style } onChange={ (e) => {setNCA({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/*(Auto) Primes émises nettes d'annulations PENA*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Primes émises nettes d'annulations (b+c+d+e) : </label></td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {PENA}
                        </div>
                      </td>
                    </tr>
                    {/*(Auto) Assurances individuelles NAI*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid">(b) Assurances individuelles </td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {NAI}
                        </div>
                      </td>
                      
                    </tr>
                    {/* Contrats en cas de vie :CCV1*/}
                    <tr className="h-171.6 border">
                      <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic"> Contrats en cas de vie</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCV1" name="CCV1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCV1.style } onChange={ (e) => {setCCV1({style: normal,value: e.target.value.replace(/\s/g, "")})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de décès CCD1*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic" >Contrats en cas de décès</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCD1" name="CCD1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCD1.style }  onChange={ (e) => {setCCD1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats mixtes CM1*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CM1" name="CM1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CM1.style } onChange={ (e) => {setCM1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Capitalisation & épargne CE1*/}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CE1" name="CE1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CE1.style } onChange={ (e) => {setCE1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Complémentaires C1*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="C1" name="C1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + C1.style } onChange={ (e) => {setC1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (Auto) Assurances collectives NAC*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "> (c) Assurances collectives </td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {NAC}
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de vie CCV2*/}
                    <tr className="h-171.6 border">
                      <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de vie</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCV2" name="CCV2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCV2.style } onChange={ (e) => {setCCV2({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de décès CCD2*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p>Contrats en cas de décès</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCD2" name="CCD2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCD2.style } onChange={ (e) => {setCCD2({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats mixtes CM2*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CM2" name="CM2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CM2.style } onChange={ (e) => {setCM2({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Capitalisation & épargne CE2*/}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CE2" name="CE2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CE2.style } onChange={ (e) => {setCE2({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Complémentaires C2*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="C2" name="C2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + C2.style } onChange={ (e) => {setC2({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (d) Microassurance vie MV1*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(d) Microassurance vie  </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="MV1" name="MV1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + MV1.style } onChange={ (e) => {setMV1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (e) Acceptations vie AC1*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(e) Acceptations vie </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="AC1" name="AC1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC1.style } onChange={ (e) => {setAC1({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Primes cédées en réassurance PCR*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">Primes cédées en réassurance</td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="PCR" name="PCR" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PCR.style } onChange={ (e) => {setPCR({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Provisions mathématiques* PM*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">Provisions mathématiques*</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="PM" name="PM" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PM.style } onChange={ (e) => {setPM({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Stock de sinistres et capitaux échus* SSCE*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> Stock de sinistres et capitaux échus* </td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="SSCE" name="SSCE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + SSCE.style } onChange={ (e) => {setSSCE({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (Auto) Prestations vie effectivement payées: PVEP*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">Prestations vie effectivement payées (f+g+h) :</td>
                      <td className="border-t-0">
                        <div className="md:w-48 px-4" >
                          {PVEP}
                        </div>
                      </td>
                    </tr>
                    {/* / */}
                    {/*(Auto) Assurances individuelles VAI*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid">(f) Assurances individuelles </td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {VAI}
                        </div>
                      </td>
                      
                    </tr>
                    {/* Contrats en cas de vie CCV3*/}
                    <tr className="h-171.6 border">
                      <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic"> Contrats en cas de vie</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCV3" name="CCV3" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCV3.style } onChange={ (e) => {setCCV3({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de décès CCD3*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic" >Contrats en cas de décès</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCD3" name="CCD3" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCD3.style } onChange={ (e) => {setCCD3({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats mixtes CM3*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CM3" name="CM3" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CM3.style } onChange={ (e) => {setCM3({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Capitalisation & épargne CE3*/}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CE3" name="CE3" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CE3.style } onChange={ (e) => {setCE3({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Complémentaires C3*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="C3" name="C3" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + C3.style } onChange={ (e) => {setC3({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (Auto) Assurances collectives VAC*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "> (g) Assurances collectives </td>
                      <td>
                        <div className="md:w-48 px-4" >
                           {VAC}
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de vie CCV4*/}
                    <tr className="h-171.6 border">
                      <td rowSpan="5" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats en cas de vie</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCV4" name="CCV4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCV4.style } onChange={ (e) => {setCCV4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats en cas de décès CCD4*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p>Contrats en cas de décès</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CCD4" name="CCD4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CCD4.style } onChange={ (e) => {setCCD4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Contrats mixtes CM4*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Contrats mixtes</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CM4" name="CM4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CM4.style } onChange={ (e) => {setCM4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Capitalisation & épargne CE4*/}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Capitalisation & épargne</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="CE4" name="CE4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CE4.style } onChange={ (e) => {setCE4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Complémentaires C4*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <p className="italic">Complémentaires</p></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="C4" name="C4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + C4.style } onChange={ (e) => {setC4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* (h) Microassurance vie MV4*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">(h) Microassurance vie  </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="MV4" name="MV4" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + MV4.style } onChange={ (e) => {setMV4({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Production des Courtiers PC*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> Production des Courtiers </td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="PC" name="PC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PC.style } onChange={ (e) => {setPC({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Commissions servies aux Courtiers CSC*/}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid ">Commissions servies aux Courtiers</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="CSC" name="CSC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CSC.style } onChange={ (e) => {setCSC({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Production des autres intermédiaires PAI*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Production des autres intermédiaires</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="PAI" name="PAI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PAI.style } onChange={ (e) => {setPAI({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Commissions servies aux autres intertermédiaires CSAI*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Commissions servies aux autres intertermédiaires</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="CSAI" name="CSAI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CSAI.style } onChange={ (e) => {setCSAI({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Autres charges (compte 80) AC*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Autres charges (compte 80)</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="AC" name="AC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC.style } onChange={ (e) => {setAC({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Frais du personnel FP*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Frais du personnel</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="FP" name="FP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + FP.style } onChange={ (e) => {setFP({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Effectif du personnel* EP*/}
                    {/* <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Effectif du personnel*</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="EP" name="EP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + EP.style } onChange={ (e) => {setEP({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr> */}
                       {/* (Auto) Total du Personnel TP */}
                  <tr className="h-15.6 border">
                    <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Effectif du personnel</label></td>
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
                    {/*(Auto) Créances sur l’Etat* CSE*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Créances sur l’Etat*</td>
                      <td className="border-t-0">
                        <div className="md:w-48 px-4" >
                          {CSE}
                        </div>
                      </td>
                    </tr>
                    {/* Primes impayées PI*/}
                    <tr className="h-31.2 border">
                      <td rowSpan="2" className="h-31.2 border-b-0.5 border"> dont </td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid"><p className="italic"> Primes impayées</p></td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="PI" name="PI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PI.style } onChange={ (e) => {setPI({style: normal,value: e.target.value})}} placeholder="0" />
                        </div>
                      </td>
                    </tr>
                    {/* Emprunts publics échus EPE*/}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid"><p className="italic">Emprunts publics échus</p> </td>
                      <td className="border-t-0">
                      <div className="md:w-48" >
                      <input type="text" id="EPE" name="EPE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + EPE.style } onChange={ (e) => {setEPE({style: normal,value: e.target.value})}} placeholder="0" />

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
        {/* Popup de succès  */}
        {resSubmit == true && <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    {/* <!--content--> */}
                    <div className="">
                        {/* <!--body--> */}
                        <div className="text-center p-5 flex flex-col items-center justify-between">
                            <Image src='/check-mark.png' width={70} height={70} alt="check-mark"/>
                            <p className="text-sm text-gray-500 px-8">La note de conjoncture a été enregistrée avec succès</p>    
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