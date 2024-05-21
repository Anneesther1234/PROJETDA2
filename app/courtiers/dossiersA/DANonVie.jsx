'use client'

import HomeItems from '../../components/ui/HomeItems'

export default function DANonvie ()  {
    return (
        <div className='w-full h-full'>
        <h1 className=' text-gris text-2xl text-center font-bold m-5'> Dossiers annuels IARD</h1>
        <div className='w-full grid grid-cols-4 gap-[8%] justify-center items-center  px-[6%] '>
            <HomeItems src="/financial-news.png" label="Bilan" href="#"></HomeItems>
            <HomeItems src="/compte-epargne.png" label="CEG" href="/compagnies/CEG"></HomeItems>
            <HomeItems src="/dossier.png" label="CGPP" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="RIA" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C1"  title="C1 Compte d'exploitation générale par catégories" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C4" title="C4 Engagements réglementés et actifs représentant ces engagements " href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C5" title="" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C9" title ="" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C10a" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C10b" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C10c" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C10d" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="C11" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="RA1" href="#"></HomeItems>
            <HomeItems src="/dossier.png" label="RA2" href="#"></HomeItems>

        </div>
    
    </div>
    );
}

