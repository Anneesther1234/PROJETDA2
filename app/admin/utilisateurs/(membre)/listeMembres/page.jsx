"use client"
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getSocietes from '../../../../../lib/api/membre/getMembres'
import { useRouter } from "next/navigation";




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
            <option value="prenoms">Filtrer par prénoms</option>
            <option value="email">Filtrer par email</option>
            <option value="nom_societe">Filtrer par société</option>
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
            <button type="button" onClick={onClear} className='bg-vert w-[10%] rounded-r h-full text-white'>
                X
            </button>
        </div>
    );
}







export default function ListeSociete() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{nom:"",prenoms:"",email:"",nom_societe:"",typeAssurance:""}])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filteredItems,setfilteredItems] = useState(null)
    const [filtre,setfiltre] = useState("nom")
    // console.log(fakeUsers);
    //barre supérieure avant le tableau
    const subHeaderComponentMemo = useMemo(() => {
        //Evénèment de nettoyage du champs de recherche
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
                {/* lien de création d'un nouveau membre */}
               <Link href="/admin/utilisateurs/nouveauMembre" >
                <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'  >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>

                </button>
                            
                </Link>
                {/* Champs de saisie */}
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} onChange={onChange} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);
    const intervalRef = useRef(null);

    const handleClick = (email) => {
        console.log(`You clicked me! ${email}`);
        router.push('/admin/utilisateurs/listeMembres/membre?email=' + email.toString());
    };
    const columns = [

        {
            name: 'Nom',
            selector: row => row.nom,
            sortable: true,
        },
        {
            name: 'Prénoms',
            selector: row => row.prenoms,
            sortable: true,
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Société',
            selector: row => row.nom_societe,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => row.typeAssurance,
            sortable: true,
        },
        // Acition
        {
            name: "Détails",
            sortable: false,
            width: '100px',
            cell: (d) => [
            <button key={d.email} onClick={handleClick.bind(this, d.email)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

            </button>,
            ]
        }
    
    ];
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

        if (users !== null){
           if(users){ 
                setIsClient(true)
                if(filtre == "nom"){
                    setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "prenoms"){
                    setfilteredItems(users.filter(item => item.prenoms && item.prenoms.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "genre"){
                    setfilteredItems(users.filter(item => item.genre && item.genre.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "telephone"){
                    setfilteredItems(users.filter(item => item.telephone && item.telephone.toLowerCase().includes(filterText.toLowerCase())))
                }
               
                if(filtre == "email"){
                    setfilteredItems(users.filter(item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase())))
                }
        
                if(filtre == "nom_societe"){
                    setfilteredItems(users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "typeAssurance"){
                    setfilteredItems(users.filter(item => item.typeAssurance && item.typeAssurance.toLowerCase().includes(filterText.toLowerCase())))
                }
                
           }
        }else{
            setfilteredItems([{nom:"",prenoms:"",email:"",nom_societe:"",typeAssurance:""}])
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
                if(filtre == "nom"){
                    setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "prenoms"){
                    setfilteredItems(users.filter(item => item.prenoms && item.prenoms.toLowerCase().includes(filterText.toLowerCase())))
                }
               
                if(filtre == "email"){
                    setfilteredItems(users.filter(item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase())))
                }
        
                if(filtre == "nom_societe"){
                    setfilteredItems(users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "typeAssurance"){
                    setfilteredItems(users.filter(item => item.typeAssurance && item.typeAssurance.toLowerCase().includes(filterText.toLowerCase())))
                }
             }else{
                setIsClient(false)
                 setfilteredItems([{nom:"",prenoms:"",email:"",nom_societe:"",typeAssurance:""}])
             }
          }, 500); // Mise à jour toutes les secondes
      
          return () => {
            // Vider l'intervalle au démontage du composant ou au nettoyage
            setIsMounted(false)
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            
          };

    }, [users,filterText, resetPaginationToggle])
    
    return ( 
        <>
           <div className='pt-3'>
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des Membres de sociétés</h1>
           
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