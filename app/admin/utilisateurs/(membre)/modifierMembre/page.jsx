"use client"
import Link from "next/link";
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
// import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';
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



function FilterComponent({ filterText, onFilter, onClear,onChange }) {
    return (
        <div className='w-fit h-full flex'>
        <select id="countries" onChange={onChange} className="bg-gray-50 w-[40%] border-y border-l text-gray-900 text-sm rounded-s-md  focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="nom">Filter par nom</option>
            <option value="prenoms">Filter par prénoms</option>
            <option value="genre">Filter par genre</option>
            <option value="telephone">Filter par téléphone</option>
            <option value="username">Filter par username</option>
            <option value="email">Filter par email</option>
            <option value="poste">Filter par poste</option>
            <option value="nom_societe">Filter par société</option>
            <option value="typeAssurance">Filter par type</option>
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
    const [users,setUsers] = useState([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" title="Ajouter une nouvelle compagnie">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
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

    const handleClick = (email) => {
        console.log(`You clicked me! ${email}`);
        router.push('/admin/utilisateurs/modifierMembre/membre?email=' + email.toString());
    };
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
            name: "Action",
            sortable: false,
            cell: (d) => [
            //     <button key={d.email} onClick={handleClick.bind(this, d.email)}>
            //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            //             <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            //         </svg>
            //   </button>,
            <button key={d.email} onClick={handleClick.bind(this, d.email)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </button>,
            ]
        }
    
    ];
    
    const fetchData = async () => {
            const result = await getSocietes();
            // result.forEach((element) => {
            //     console.log(element)
            // });
            setUsers(result)
    };
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        if (isMounted) {
            fetchData();
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
                if(filtre == "username"){
                    setfilteredItems(users.filter(item => item.username && item.username.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "email"){
                    setfilteredItems(users.filter(item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "poste"){
                    setfilteredItems(users.filter(item => item.poste && item.poste.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "nom_societe"){
                    setfilteredItems(users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())))
                }
                if(filtre == "typeAssurance"){
                    setfilteredItems(users.filter(item => item.typeAssurance && item.typeAssurance.toLowerCase().includes(filterText.toLowerCase())))
                }
                
           }
        }else{
            setfilteredItems([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
        }

        return () => setIsMounted(false);

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