'use client'

import HomeItems from '../../components/ui/HomeItems'

export default function DAVie ()  {
    return (
        <div className='w-full'>
            <h1 className='font-medium text-gris text-2xl text-center m-3'> Dossiers annuels VIE</h1>
            <div className='w-full h-fit grid grid-cols-4 gap-[4%] justify-center items-center  px-[6%]'>
                <HomeItems src="/financial-news.png" label="Bilan" href="#"></HomeItems>
                <HomeItems src="/compte-epargne.png" label="CEG" href="/compagnies/CEG"></HomeItems>
                <HomeItems src="/dossier.png" label="CGPP" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="RIA" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C1" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C4" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C5" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C9" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C11" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C20" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C21" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C25" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C25 BIS Tableau B" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C25 BIS Tableau A" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C26" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="RA1" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="RA2" href="#"></HomeItems>

            </div>
        </div>
    );
}

