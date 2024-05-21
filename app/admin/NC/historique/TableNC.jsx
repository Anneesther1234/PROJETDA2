
import Image from "next/image";
import DataTable from "react-data-table-component";


export default function TableNc(){


    const columns = [

        {
            name: <p className="text-bold text-[15px] font-bold ">N°</p>,
            selector: row => row.id,
            sortable: true,
		        reorder: true,
            
        },
        
        {
            name: <p className="text-bold text-[15px] font-bold">Année</p>,
            selector: row => row.annee,
            sortable: true,
            reorder: true,
        },
        {
            name:  <p className="text-bold text-[15px] font-bold"> Trimestre</p>,
            selector: row => row.trimestre,
            sortable: true,
            reorder: true,
        },
        {
            name: <p className="text-bold text-[15px] font-bold"> Date de soumission</p> ,
            selector: row => row.datesoum,
            sortable: true,
            reorder: true,
        },

        {
          name:  <p className="text-[15px] font-bold">Société d'assurance </p>,
          selector: row => row.so,
          sortable: true,
          reorder: true,
    
          
      },
        {
            name: <p className="text-bold text-[15px] font-bold">Etat</p>,
            selector: row => row.etat,
            sortable: true,
            reorder: true,
        },
        {
            name: ' ',
            selector: row => row.details,
            sortable: true,
            reorder: true,
            
      
            
        },

        {
          name:  <p className="text-[15px] font-bold">Fichiers </p>,
          selector: row => row.fi,
          sortable: true,
            reorder: true,
          
    
          
      },
    
    ];


    const data = [
        {

          id: <p className="text-[15px]"> 1</p> ,
          annee: <p className="text-[15px]"> 2024</p>,
          trimestre:3,
          datesoum:<p className="text-[15px]"> 04/03/2024</p>,
          so:<p className="text-[15px]"> SOMAVIE</p>,
          
          etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
          details: <button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,
          fi: <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>
         


      },
      { id: <p className="text-[15px]"> 2</p>,
        annee: <p className="text-[15px]"> 2024</p>,
        trimestre: 2,
        datesoum:<p className="text-[15px]"> 04/03/2024</p>,
        so:<p className="text-[15px]"> ALTANTIQUE VIE </p>,
        etat:<div className="border-2 py-1 px-4 bg-slate-300 hover:bg-slate-700 rounded" type="button"> <p className=" tex-center px-[10%] font-bold  text-white text-[15px]">En attente</p> </div>,
        details:<button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,  
        fi: <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>
       


      },

      { id: <p className="text-[15px]"> 3</p>,
        annee: <p className="text-[15px]"> 2024</p>,
        trimestre: 1,
        datesoum:<p className="text-[15px]"> 04/03/2024</p>,
        so:<p className="text-[15px]"> ALLIANZ VIE</p>,
        etat:<div className="border-2 py-1 px-6 bg-red-500 hover:bg-red-700 rounded " type="button"> <p className="  text-center px-[10%] font-bold  text-white text-[15px]">Refusée</p> </div>,
        details:<button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,
        fi: <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>

      },
      { id: <p className="text-[15px]"> 4</p>,
        annee: <p className="text-[15px]"> 2024</p>,
        trimestre: 3,
        datesoum:<p className="text-[15px]"> 04/03/2024</p>,
        so:<p className="text-[15px]"> SONAM</p>,
        etat:<div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]">Validée</p> </div>,
        details:<button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,
        fi: <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>

      },
      { id: <p className="text-[15px]"> 5</p>,
        annee: <p className="text-[15px]"> 2024</p>,
        trimestre: 2,
        datesoum:<p className="text-[15px]"> 04/03/2024</p>,
        so:<p className="text-[15px]"> 2ACI</p>,
        etat:<div className="border-2 py-1 px-4 bg-slate-300  hover:bg-slate-700 rounded items-center " type="button"> <p className=" text-center  px-[10%] font-bold  text-white text-[15px]">En attente</p> </div>,
        details:<button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,
        fi: <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>


      },

      { id: <p className="text-[15px]"> 6</p>,
        annee: <p className="text-[15px]"> 2024</p>,
        trimestre: <p className="text-[15px]"> 1</p>,
        datesoum:<p className="text-[15px]"> 04/03/2024</p>,
        so:<p className="text-[15px]"> NSIA</p>,
        etat:<div className="border-2 py-1 px-6 bg-red-500 hover:bg-red-700 rounded text-center" type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px] ">Refusée</p> </div>,
        details:<button type="button"> <p className="text-orange text-[15px]">Détails</p>  </button>,
        fi:  <button type="button"> <Image  loading="lazy" src="/telecharger.png" alt="image description" title="Télécharger le fichier" width={30} height={30}/>   </button>

      },
  ]
    
    return (

    <div className=" shadow-md mx-5">
      <DataTable
      columns={columns}
      data={data}
      />

    </div>
    );
}