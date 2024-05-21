"use client"
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getUsers from '../../../../../lib/api/employeDA/getUsers'


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
	},
    {
		name: 'Prénoms',
		selector: row => row.prenom,
		sortable: true,
        width: '200px',
	},
    {
		name: 'Genre',
		selector: row => row.genre,
		sortable: true,
        width: '100px',
	},
    {
		name: "Nom d'utilisateur",
		selector: row => row.username,
		sortable: true,
        
	},
	{
		name: 'Email',
		selector: row => row.email,
		sortable: true,
        width: '200px',
	},
	{
		name: 'Rôle',
		selector: row => row.role,
		sortable: true,
	},
    {
		name: 'Poste',
		selector: row => row.poste,
		sortable: true,
	},
    {
		name: 'Téléphone',
		selector: row => row.telephone,
		sortable: true,

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



function FilterComponent({ filterText, onFilter, onClear}) {
    return (
        <div className='w-fit h-full flex'>
            
           <select id="countries"  className="bg-gray-50 w-[40%] border-y border-l text-gray-900 text-sm rounded-s-md  focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="nom">Filtrer par nom</option>
            <option value="prenom">Filtrer par prénoms</option>
            <option value="genre">Filtrer par genre</option>
            <option value="telephone">Filtrer par téléphone</option>
            <option value="username">Filtrer par username</option>
            <option value="email">Filtrer par email</option>
            <option value="poste">Filtrer par poste</option>
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







export default function ListeUtilisateurs() {
    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{nom:"",prenom:"", genre:"",username:"",email:"",telephone:"",role:"",poste:""}])
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
                   <Link href="/admin/utilisateurs/nouvelemploye" >
            <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>


                </button> 
                         
            </Link>
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} onChange={onChange} filterText={filterText} />
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
            const result = await  getUsers(); // Mettre getNCVIE
            // result.forEach((element) => {
            //     console.log(element)
            // });
            setUsers(result) 
            console.log(users);     
        }
        // if (isMounted) {
        //     fetchData()
        // }
        
        if (users != null){
            if(users){ 
                setIsClient(true)
                if(filtre == "nom"){
                    setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "prenoms"){
                    setfilteredItems(users.filter(item => item.prenom && item.prenom.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "genre"){
                    setfilteredItems(users.filter(item => item.genre && item.genre.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "telephone"){
                    setfilteredItems(users.filter(item => item.telephone && item.telephone.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "username"){
                    setfilteredItems(users.filter(item => item.username && item.username.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "email"){
                    setfilteredItems(users.filter(item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "poste"){
                    setfilteredItems(users.filter(item => item.poste && item.poste.toLowerCase().includes(filterText.toLowerCase())))
                }
                
           }
         }else{


setfilteredItems([{nom:"",prenom:"",genre:"",username:"",email:"",telephone:"",role:"",poste:""}])
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
                 setfilteredItems([{nom:"",prenom:"",genre:"",username:"",email:"",telephone:"",role:"",poste:""}])
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
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des utilisateurs</h1>
           
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