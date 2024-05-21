"use client"

import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
//import putEmployeDA from '../../../../../lib/api/employeDA/putEmployeDA'
import { useRouter } from 'next/navigation'
import getNCIARDTemp from '../../../../../lib/api/NC/IARD/getNCIARDTemp'
                                      

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
        <div className='w-fit h-full flex'>
             <select id="countries"  className="bg-gray-50 w-[40%] border-y border-l text-gray-900 text-sm rounded-s-md  focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="annee">Filtrer par année</option>
            <option value="date_soumission">Filtrer par date de soumission</option>
            
            <option value="trimestre">Filtrer par trimestre</option>
            <option value="nom_societe">Filtrer par société</option>
            <option value="type_assurance">Filtrer par type d'assurance</option>
            <option value="statut">Filtrer par statut</option>
        </select>
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


export default function DetailNCIARD() {
    const router = useRouter()
    const handleClick = (email,societe,date) => {
        console.log(`You clicked me! ${email}`);
        router.push('/employeDA/NC/historique/voiriard?email='+email.toString()+'&societe='+societe.toString()+'&date='+date.toString());
      };
    const [resSubmit, setResSubmit] = useState(null);

    
    const columns = [
{
            name: 'Date soumission',
            selector: row => row.date_soumission,
            sortable: true,
        },
        
        {
            name: 'Année',
            selector: row => row.annee,
            sortable: true,
            width: '100px',
        },
        {
            name: 'Trimestre',
            selector: row => row.trimestre,
            sortable: true,
        },

        
        {
            name: 'Société',
            selector: row => row.nom_societe,
            sortable: true,
        },
        {
            name: 'Type assurance',
            selector: row => row.type_assurance,
            sortable: true,
        },
        {
            name: 'Statut',
            selector: row => row.statut,
            sortable: true,
            cell: (d) => (
                <div className={`text-center rounded-lg border ${d.statut === 'VALIDEE' ? 'border-green-600' : d.statut === 'REFUSEE' ? 'border-red-600' : 'border-slate-600'} w-24 ${d.statut === 'VALIDEE' ? 'py-1 bg-green-600 text-white' : d.statut === 'REFUSEE' ? 'py-1 p-2 bg-red-600 text-white' : 'py-1 bg-slate-600 text-white'}`}>
                    <span className="text-lg">
                        {d.statut === 'VALIDEE' ? 'Validée' : d.statut === 'REFUSEE' ? 'Refusée' : 'En attente'}
                    </span>
                </div>
            ),
        },
        {
            name: "Action",
            sortable: false,
            width: '90px',
            cell: (d) => [
                
               <button key={d.date_soumission+d.annee} onClick={() => handleClick(d.email_membre, d.nom_societe, d.date_soumission)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

               </button>
            //   <button key={d.email} onClick={handleClick.bind(this, d.email)}>
            //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            //         <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            //     </svg>
            //   </button>,
            ]
           
          }
    
    ];
    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{date_soumission:"",annee:"",trimestre:"", nom_societe:"",type_assurance:"",statut:"",action:""}])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filteredItems,setfilteredItems] = useState(null)
    const [filtre,setfiltre] = useState("nom")
    console.log(filteredItems);
    // console.log(fakeUsers);
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        const onChange = (e) =>{
            // console.log(e.target.value);
            setfiltre(e.target.value)
        }

        return (
            <div className='flex w-full justify-between'> 
                {/* <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'>
                    <Image src="/add-friend.jpg" loading='lazy' width={30} height={30} alt="Add User"/>
                </button> */}
                <div className='ml-[60%]'>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);
    
    const intervalRef = useRef(null); // Hook useRef pour l'intervalle
    const [isMounted, setIsMounted] = useState(true);
      
    useEffect(() => {
        console.log("update");
        setIsMounted(true)
        const fetchData = async () => {
            const result = await getNCIARDTemp(); // Mettre getNCVIE
            // result.forEach((element) => {
            //     console.log(element)
            // });
            setUsers(result) 
            console.log(users);     
        }
         if (users !== null) {
            setIsClient(true);
            setfilteredItems(
            users ? users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())):[]
            );
          } else {
            setfilteredItems([{ date_soumission: "", annee: "", trimestre: "", nom_societe: "", type_assurance: "", statut: "", action: "" }]);
          }
      
          // Configurer l'intervalle pour les mises à jour des données
          intervalRef.current = setInterval(() => {
            if (isMounted) {
                console.log(true);
                fetchData()
            }else{
                console.log(false);
            }
            if (users != null){
                setIsClient(true)
                console.log(users);
                setfilteredItems(users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())))
             }else{
                setIsClient(false)
                 setfilteredItems([{date_soumission:"",annee:"",trimestre:"", nom_societe:"",type_assurance:"",statut:"",action:""}])
             }
          }, 500); // Mise à jour toutes les secondes
      
          return () => {
            // Vider l'intervalle au démontage du composant ou au nettoyage
            setIsMounted(false)
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            
          };
        },[users,filterText, resetPaginationToggle]);
    return ( 
        <>
           <div className='pt-3'>
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des notes de conjecture IARD</h1>
           
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