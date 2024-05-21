'use client'

import HomeItems from '../../components/ui/HomeItems'

export default function DAVieIARD ()  {
    return (
        <div className=''>
            <h1 className='font-bold text-gris text-2xl text-center m-3'> Dossiers annuels VIE et IARD</h1>
            <div className='w-full  grid grid-cols-5 gap-[2.8%] justify-center items-center  px-[6%]'>
                <HomeItems src="/financial-news.png" label="Bilan" href="#"></HomeItems>
                <HomeItems src="/compte-epargne.png" label="CEG" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="CGPP" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="RIA" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C1" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C4" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C5" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C9" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C10a" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C10b" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C10c" href="#"></HomeItems>
                <HomeItems src="/dossier.png" label="C10d" href="#"></HomeItems>
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

