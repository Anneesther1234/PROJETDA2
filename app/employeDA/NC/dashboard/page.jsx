"use client"
import Menu from './Menu'
import Vie from './Vie'
import Iard from './Iard'
import Courtiers from './Courtiers'
import { useState } from 'react';

export default function Dashboard(){
      const [menu,setMenu] = useState({
        style : "bg-blue-600 text-white",
        visible : true
      })
      const [vie,setVie] = useState({
        style : "bg-white",
        visible : false
      })
      const [iard,setIard] = useState({
        style : "bg-white",
        visible : false
      })
      const [courtiers,setCourtiers] = useState({
        style : "bg-white",
        visible : false
      })
      const reset = () =>{
        setMenu({style : "bg-white",visible : false})
        setVie({style : "bg-white",visible : false})
        setIard({style : "bg-white",visible : false})
        setCourtiers({style : "bg-white",visible : false})
      }
    return(
        <div className='w-full h-full'>
        <div className='h-full w-full flex-col'>
          <div className='h-[6%] min-[6%] border bg-gray-200'>
            <div className='flex h-full w-[50%] space-x-[5%] p-1 '>
              <button className={'px-6 rounded-md shadow-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ' + menu.style} onClick={()=>{ reset();setMenu({style : "bg-blue-600 text-white",visible : true})}}>Menu</button>
              <button className={'px-6 rounded-md shadow-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ' + vie.style} onClick={()=>{ reset();setVie({style : "bg-blue-600 text-white",visible : true})}}>VIE</button>
              <button className={'px-6 rounded-md shadow-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ' + iard.style} onClick={()=>{ reset();setIard({style : "bg-blue-600 text-white",visible : true})}}>IARD</button>
              <button className={'px-6 rounded-md shadow-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ' + courtiers.style} onClick={()=>{ reset();setCourtiers({style : "bg-blue-600 text-white",visible : true})}}>COURTIERS</button>
            </div>
          </div>
          
          {menu.visible && <Menu></Menu>}
          {vie.visible && <Vie></Vie>}
          {iard.visible && <Iard></Iard>}
          {courtiers.visible && <Courtiers></Courtiers>}
        </div>
   </div>
    )
}