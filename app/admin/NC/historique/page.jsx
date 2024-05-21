"use client"

import TableNc from './TableNC'


export default function HistoriqueNC(){
    
    return(
        <>
            <h1 className="text-[25px] my-10 text-black font-bold italic text-center">Liste des notes de conjectures soumises</h1>   
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <TableNc/>

                    </div>
                </div>

            
            </div>
        </>
    )
}