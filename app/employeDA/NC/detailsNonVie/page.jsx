"use client"

import Link from "next/link";

export default function FormNonVie(){
    return (
        <>
        <h1 className="text-center font-bold text-gris m-5 text-xl">Nouvelle note de conjoncture IARD</h1>
         <div className='w-full flex justify-center items-center px-[2%]'>
         <form action="" className="p-[2%] border border-vert shadow-md">
        <div className="overflow-x-auto">
      <table className="w-full whitespace-no-wrap">
        <tbody>
          <tr className="h-30.6 border">
            <td colSpan="4" className="h-30.6 border px-4 py-2 border-r-1 border-solid">  Libellé </td>
            <td> Données </td>
            
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-black">Trimestre</label></td>
            <td> <div class="md:w-48" >

            <select name="trimestre" id="trimestre" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500">
                            <option value="1" className="rounded-none">Trimestre 1</option>
                            <option value="2" className="rounded-none">Trimestre 2</option>
                            <option value="3" className="rounded-none">Trimestre 3</option>
                            <option value="4" className="rounded-none">Trimestre 4</option>
                        </select>
              </div> </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"><label className="text-gray-800 p-1" htmlFor="nbr">Année</label></td>
            <td> <div class="md:w-48">
            <input type="date" id="annee" name="annee" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>
              </div> </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Nombre de contrats d'assurance</label></td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0" />

              </div></td>
          </tr>
         
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Primes émises nettes d'annulations (Chiffre d'affaires)</label></td>
            {/* <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td> */}
              <td>  0 </td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="11" className="border-b-0.5 h-171.6 border ">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic"> Maladie</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid" > <label htmlFor="" className="italic">Accidents corporels</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic"> RC Automobile</label> </td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Incendie et autres dommages aux biens</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Assurance importation des marchandises</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"><label htmlFor="" className="italic">Microassurance</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; <label htmlFor="">dont Assurances indicielles</label>  </td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border   px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border  px-4 py-2 border-r-1 border-solid "><label htmlFor="">Acceptations dommages</label> </td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border  px-4 py-2 border-r-1 border-solid "> <label htmlFor="">Stock de sinistres bons à payer</label> </td>
            <td> <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-171.6 border">
            <td rowSpan="11" className="border-b-0.5 h-171.6 border px-4 py-2 border-r-1 border-solid">dont</td>
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Maladie</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Accidents corporels</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">RC Automobile</label> </td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques automobile</label>  </td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor=""className="italic">Incendie et autres dommages aux biens</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Crédit</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border  px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Caution</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Assurance importation des marchandises</label> </td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Microassurance</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>

          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  dont  <label htmlFor="">Assurances indicielles</label></td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
            
          </tr>
          <tr className="h-15.6 border px-4 py-2 border-r-1 border-solid">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-solid"> <label htmlFor="" className="italic">Autres risques directs dommages</label></td>
            <td className="border"><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     dont  <label htmlFor="">Sinistres payés </label></td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
            </tr>
            <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Production des Courtiers</label> </td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux Courtiers</label></td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid"> <label htmlFor="">Commissions servies aux autres intermédiaires</label></td>
            <td><div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div></td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor="">Créances sur l’Etat</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0" />

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
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="3" className="border px-4 py-2 border-r-1 border-l-0 border-solid">
             <label htmlFor="" className="italic">Emprunts publics échus</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid">
             <label htmlFor=""> Frais du personnel</label>
            </td>
            <td className="border-t-0">
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div>
            </td>
          </tr>
          <tr className="h-15.6 border">
            <td colSpan="4" className="h-15.6 border px-4 py-2 border-r-1 border-solid ">
             <label htmlFor="">Effectif du personnel</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div>
            </td>
          </tr>
          <tr className="h-16.2 border">
            <td colSpan="4" className="h-16.2 border px-4 py-2 border-r-1 border-soli">
             <label htmlFor="">Autres charges</label> 
            </td>
            <td className="border-t-0">
            <div className="md:w-48" >
            <input type="number" id="nombre_de_contrat" name="nombre_de_contrat" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="0"/>

              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>

    <div className="w-full h-fit flex justify-center space-x-[10%] my-[5%] mr-[10%]">
    <div className="w-[30%] bg-bleu rounded-lg ">
                            <button type="button" className="font-medium bg-vert rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Valider</button>
                        </div>

                        <div className="w-[30%] bg-bleu rounded-lg ">
                        <Link href="/employeDA/NC/commentaires" > <button type="button" className="font-medium bg-red-500 hover:bg-red-700  rounded-lg w-full text-center px-5 py-3 text-white shadow-md text-md" >Refuser</button> </Link>       
                        </div>
    </div>

   

    
        </form>
    </div>
       
        </>
    )
}