'use serveur'

import { cookies } from 'next/headers';
import Form from "./Form"

//Page de création d'une note de conjoncture
export default function NewNC(){

    const type_compagnie = cookies().has("type_compagnie") ? cookies().get("type_compagnie")["value"] : ""
    return(
        <>    
           <Form></Form>   
        </>
    );
}

// <div id="StartForm" className={Form1 ? "flex flex-wrap h-fit" : "hidden"}>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-blanc">Trimestre</label>
//                         <select name="trimestre" id="trimestre" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black">
//                             <option value="1" className="rounded-none">Trimestre 1</option>
//                             <option value="2" className="rounded-none">Trimestre 2</option>
//                             <option value="3" className="rounded-none">Trimestre 3</option>
//                             <option value="4" className="rounded-none">Trimestre 4</option>
//                         </select>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%] ">
//                         <label className="text-gray-800 p-1" htmlFor="nbr">Année</label>
//                         <input type="date" id="annee" name="annee" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black" placeholder="0"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Frais du personnel</label>
//                         <input type="number" id="frais_du_personnel" name="frais_du_personnel" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Autres charges</label>
//                         <input type="number" name="autre_charges" id="autre_charges" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Commissions servies aux courtiers</label>
//                         <input type="number" id="commissions_servies_aux_courtiers" name="commissions_services_aux_courtiers" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%] text-sm">
//                         <label className="text-gray-800">Commissions servies aux autres intermédiaires<br></br></label>
//                         <input type="number" id="commissions_servies_aux_autres_intermediaires" name="commissions_servies_aux_autres_intermediaires" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="creances_sur_Etat" name="creances_sur_Etat" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Effectif personnel</label>
//                         <input type="number" id="effectif_personnel" name="effectif_personnel" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-blanc">Trimestre</label>
//                         <select name="" id="" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black">
//                             <option value="1" className="rounded-none">Trimestre 1</option>
//                             <option value="2" className="rounded-none">Trimestre 2</option>
//                             <option value="3" className="rounded-none">Trimestre 3</option>
//                             <option value="4" className="rounded-none">Trimestre 4</option>
//                         </select>
//                     </div>
//                     <div className="w-full h-fit flex justify-center mr-[5%]">
//                         <div className="w-20">
//                             <button type="button" className="border bg-gray-300 rounded-full w-fit h-fit text-center p-3 text-white shadow-md hover:bg-red-600" onClick={() => {setForm1(false);setForm2(true);}}>
//                                 <Image src="/fleche-droite.png" alt="retour" width={30} height={30}/>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="EndForm" className={Form2 ? "flex flex-wrap h-fit" : "hidden"}>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-blanc">idcicijcfi</label>
//                         <select name="trimestre" id="trimestre" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black">
//                             <option value="1" className="rounded-none">Trimestre 1</option>
//                             <option value="2" className="rounded-none">Trimestre 2</option>
//                             <option value="3" className="rounded-none">Trimestre 3</option>
//                             <option value="4" className="rounded-none">Trimestre 4</option>
//                         </select>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%] ">
//                         <label className="text-gray-800 p-1" htmlFor="nbr">Année</label>
//                         <input type="date" id="annee" name="annee" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black" placeholder="0"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Frais du personnel</label>
//                         <input type="number" id="frais_du_personnel" name="frais_du_personnel" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Autres charges</label>
//                         <input type="number" name="autre_charges" id="autre_charges" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Commissions servies aux courtiers</label>
//                         <input type="number" id="commissions_servies_aux_courtiers" name="commissions_services_aux_courtiers" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="creances_sur_Etat" name="creances_sur_Etat" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Effectif personnel</label>
//                         <input type="number" id="effectif_personnel" name="effectif_personnel" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-gray-800">Créances sur Etat</label>
//                         <input type="number" id="emprunts_publics_echus" name="emprunts_publics_echus" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black"/>
//                     </div>
//                     <div className="w-1/3 h-20 px-[3%]">
//                         <label className="text-blanc">Trimestre</label>
//                         <select name="" id="" className="w-full max-w-[85%] h-1/2 p-2 border border-gray-500 rounded-md hover:border-black">
//                             <option value="1" className="rounded-none">Trimestre 1</option>
//                             <option value="2" className="rounded-none">Trimestre 2</option>
//                             <option value="3" className="rounded-none">Trimestre 3</option>
//                             <option value="4" className="rounded-none">Trimestre 4</option>
//                         </select>
//                     </div>
//                     <div className="w-full h-fit flex justify-center space-x-[10%] my-[2%] mr-[10%]">
//                         <div className="w-fit">
//                             <button type="button" className="font-medium border bg-gray-300 rounded-full w-full h-full text-center p-3 text-white shadow-md hover:bg-red-600 rotate-180"  onClick={() => {setForm2(false);setForm1(true)}}>
//                                 <Image src="/fleche-droite.png" alt="retour" width={30} height={30}/>
//                             </button>
//                         </div>
//                         <div className="w-[20%] bg-bleu rounded-lg ">
//                             <button type="button" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md" >Envoyer le formulaire</button>
//                         </div>
//                     </div>
//                 </div>