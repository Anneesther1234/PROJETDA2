"use client"
import Link from "next/link";
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';
import getSocietes from '../../../../../lib/api/Societe/getSocietes'
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







export default function ModifierSociete() {
    const router = useRouter()
    const handleClick = (email) => {
        console.log(`You clicked me! ${email}`);
        router.push('/admin/utilisateurs/modifierSociete/societe?email='+email.toString());
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
                name: 'Agrément',
                selector: row => row.num_agrement,
                sortable: true,
            },
            {
                name: 'siege',
                selector: row => row.siege,
                sortable: true,
            },
            {
                name: 'Dirigeant',
                selector: row => row.dirigeant,
                sortable: true,
            },
            {
                name: 'Contact',
                selector: row => row.contact,
                sortable: true,
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
            },
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

    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [filteredItems,setfilteredItems] = useState(null)
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
               {/* <Link href="/admin/utilisateurs/nouvellecompagnie" >
            <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'  >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" title="Ajouter une nouvelle compagnie">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
            </svg>

                </button> 
                         
            </Link> */}
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);

 
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
                setfilteredItems(users.filter(item => item.nom && item.nom.toLowerCase().includes(filterText.toLowerCase())))
        }
        }else{
            setfilteredItems([{nom:"",num_agrement:"",siege:"",dirigeant:"",contact:"",email:"",type_assurance:""}])
        }

        return () => setIsMounted(false);

    }, [users,filterText, resetPaginationToggle])

    return ( 
        <>
           <div className='pt-3'>
            <h1 className='font-bold text-gris text-center text-2xl'>Modifier une société</h1>
           
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
            {/* Popup de suppression d'une societe  */}
            <div className="min-w-screen h-screen hidden animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    {/* <!--content--> */}
                    <div className="">
                        {/* <!--body--> */}
                        <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <h2 className="text-xl font-bold py-4 ">Êtes vous sûr?</h2>
                            <p className="text-sm text-gray-500 px-8">Voulez-vous vraiment supprimer cette société? <br></br> Ce processus sera irréversible</p>    
                        </div>
                        {/* <!--footer--> */}
                        <div className="p-3  mt-2 text-center space-x-4 md:block">
                            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                Annuler
                            </button>
                            <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                                supprimer
                            </button>
                        </div>
                    </div>
                </div>
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