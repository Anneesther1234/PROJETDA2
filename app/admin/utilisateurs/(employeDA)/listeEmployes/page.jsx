"use client"

import Link from "next/link";
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';
import getEmployes from '../../../../../lib/api/employeDA/getEmployes'


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
		name: 'Username',
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







export default function ListeEmployes() {
    const [isClient, setIsClient] = useState(false)
    const [users,setUsers] = useState([{nom:"",prenom:"",username:"",email:"",telephone:"",role:"",poste:""}])
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
            <Link href="/admin/utilisateurs/nouvelemploye" >
            <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'  >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
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
            const result = await getEmployes();
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
            <h1 className='font-bold text-gris text-center text-2xl'>Liste des employés</h1>
           
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