'use server'

import { cookies } from "next/headers"


export default async function  postNCVIE( formData ){

    const trimestre = formData.get("trimestre").toString() 
    const annee = formData.get("annee").toString()
    const NCA = formData.get("NCA").toString()
    const CCV1 = formData.get("CCV1").toString() 
    const CCD1 = formData.get("CCD1").toString() 
    const CM1 = formData.get("CM1").toString() 
    const CE1 = formData.get("CE1").toString() 
    const C1 = formData.get("C1").toString() 
    const CCV2 = formData.get("CCV2").toString() 
    const CCD2 = formData.get("CCD2").toString() 
    const CM2 = formData.get("CM2").toString() 
    const CE2 = formData.get("CE2").toString() 
    const C2 = formData.get("C2").toString() 
    const MV1 = formData.get("MV1").toString() 
    const AC1 = formData.get("AC1").toString() 
    const PCR = formData.get("PCR").toString() 
    const PM = formData.get("PM").toString() 
    const SSCE = formData.get("SSCE").toString() 
    const CCV3 = formData.get("CCV3").toString() 
    const CCD3 = formData.get("CCD3").toString() 
    const CM3 = formData.get("CM3").toString() 
    const CE3 = formData.get("CE3").toString() 
    const C3 = formData.get("C3").toString() 
    const CCV4 = formData.get("CCV4").toString() 
    const CCD4 = formData.get("CCD4").toString() 
    const CM4 = formData.get("CM4").toString() 
    const CE4 = formData.get("CE4").toString() 
    const C4 = formData.get("C4").toString() 
    const MV4 = formData.get("MV4").toString() 
    const PC = formData.get("PC").toString() 
    const CSC = formData.get("CSC").toString() 
    const PAI = formData.get("PAI").toString() 
    const CSAI = formData.get("CSAI").toString() 
    const AC = formData.get("AC").toString() 
    const FP = formData.get("FP").toString() 
    const Hommes = formData.get("Hommes").toString()
    const Femmes = formData.get("Femmes").toString()
    //const EP = formData.get("EP").toString() 
    const PI = formData.get("PI").toString() 
    const EPE = formData.get("EPE").toString() 
    try{
        // console.log('poste :'+ formData.get("role"))
    if(trimestre !== '' && annee !== '' && NCA !== '' && CCV1 !== '' && CCD1 !== '' && CM1 !== '' && CE1 !== '' && C1 !== '' && CCV2 !== '' && CCD2 !== '' && CM2 !== '' && CE2 !== '' && C2 !== '' && MV1 !== '' && AC1 !== '' && PCR !== '' && PM !== '' && SSCE !== '' && CCV3 !== '' && CCD3 !== '' && CM3 !== '' && CE3 !== '' && C3 !== '' && CCV4 !== '' && CCD4 !== '' && CM4 !== '' && CE4 !== '' && C4 !== '' && MV4 !== '' && PC !== '' && CSC !== '' && PAI !== '' && CSAI !== '' && AC !== '' && FP !== '' && Hommes !== '' && Femmes !== '' && PI !== '' && EPE !== '' && cookies().has("token")){
            const data = {
                "annee": annee,
                "trimestre": trimestre,
                "nombre_contrat_assurance": parseInt(NCA),
                "contrats_cas_vie_prime_emise": parseInt(CCV1),
                "contrats_cas_deces_prime_emise": parseInt(CCD1),
                "contrats_mixtes_prime_emise": parseInt(CM1),
                "capitalisation_et_epargne_prime_emise": parseInt(CE1),
                "complementaire_prime_emise": parseInt(C1),
                "contrats_cas_vie_collective_prime_emise": parseInt(CCV2),
                "contrats_cas_deces_collective_prime_emise": parseInt(CCD2),
                "contrats_mixtes_collective_prime_emise": parseInt(CM2),
                "capitalisation_et_epargne_collective_prime_emise": parseInt(CE2),
                "complementaire_collective_prime_emise": parseInt(C2),
                "microassurance_vie_prime_emise": parseInt(MV1),
                "acceptations_vie": parseInt(AC1),
                "primes_cedees_en_reassurance": parseInt(PCR),
                "provisions_mathematiques": parseInt(PM),
                "stock_de_sinistres_et_capitaux_echus": parseInt(SSCE),
                "contrats_en_cas_de_vie_individuelles_prestation_vie": parseInt(CCV3),
                "contrats_en_cas_de_deces_individuelles_prestation_vie": parseInt(CCD3),
                "contrats_mixtes_individuelles_prestation_vie": parseInt(CM3),
                "capitalisation_et_epargne_individuelles_prestation_vie": parseInt(CE3),
                "complementaires_individuelles_prestation_vie": parseInt(C3),
                "contrats_en_cas_de_vie_collectives_prestation_vie": parseInt(CCV4),
                "contrats_en_cas_de_deces_collectives_prestation_vie": parseInt(CCD4),
                "contrats_mixtes_collectives_prestation_vie": parseInt(CM4),
                "capitalisation_et_epargne_collectives_prestation_vie": parseInt(CE4),
                "complementaires_collectives_prestation_vie": parseInt(C4),
                "microassurance_vie_prestation_vie": parseInt(MV4),
                "production_des_courtiers": parseInt(PC),
                "commissions_servies_courtiers": parseInt(CSC),
                "production_des_autres_intermediaires": parseInt(PAI),
                "commissions_servies_autres_intermediaires": parseInt(CSAI),
                "autres_charges": parseInt(AC),
                "dont_frais_du_personnel": parseInt(FP),
                "nombre_hommes":parseInt(Hommes),
                "nombre_femmes":parseInt(Femmes),
                // "effectif_du_personnel": parseInt(EP),
                "prime_impayee": parseInt(PI),
                "emprunts_publics_echus": parseInt(EPE),
                "statut": {
                    "idStatut": 1
                }
                
                
            }
            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/VIE/creer", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 
                    "Authorization": "Bearer "+cookies().get("token")["value"],
                    "Content-Type": "application/json"
                 }
            }).catch((e)=>{
                console.log(e);
            });
            console.log(res.status);
            if(res.ok){
               return true;
            }else{
                return false ;
            }

        }
    }catch(e){
        console.log("Erreur au niveau de l'envoie du formulaire de creation de l'employe DA: "+e)
        return false ;
    }
}