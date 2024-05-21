"use client"

import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';
import getUsers from '../../../../../lib/api/employeDA/getUsers'
import putEmployeDA from '../../../../../lib/api/employeDA/putEmployeDA'
import { useRouter } from 'next/navigation'

                                               

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


export default function ModifierEmployes() {
    const router = useRouter()
    const handleClick = (email) => {
        console.log(`You clicked me! ${email}`);
        router.push('/admin/utilisateurs/modifierEmployes/employe?email='+email.toString());
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
            name: 'Prenom',
            selector: row => row.prenom,
            sortable: true,
        },
        {
            name: 'Genre',
            selector: row => row.genre,
            sortable: true,
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
    const [users,setUsers] = useState([{nom:"",prenom:"",genre:"",username:"",email:"",telephone:"",role:"",poste:""}])
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
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>
           
        );
    }, [filterText, resetPaginationToggle]);

 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getUsers();
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
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des employés DA</h1>
           
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