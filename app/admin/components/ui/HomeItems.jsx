'use client'

import Image from "next/image";
import Link from "next/link";


export default function HomeItems(props){
    
    return (
        <Link className='flex-col w-full h-full justify-center items-start px-5' href={props.href} >
            <div className='w-full h-full flex justify-center items-center' >
                <Image src={props.src} alt="NC" width={70} height={70} className="hover:shadow-lg"/>
            </div>
            <h1 className='text-gris text-center text-xl'>{props.label}</h1>
        </Link>
    );
}