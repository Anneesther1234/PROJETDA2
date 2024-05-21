"use client"

import Image from "next/image";
import React from "react";
import DataTable from "react-data-table-component";
import Button from "./Button";


export default function TableRapportNC(){


    const columns = [

        {
            name: <p className="text-bold text-[15px] ">Rapport d'activité</p> ,
            selector: row => row.id,
            sortable: true,
		reorder: true,
            
        },
        {
            name: <p className="text-bold text-[15px]">Détails</p>,
            selector: row => row.det,
            sortable: true,
            reorder: true,
            
        },
      
    ];


    const data = [
        {

          id: <div>   <p className="text-[15px]"> CEG_WAFA_VIE_2020.xlsx</p></div>  ,
          etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
          det: <Button></Button>

      },


      {

        id: <p className="text-[15px]"> BILAN_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det: <Button></Button>

    },

    {

        id: <p className="text-[15px]"> C4_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det:  <Button></Button>

    },

    {

        id: <p className="text-[15px]"> C1_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det: <Button></Button>

    },
    {

        id: <p className="text-[15px]"> C11_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det: <Button></Button>

    },

    {

        id: <p className="text-[15px]"> C20_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det: <Button></Button>

    },

    {

        id: <p className="text-[15px]"> CGPP_WAFA_VIE_2020.xlsx</p> ,
        etat: <div className="border-2 py-1 px-6 bg-green-500 hover:bg-green-700 rounded " type="button"> <p className=" text-center px-[10%] font-bold  text-white text-[15px]"> Validée</p></div>,
        det: <Button></Button>  

    },
   
      
  ]
    
    return (
    <>
        <h1 className="text-[25px] my-10 text-black font-bold italic text-center">Liste des rapports d'activité</h1>      

        <div className="flex justify-center w-full ">
            <div className="w-1/2 shadow-md mx-5">
                <DataTable columns={columns} data={data}/>
            </div>
        </div>
    </>

    );
}