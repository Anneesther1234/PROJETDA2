"use client"
import { useEffect, useState } from "react"
import postNCIADR from "../../../../lib/api/NC/IARD/postNCIADR"
import FormError from "../../../components/ui/FormError"
// import Alert from "../../../components/ui/Alert"
import Image from "next/image"


export default function FormNonVie(){
  // Style des champs
  const normal = "border-gray-200 bg-gray-200"
  const success = "border-green-400 bg-green-100"
  const warning = "border-[#FF4545]"
  const [ trimestre , setTrimestre ] = useState({style : normal , value : 0})
  const [ annee , setAnnee ] = useState({style : normal , value : 0})
  const [ NCA , setNCA ] = useState({style : normal , value : 0})
  const [ Maladie1 , setMaladie1 ] = useState({style : normal , value : 0})
  const [ AC1 , setAC1 ] = useState({style : normal , value : 0})
  const [ RCA1 , setRCA1 ] = useState({style : normal , value : 0})
  const [ ARA1 , setARA1 ] = useState({style : normal , value : 0})
  const [ IADB1 , setIADB1 ] = useState({style : normal , value : 0})
  const [ Credit1 , setCredit1 ] = useState({style : normal , value : 0})
  const [ Caution1 , setCaution1 ] = useState({style : normal , value : 0})
  const [ AIM1 , setAIM1 ] = useState({style : normal , value : 0})
  const [ M1 , setM1 ] = useState({style : normal , value : 0})
  const [ AI1 , setAI1 ] = useState({style : normal , value : 0})
  const [ ARDD1 , setARDD1 ] = useState({style : normal , value : 0})
  const [ AD , setAD ] = useState({style : normal , value : 0})
  const [ PR , setPR ] = useState({style : normal , value : 0})
  const [ SAP , setSAP ] = useState({style : normal , value : 0})
  const [ Maladie2 , setMaladie2 ] = useState({style : normal , value : 0})
  const [ AC2 , setAC2 ] = useState({style : normal , value : 0})
  const [ RCA2 , setRCA2 ] = useState({style : normal , value : 0})
  const [ ARA2 , setARA2 ] = useState({style : normal , value : 0})
  const [ IADB2 , setIADB2 ] = useState({style : normal , value : 0})
  const [ Credit2 , setCredit2 ] = useState({style : normal , value : 0})
  const [ Caution2 , setCaution2 ] = useState({style : normal , value : 0})
  const [ AIM2 , setAIM2 ] = useState({style : normal , value : 0})
  const [ M2 , setM2 ] = useState({style : normal , value : 0})
  const [ AI2 , setAI2 ] = useState({style : normal , value : 0})
  const [ ARDD2 , setARDD2 ] = useState({style : normal , value : 0})
  const [ SP , setSP ] = useState({style : normal , value : 0})
  const [ RE , setRE ] = useState({style : normal , value : 0})
  const [ REE , setREE ] = useState({style : normal , value : 0})
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
  const [ SCBP , setSCBP ] = useState(0)
  const [ CSE , setCSE ] = useState(0)
  const [ TP , setTP ] = useState(0)
  
  //valeur qui désactive le bouton d'envoie
  const [submit,setSubmit] = useState(false)

  //Réponse après la soumission du formulaire
  const [resSubmit, setresSubmit] = useState(null);


  useEffect(()=>{
    setPENA(((isNaN(parseFloat(Maladie1.value))) ? 0 : parseFloat(Maladie1.value)) + 
      ((isNaN(parseFloat(AC1.value))) ? 0 : parseFloat(AC1.value)) + 
      ((isNaN(parseFloat(RCA1.value))) ? 0 : parseFloat(RCA1.value)) + 
      ((isNaN(parseFloat(ARA1.value))) ? 0 : parseFloat(ARA1.value)) + 
      ((isNaN(parseFloat(IADB1.value))) ? 0 : parseFloat(IADB1.value)) + 
      ((isNaN(parseFloat(Credit1.value))) ? 0 : parseFloat(Credit1.value)) + 
      ((isNaN(parseFloat(Caution1.value))) ? 0 : parseFloat(Caution1.value)) + 
      ((isNaN(parseFloat(AIM1.value))) ? 0 : parseFloat(AIM1.value)) +
      ((isNaN(parseFloat(M1.value))) ? 0 : parseFloat(M1.value)) +
      ((isNaN(parseFloat(AI1.value))) ? 0 : parseFloat(AI1.value)) +
      ((isNaN(parseFloat(ARDD1.value))) ? 0 : parseFloat(ARDD1.value)))
    setSCBP(((isNaN(parseFloat(Maladie2.value))) ? 0 : parseFloat(Maladie2.value)) + 
      ((isNaN(parseFloat(AC2.value))) ? 0 : parseFloat(AC2.value)) + 
      ((isNaN(parseFloat(RCA2.value))) ? 0 : parseFloat(RCA2.value)) + 
      ((isNaN(parseFloat(ARA2.value))) ? 0 : parseFloat(ARA2.value)) + 
      ((isNaN(parseFloat(IADB2.value))) ? 0 : parseFloat(IADB2.value)) + 
      ((isNaN(parseFloat(Credit2.value))) ? 0 : parseFloat(Credit2.value)) + 
      ((isNaN(parseFloat(Caution2.value))) ? 0 : parseFloat(Caution2.value)) + 
      ((isNaN(parseFloat(AIM2.value))) ? 0 : parseFloat(AIM2.value)) +
      ((isNaN(parseFloat(M2.value))) ? 0 : parseFloat(M2.value)) +
      ((isNaN(parseFloat(AI2.value))) ? 0 : parseFloat(AI2.value)) +
      ((isNaN(parseFloat(ARDD2.value))) ? 0 : parseFloat(ARDD2.value)))
    setCSE( ((isNaN(parseFloat(PI.value))) ? 0 : parseFloat(PI.value)) + ((isNaN(parseFloat(EPE.value))) ? 0 : parseFloat(EPE.value)))
    setTP(((isNaN(parseFloat(Hommes.value))) ? 0 : parseFloat(Hommes.value)) + 
    ((isNaN(parseFloat(Femmes.value))) ? 0 : parseFloat(Femmes.value)))

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

    //verif(event.target.elements.trimestre.value, () => setTrimestre((prevState) => ({ ...prevState, style: success})) , () => setTrimestre((prevState) => ({ ...prevState, style: warning})));(event.target.elements.trimestre.value, () => setTrimestre((prevState) => ({ ...prevState, style: success})) , () => setTrimestre((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.annee.value, () => setAnnee((prevState) => ({ ...prevState, style: success})) , () => setAnnee((prevState) => ({ ...prevState, style: warning})));(event.target.elements.annee.value, () => setAnnee((prevState) => ({ ...prevState, style: success})) , () => setNCA((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.NCA.value, () => setNCA((prevState) => ({ ...prevState, style: success})) , () => setNCA((prevState) => ({ ...prevState, style: warning})));(event.target.elements.NCA.value, () => setNCA((prevState) => ({ ...prevState, style: success})) , () => setNCA((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Maladie1.value, () => setMaladie1((prevState) => ({ ...prevState, style: success})) , () => setMaladie1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AC1.value, () => setAC1((prevState) => ({ ...prevState, style: success})) , () => setAC1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.RCA1.value, () => setRCA1((prevState) => ({ ...prevState, style: success})) , () => setRCA1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.ARA1.value, () => setARA1((prevState) => ({ ...prevState, style: success})) , () => setARA1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.IADB1.value, () => setIADB1((prevState) => ({ ...prevState, style: success})) , () => setIADB1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Credit1.value, () => setCredit1((prevState) => ({ ...prevState, style: success})) , () => setCredit1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Caution1.value, () => setCaution1((prevState) => ({ ...prevState, style: success})) , () => setCaution1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AIM1.value, () => setAIM1((prevState) => ({ ...prevState, style: success})) , () => setAIM1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.M1.value, () => setM1((prevState) => ({ ...prevState, style: success})) , () => setM1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AI1.value, () => setAI1((prevState) => ({ ...prevState, style: success})) , () => setAI1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.ARDD1.value, () => setARDD1((prevState) => ({ ...prevState, style: success})) , () => setARDD1((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AD.value, () => setAD((prevState) => ({ ...prevState, style: success})) , () => setAD((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.PR.value, () => setPR((prevState) => ({ ...prevState, style: success})) , () => setPR((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.SAP.value, () => setSAP((prevState) => ({ ...prevState, style: success})) , () => setSAP((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Maladie2.value, () => setMaladie2((prevState) => ({ ...prevState, style: success})) , () => setMaladie2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AC2.value, () => setAC2((prevState) => ({ ...prevState, style: success})) , () => setAC2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.RCA2.value, () => setRCA2((prevState) => ({ ...prevState, style: success})) , () => setRCA2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.ARA2.value, () => setARA2((prevState) => ({ ...prevState, style: success})) , () => setARA2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.IADB2.value, () => setIADB2((prevState) => ({ ...prevState, style: success})) , () => setIADB2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Credit2.value, () => setCredit2((prevState) => ({ ...prevState, style: success})) , () => setCredit2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.Caution2.value, () => setCaution2((prevState) => ({ ...prevState, style: success})) , () => setCaution2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AIM2.value, () => setAIM2((prevState) => ({ ...prevState, style: success})) , () => setAIM2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.M2.value, () => setM2((prevState) => ({ ...prevState, style: success})) , () => setM2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.AI2.value, () => setAI2((prevState) => ({ ...prevState, style: success})) , () => setAI2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.ARDD2.value, () => setARDD2((prevState) => ({ ...prevState, style: success})) , () => setARDD2((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.SP.value, () => setSP((prevState) => ({ ...prevState, style: success})) , () => setSP((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.RE.value, () => setRE((prevState) => ({ ...prevState, style: success})) , () => setRE((prevState) => ({ ...prevState, style: warning})));
    verif(event.target.elements.REE.value, () => setREE((prevState) => ({ ...prevState, style: success})) , () => setREE((prevState) => ({ ...prevState, style: warning})));
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
      const res = await postNCIADR(formData);
      setresSubmit(res)
      console.log("resSubmit :"+resSubmit)
    }
    
    setSubmit(false)
  };


    return (
      <div className="  flex w-full justify-center items-center">
        <div className="w-full ">
          <h1 className="text-center font-bold text-gris m-5 text-xl">Nouvelle note de conjoncture IARD</h1>
          <div className='w-full flex justify-center items-center px-[2%]'>
            <form onSubmit={handleSubmit} className="p-[2%] border border-vert shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <tbody>
                    <tr className="h-30.6 border">
                      <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid">  Libellés </td>
                      <td className="p-2"> Données </td>
                      
                    </tr>
                    {/* Trimestre */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
                      <td> 
                        <div class="md:w-48 " >
                          <select name="trimestre" id="trimestre" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + trimestre.style } onChange={ (e) => {setTrimestre({style: normal,value: e.target.value})}}>
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
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Primes émises nettes d'annulations : </label></td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {PENA}
                        </div>
                      </td>
                    </tr>
                    {/* Maladie Maladie1 */}
                    <tr className="h-171.6 border">
                      <td rowSpan="11" className="border-b-0.5 h-171.6 border ">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Maladie</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Maladie1" name="Maladie1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Maladie1.style }  onChange={ (e) => {setMaladie1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Accidents corporels AC1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Accidents corporels</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                        <input type="text" id="AC1" name="AC1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC1.style }  onChange={ (e) => {setAC1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* RC Automobile RCA1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">RC Automobile</label> </td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="RCA1" name="RCA1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + RCA1.style }  onChange={ (e) => {setRCA1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Autres risques automobile ARA1 */}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="ARA1" name="ARA1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + ARA1.style }  onChange={ (e) => {setARA1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Incendie et autres dommages aux bien IADB1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Incendie et autres dommages aux biens</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="IADB1" name="IADB1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + IADB1.style }  onChange={ (e) => {setIADB1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Crédit Credit1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Credit1" name="Credit1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Credit1.style }  onChange={ (e) => {setCredit1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Caution Caution1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Caution1" name="Caution1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Caution1.style }  onChange={ (e) => {setCaution1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Assurance importation des marchandises AIM1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Assurance importation des marchandises</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="AIM1" name="AIM1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AIM1.style }  onChange={ (e) => {setAIM1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Microassurance M1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">Microassurance</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="M1" name="M1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + M1.style }  onChange={ (e) => {setM1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Assurances indicielles AI1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="">Assurances indicielles</label>  </td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="AI1" name="AI1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AI1.style }  onChange={ (e) => {setAI1({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Autres risques directs dommages ARDD1 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border   px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="ARDD1" name="ARDD1" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + ARDD1.style }  onChange={ (e) => {setARDD1({style: normal,value: e.target.value})}}placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Acceptations dommages AD */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Acceptations dommages</label> </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="AD" name="AD" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AD.style }  onChange={ (e) => {setAD({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                      {/* Primes cédées en Réassurance PR */}
                      <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Primes cédées en Réassurance</label> </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="PR" name="PR" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PR.style }  onChange={ (e) => {setPR({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/*Sinistres à payer (SAP)** SAP */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Sinistres à payer (SAP)**</label> </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="SAP" name="SAP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + SAP.style }  onChange={ (e) => {setSAP({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* (Auto) Stock de sinistres bons à payer SCBP */}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Stock de sinistres bons à payer</label> </td>
                      <td>
                        <div className="md:w-48  px-4" >
                          {SCBP}
                        </div>
                      </td>
                    </tr>
                    {/* Maladie Maladie2 */}
                    <tr className="h-171.6 border">
                      <td rowSpan="11"  className="border-b-0.5 h-171.6 border ">dont</td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Maladie</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Maladie2" name="Maladie2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Maladie2.style }  onChange={ (e) => {setMaladie2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Accidents corporels AC2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Accidents corporels</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                        <input type="text" id="AC2" name="AC2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC2.style }  onChange={ (e) => {setAC2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* RC Automobile RCA2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">RC Automobile</label> </td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="RCA2" name="RCA2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + RCA2.style }  onChange={ (e) => {setRCA2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Autres risques automobile ARA2 */}
                    <tr className="h-15.6">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="ARA2" name="ARA2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + ARA2.style }  onChange={ (e) => {setARA2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Incendie et autres dommages aux bien IADB2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Incendie et autres dommages aux biens</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="IADB2" name="IADB2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + IADB2.style }  onChange={ (e) => {setIADB2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Crédit Credit2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Credit2" name="Credit2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Credit2.style }  onChange={ (e) => {setCredit2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Caution Caution2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="Caution2" name="Caution2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + Caution2.style }  onChange={ (e) => {setCaution2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Assurance importation des marchandises AIM2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Assurance importation des marchandises</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="AIM2" name="AIM2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AIM2.style }  onChange={ (e) => {setAIM2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Microassurance M2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">Microassurance</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="M2" name="M2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + M2.style }  onChange={ (e) => {setM2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Assurances indicielles AI2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="">Assurances indicielles</label>  </td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="AI2" name="AI2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AI2.style }  onChange={ (e) => {setAI2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Autres risques directs dommages ARDD2 */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border   px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
                      <td className="border">
                        <div className="md:w-48" >
                          <input type="text" id="ARDD2" name="ARDD2" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + ARDD2.style }  onChange={ (e) => {setARDD2({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Sinistres payés SP */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"><label htmlFor="">Sinistres payés </label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="SP" name="SP" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + SP.style }  onChange={ (e) => {setSP({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Recours à encaisser** RE */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"><label htmlFor="">Recours à encaisser** </label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="RE" name="RE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + RE.style }  onChange={ (e) => {setRE({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Recours effectivement encaissés REE */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"><label htmlFor="">Recours effectivement encaissés </label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="REE" name="REE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + REE.style }  onChange={ (e) => {setREE({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Production des Courtiers PC */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Production des Courtiers</label> </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="PC" name="PC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PC.style }  onChange={ (e) => {setPC({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Commissions servies aux Courtiers CSC */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux Courtiers</label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="CSC" name="CSC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CSC.style }  onChange={ (e) => {setCSC({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                     {/* Production des autres intermédiaires  PAI */}
                     <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Production des autres intermédiaires</label> </td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="PAI" name="PAI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PAI.style }  onChange={ (e) => {setPAI({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Commissions servies aux autres intermédiaires CSAI */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux autres intermédiaires</label></td>
                      <td>
                        <div className="md:w-48" >
                          <input type="text" id="CSAI" name="CSAI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + CSAI.style }  onChange={ (e) => {setCSAI({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* (Auto) Créances sur l’Etat CSE */}
                    <tr className="h-15.6 border">
                      <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"><label htmlFor="">Créances sur l’Etat</label> </td>
                      <td>
                        <div className="md:w-48 px-4" >
                          {CSE}
                        </div>
                      </td>
                    </tr>
                    {/* Primes impayées PI*/}
                    <tr className="h-31.2 border">
                      <td rowSpan="2" className="h-31.2 border-b-0.5 border">
                        dont
                      </td>
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid"><label htmlFor="" className="italic"> Primes impayées</label> </td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="PI" name="PI" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + PI.style }  onChange={ (e) => {setPI({style: normal,value: e.target.value})}} placeholder="0"/>
                        </div>
                      </td>
                    </tr>
                    {/* Emprunts publics échus EPE */}
                    <tr className="h-15.6 border">
                      <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid"><label htmlFor="" className="italic">Emprunts publics échus</label> </td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="EPE" name="EPE" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + EPE.style }  onChange={ (e) => {setEPE({style: normal,value: e.target.value})}} placeholder="0"/>
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
                    {/* Autres charges AC*/}
                    <tr className="h-16.2 border">
                      <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">Autres charges</td>
                      <td className="border-t-0">
                        <div className="md:w-48" >
                          <input type="text" id="AC" name="AC" className={"appearance-none border-2 rounded w-full py-2 px-4 text-white-70  leading-tight focus:outline-none focus:bg-white focus:border-green-500 " + AC.style } onChange={ (e) => {setAC({style: normal,value: e.target.value})}} placeholder="0" />
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