"use client"

import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import { useState,useMemo, useEffect } from 'react';
import Image from 'next/image';

const columns = [
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'Email',
		selector: row => row.email,
		sortable: true,
	},
	{
		name: 'Address',
		selector: row => row.address,
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


const createUser = () => ({
	id: faker.string.uuid(),
	name: faker.internet.userName(),
	email: faker.internet.email(),
	address: faker.location.streetAddress(),
	bio: faker.lorem.sentence(),
	image: faker.image.avatar(),
});

const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);







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
                className='border p-2 rounded-l '
            />
            <button type="button" onClick={onClear} className='bg-vert w-10 rounded-r h-full text-white'>
                X
            </button>
        </div>
    );
}







export default function ManageUsers() {
    const [isClient, setIsClient] = useState(false)
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [fakeUsers, setFakeUsers] = useState(createUsers(20)) ;
    const filteredItems = fakeUsers.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <div className='flex w-full justify-between'> 
                <button type='button' className='text-xl text-white px-5 py-1 bg-[#009440] rounded-md font-bold'>
                    <Image src="/add-friend.jpg" loading='lazy' width={30} height={30} alt="Add User"/>
                </button>
                <div>
                    <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
                </div>
            </div>

           
        );
    }, [filterText, resetPaginationToggle]);

 
    useEffect(() => {
        setIsClient(true)
    }, [filterText, resetPaginationToggle])

    return ( 
        <>
           <div className='pt-3'>
            <h1 className='font-bold text-gris text-center text-2xl'>Gestion des utilisateurs</h1>
           
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