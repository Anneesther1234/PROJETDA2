"use client"
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getSocietes from '../../../../../lib/api/Societe/getSocietes'


const columns = [
    {
		name: 'id',
		selector: row => row.id,
		omit:true
	},
	{
		name: 'Nom',
		selector: row => row.nom,
		sortable: true,
        width: '200px',
	},
	{
		name: 'Agrément',
		selector: row => row.num_agrement,
		sortable: true,
	},
    {
		name: 'Siege',
		selector: row => row.siege,
		sortable: true,
        width: '100px',
	},
    {
		name: 'Dirigeant',
		selector: row => row.dirigeant,
		sortable: true,
        width: '180px',
	},
    {
		name: 'Contact',
		selector: row => row.contact,
		sortable: true,
        width: '120px',
	},
    {
		name: 'email',
		selector: row => row.email,
		sortable: true,
	},
    {
		name: 'Type',
		selector: row => row.type_assurance,
		sortable: true,
        width: '120px',
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
        <div className='w-fit h-full flex'>
           <select id="countries"  className="bg-gray-50 w-[40%] border-y border-l text-gray-900 text-sm rounded-s-md  focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="nom">Filtrer par nom</option>
            <option value="prenoms">Filtrer par agrément</option>
            <option value="email">Filtrer par siege</option>
            <option value="nom_societe">Filtrer par dirigeant</option>
            <option value="typeAssurance">Filtrer par contact</option>
            <option value="typeAssurance">Filtrer par email</option>
            <option value="typeAssurance">Filtrer par type</option>
        </select>
            <input
                id="search"
                type="text"
                placeholder="Recherche"
                aria-label='Entrée de recherche'
                value={filterText}
                onChange={onFilter}
                className='border p-2 w-[50%]'
            />
            <button type="button" onClick={onClear} className='bg-vert w-10 rounded-r h-full text-white'>
                X
            </button>
        </div>
    );
}







export default function ListeSocietes() {
    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filteredItems,setfilteredItems] = useState(null)
    const [filtre,setfiltre] = useState("nom")
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
               <Link href="/admin/utilisateurs/nouvelleSociete" >
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
    const intervalRef = useRef(null); // Hook useRef pour l'intervalle

    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        console.log("update");
        setIsMounted(true)
        const fetchData = async () => {
            const result = await getSocietes(); // Mettre getNCVIE
            // result.forEach((element) => {
            //     console.log(element)
            // });
            setUsers(result) 
            console.log(users);     
        }
        // if (isMounted) {
        //     fetchData()
        // }
        
        if (users !== null){
            if(users){ 
                 setIsClient(true)
                 if(filtre == "nom"){
                     setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
                 }
                 if(filtre == "num_agrement"){
                     setfilteredItems(users.filter(item => item.num_agrement && item.num_agrement.toLowerCase().includes(filterText.toLowerCase())))
                 }
                 if(filtre == "dirigeant"){
                     setfilteredItems(users.filter(item => item.dirigeant && item.dirigeant.toLowerCase().includes(filterText.toLowerCase())))
                 }
                 if(filtre == "contact"){
                     setfilteredItems(users.filter(item => item.contact&& item.contact.toLowerCase().includes(filterText.toLowerCase())))
                 }
                
                 if(filtre == "email"){
                     setfilteredItems(users.filter(item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase())))
                 }
         
                 if(filtre == "type_assurance"){
                     setfilteredItems(users.filter(item => item.type_assurance && item.type_assurance.toLowerCase().includes(filterText.toLowerCase())))
                 }
                 
            }
         }else{
             setfilteredItems([{nom:"",prenoms:"",email:"",nom_societe:"",type_assurance:""}])
         }
        // if (users !== null) {
        //     setIsClient(true);
        //     setfilteredItems(
        //       users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase()))
        //     );
        //   } else {
        //     setfilteredItems([{ date_soumission: "", annee: "", trimestre: "", nom_societe: "", type_assurance: "", statut: "", action: "" }]);
        //   }
      
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
                setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
             }else{
                setIsClient(false)
                 setfilteredItems([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
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
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des sociétés</h1>
           
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