"use client"
import HomeItems from "./../components/ui/HomeItems"
export default function UserAdmin(){
    return(
        <>  
                <div className='w-full grid grid-cols-3 gap-12 justify-center items-center pt-[5%] px-[6%]'>
                    <HomeItems src="/dossier.png" label="Nouvel employe" href="employeDA/dossiersDAVIEIARD"></HomeItems>
                    <HomeItems src="/dossier.png" label="Nouvelle compagnie" href="#"></HomeItems>
                    <HomeItems src="/dossier.png" label="Liste  utilisateur" href="#" ></HomeItems>

                    <HomeItems src="/courrier-ouvert.png" label="Modifier employe" href="#" ></HomeItems>
                    <HomeItems src="/courrier-ouvert.png" label="Modifier compagnie" href="#" ></HomeItems>
                    <HomeItems src="/courrier-ouvert.png" label="Liste employe" href="#" ></HomeItems>

                    <HomeItems src="/courrier-ouvert.png" label="Liste compagnie" href="#" ></HomeItems>
                    <HomeItems src="/courrier-ouvert.png" label="Supprimer employe" href="#" ></HomeItems>
                    <HomeItems src="/courrier-ouvert.png" label="Supprimer compagnie" href="#" ></HomeItems>
                </div>
                </>
    )
}


