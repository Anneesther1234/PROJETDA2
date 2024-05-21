"use client"
import Link from "next/link";
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';
export default function TableNc2(){

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

const customStyles = {
	headRow: {
		style: {
			backgroundColor: "#009440",
			borderBottomColor: "#009440",
		},
	},
    head: {
		style: {
			fontSize: '15px',
			fontWeight: '1000',
            color:'#ffffff'
		},
	},
};



function FilterComponent({ filterText, onFilter, onClear }) {
    return (
        <div className='w-fit h-full'>
            <input
                id="search"
                type="text"
                placeholder="Filtrer par nom"
                aria-label='Entrée de recherche'
                value={filterText}
                onChange={onFilter}
                className='border p-2 rounded-l'
            />
            <button type="button" onClick={onClear} className='bg-vert w-10 rounded-r h-full text-white'>
                X
            </button>
        </div>
    );
}







   // export default function ListeCompagnies() {
       // const [isClient, setIsClient] = useState(false)
        //const [users,setUsers] = useState([{nom:"",prenom:"",username:"",email:"",telephone:"",role:"",poste:""}])
       // const [filterText, setFilterText] = useState('');
       // const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
       // const [filteredItems,setfilteredItems] = useState(null)
        // console.log(fakeUsers);
        const subHeaderComponentMemo = useMemo(() => {
            const handleClear = () => {
                if (filterText) {
                    setResetPaginationToggle(!resetPaginationToggle);
                    setFilterText('');
                }
            };

        return (
            <div className='flex w-full justify-between'>
               <Link href="/admin/utilisateurs/nouvellecompagnie" >
            <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" title="Ajouter une nouvelle compagnie">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>

                </button> 
                         
            </Link>
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);

 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getCompagnies();
            // result.forEach((element) => {
            //     console.log(element)
            // });
            setUsers(result)
        };
        fetchData()
        if (users !== null){
           setIsClient(true) 
           setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
        }else{
            setfilteredItems([{nom:"",prenom:"",username:"",email:"",telephone:"",role:"",poste:""}])
        }
    }, [users,filterText, resetPaginationToggle])
    return ( 
        <>
           <div className='pt-3'>
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des compagnies</h1>
           
            {isClient && <div className='px-[2%] z-0 w-full h-full '>
                
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    highlightOnHover={true}
                    className='z-0 shadow mt-5 border border-gray-400 '
                    customStyles={customStyles}
                />
            </div>}
            </div>
        </>
        
    );
}


// export default function ManageUsers(){
//     return(
//         <>
//             <DataTable
// 			columns={columns}
// 			data={data}
//             highlightOnHover={true}
//             pagination={true}
//             selectableRows={true}
// 		/>
//         </>
//     )
// }