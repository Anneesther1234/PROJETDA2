
"use client"

import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
//import putEmployeDA from '../../../../../lib/api/employeDA/putEmployeDA'
import { useRouter } from 'next/navigation'
import getNCVIE from '../../../../lib/api/NC/VIE/getNCVIE'
import deleteNC from '../../../../lib/api/NC/deleteNC'

                                               

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
                placeholder="Filtrer par société"
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


export default function SupprimerNCVIE() {
    const router = useRouter()
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
            cell: (d) => [
                
                <button key={d.date_soumission+d.email_membre} onClick={() => ManageUser(true,d.email_membre, d.nom_societe, d.date_soumission)}  className='mx-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
              </button>,
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
    const [users,setUsers] = useState(null)
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
                {/* <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'>
                    <Image src="/add-friend.jpg" loading='lazy' width={30} height={30} alt="Add User"/>
                </button> */}
                <div className='ml-[75%]'>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);
    const intervalRef = useRef(null); // Hook useRef pour l'intervalle
    const handleClick = (email,societe,date) => {
        console.log('You clicked me!${email}');
        router.push('/admin/NC/SupprimerNCVIE/details?email='+email.toString()+'&societe='+societe.toString()+'&date='+date.toString());
    };
    // élement à supprimer
    const [itemToDelete, setItemToDelete] = useState(null);
    const [popup,setPopup] = useState("hidden")
    const ManageUser = (bool,email,societe,date) => {
        if(bool){
            if(email !== null && societe !== null && date !== null){
                setItemToDelete({
                    "email" : email,
                    "societe" : societe,
                    "date" : date
                })
                setPopup("")
            }
            
        }else{
            setItemToDelete({
                "email" : null,
                "societe" : null,
                "date" : null
            })
            setPopup("hidden")
        }
    }
    const [resSubmit, setresSubmit] = useState(null);
    const handleDelete = async () => {
        ManageUser(false,null,null,null)
        if(itemToDelete.email != null && itemToDelete.societe != null && itemToDelete.date != null){
            const url = "http://localhost:9191/api/SUPPRESSION/supprimerVIE/"
            const res = await deleteNC(url, itemToDelete.email , itemToDelete.societe , itemToDelete.date)
            console.log("res :"+res);
            // const res = "ok"
            
            if(res == "ok"){
                console.log("yes")
                // fetchData()
              setresSubmit(true)
            }
        }
    }
    const [isMounted, setIsMounted] = useState(true);
    
    useEffect(() => {
        console.log("update");
        setIsMounted(true)
        const fetchData = async () => {
            const result = await getNCVIE(); // Mettre getNCVIE
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
            setIsClient(true)
            console.log(users);
            setfilteredItems(users.filter(item => item.nom_societe && item.nom_societe.toLowerCase().includes(filterText.toLowerCase())))
         }else{


setfilteredItems([{date_soumission:"",annee:"",trimestre:"", nom_societe:"",type_assurance:"",statut:"",action:""}])
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
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des notes de conjecture VIE</h1>
           
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
             <div id="PopupSupprimer" className={"min-w-screen h-screen  animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover " + popup} >
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
                            <button onClick={() => { ManageUser(false,null,null,null) }} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                Annuler
                            </button>
                            <button onClick={() => { handleDelete() }} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                                supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popup de succès  */}
            {resSubmit == true && <div  className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
                    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        {/* <!--content--> */}
                        <div className="">
                            {/* <!--body--> */}
                            <div className="text-center p-5 flex flex-col items-center justify-between">
                                <Image src='/check-mark.png' width={70} height={70} alt="check-mark"/>
                                <p className="text-sm text-gray-500 px-8">La note de conjoncture a été supprimée avec succès</p>    
                            </div>
                            {/* <!--footer--> */}
                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <button onClick={()=>{setresSubmit(false);router.refresh()}}  className="mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-blue-600">
                                OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
        
    );
}

// export default function ManageUsers(){
//     return(
//         <>
//             <DataTable
//       columns={columns}
//       data={data}
//             highlightOnHover={true}
//             pagination={true}
//             selectableRows={true}
//     />
//         </>
//     )
// }
