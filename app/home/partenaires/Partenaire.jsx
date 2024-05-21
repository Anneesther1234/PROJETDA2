'use client'

import Image from "next/image"


export default function Partenaire(props){
    const src = props.source 
    const alt = props.altlogo

    return(
        <div className="w-full h-full flex items-center justify-start" style={{ maxWidth : 90 ,maxHeight :40 }}>
            <Image src={src} alt={alt} width={120} height={40} style={{ maxWidth : 90 ,maxHeight :40 }}/>
        </div>
    )
}
