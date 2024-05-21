import Image from "next/image";
export default function Button({}){
    return (
        <>
            <button type="button"> <Image className="h-8 w-8 " loading="lazy" src="/voir.jpg" alt="image description" title="Voir le fichier" height={32} width={32} /></button>
        </>
    )
}