"use client"
import HomeItems from "../components/ui/HomeItems"
export default function UserAdmin(){
    return(
        <>   
            
            <h1 className='font-bold text-gris text-2xl text-center  mt-10  ' > Gestion des utilisateurs</h1>
       
                <div className='w-full grid grid-cols-3 gap-14 justify-center items-center pt-[5%] px-[6%]'>
                    <HomeItems src="/avatar.png" label="Creer employe DA" href="/admin/utilisateurs/nouvelemploye"></HomeItems>
                    <HomeItems src="/insurance-company.png" label="Creer Société Assurance" href="/admin/utilisateurs/nouvelleSociete"></HomeItems>
                    <HomeItems src="/240_F_537553879_u8DFLKdVa3eCsr52vQUPbHcNGmdPM7tx.jpg" label="Creer membre Assurance" href="/admin/utilisateurs/nouveauMembre"></HomeItems>
                    <HomeItems src="/liste-des-utilisateurs.png" label="Liste employés DA" href="/admin/utilisateurs/listeUtilisateurs" ></HomeItems>
                    <HomeItems src="/240_F_657152527_oNDscTDYps93RKLPVm22rUbifb3j5azE.jpg" label="Liste sociétés Assurance" href={"/admin/utilisateurs/listeSocietes"} ></HomeItems>
                    <HomeItems src="/recruitment.png" label="Liste membre Assurance" href={"/admin/utilisateurs/listeMembres"} ></HomeItems>
                    <HomeItems src="/employment.png" label="Modifier employe DA" href="/admin/utilisateurs/modifierEmployes" ></HomeItems>
                    <HomeItems src="/list.png" label="Modifier sociéte Assurance" href="/admin/utilisateurs/modifierSociete" ></HomeItems>
                    <HomeItems src="/modifier.png" label="Modifier membre Assurance" href="/admin/utilisateurs/modifierMembre" ></HomeItems>
                  
                   
                </div>
                </>
    )
}


