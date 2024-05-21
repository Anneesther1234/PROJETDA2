'use server'

import { cookies } from "next/headers"


export default async function  postNCIARD( formData ){

    const trimestre = formData.get("trimestre").toString()
    const annee = formData.get("annee").toString()
    const NCA = formData.get("NCA").toString()
    const Maladie1 = formData.get("Maladie1").toString()
    const AC1 = formData.get("AC1").toString()
    const RCA1 = formData.get("RCA1").toString()
    const ARA1 = formData.get("ARA1").toString()
    const IADB1 = formData.get("IADB1").toString()
    const Credit1 = formData.get("Credit1").toString()
    const Caution1 = formData.get("Caution1").toString()
    const AIM1 = formData.get("AIM1").toString()
    const M1 = formData.get("M1").toString()
    const AI1 = formData.get("AI1").toString()
    const ARDD1 = formData.get("ARDD1").toString()
    const AD = formData.get("AD").toString()
    const PR = formData.get("PR").toString()
    const SAP = formData.get("SAP").toString()
    const Maladie2 = formData.get("Maladie2").toString()
    const AC2 = formData.get("AC2").toString()
    const RCA2 = formData.get("RCA2").toString()
    const ARA2 = formData.get("ARA2").toString()
    const IADB2 = formData.get("IADB2").toString()
    const Credit2 = formData.get("Credit2").toString()
    const Caution2 = formData.get("Caution2").toString()
    const AIM2 = formData.get("AIM2").toString()
    const M2 = formData.get("M2").toString()
    const AI2 = formData.get("AI2").toString()
    const ARDD2 = formData.get("ARDD2").toString()
    const SP = formData.get("SP").toString()
    const RE = formData.get("RE").toString()
    const REE = formData.get("REE").toString()
    const PC = formData.get("PC").toString()
    const CSC = formData.get("CSC").toString()
    const PAI = formData.get("PAI").toString()
    const CSAI = formData.get("CSAI").toString()
    const AC = formData.get("AC").toString()
    const FP = formData.get("FP").toString()
    const Hommes = formData.get("Hommes").toString()
    const Femmes = formData.get("Femmes").toString()
    // const EP = formData.get("EP").toString()
    const PI = formData.get("PI").toString()
    const EPE = formData.get("EPE").toString()

    try{
        // console.log('poste :'+ formData.get("role"))
        console.log("yes");
    if(trimestre !== '' && annee !== '' && NCA !== '' && Maladie1 !== '' && AC1 !== '' && RCA1 !== '' && ARA1 !== '' && IADB1 !== '' && Credit1 !== '' && Caution1 !== '' && AIM1 !== '' && M1 !== '' && AI1 !== '' && ARDD1 !== '' && AD !== ''&& PR !== '' && SAP !== '' && Maladie2 !== '' && AC2 !== '' && RCA2 !== '' && ARA2 !== '' && IADB2 !== '' && Credit2 !== '' && Caution2 !== '' && AIM2 !== '' && M2 !== '' && AI2 !== ''  && ARDD2 !== '' && SP !== '' && RE !== '' && REE !== '' && PC !== '' && CSC !== ''&& PAI !== '' && CSAI !== '' && AC !== '' && FP !== '' && Hommes !== '' && Femmes !== '' && PI !== '' && EPE !== '' && cookies().has("token")){
            const data = {
                "annee": annee,
                "trimestre": trimestre,
                "nombre_de_contrats_assurance": parseInt(NCA),
                "maladie_prime_emise": parseInt(Maladie1),
                "accidents_corporels_prime_emise": parseInt(AC1),
                "rc_automobile_prime_emise": parseInt(RCA1),
                "autres_risques_automobiles_prime_emise": parseInt(ARA1),
                "incendie_et_autres_dommages_aux_biens_prime_emise": parseInt(IADB1),
                "credit_prime_emise": parseInt(Credit1),
                "caution_prime_emise": parseInt(Caution1),
                "assurance_importation_des_marchandises_prime_emise": parseInt(AIM1),
                "microassurance_prime_emise": parseInt(M1),
                "assurances_indicielles_prime_emise": parseInt(AI1),
                "autres_risques_dommages_prime_emise": parseInt(ARDD1),
                "acceptations_dommages": parseInt(AD),
                "prime_cedee_en_reassurance": parseInt(PR),
                "sinistre_a_payees": parseInt(SAP),
                "maladie_stock": parseInt(Maladie2),
                "accidents_corporels_stock": parseInt(AC2),
                "rc_automobile_stock": parseInt(RCA2),
                "autres_risques_automobiles_stock": parseInt(ARA2),
                "incendie_et_autres_dommages_aux_biens_stock": parseInt(IADB2),
                "credit_stock": parseInt(Credit2),
                "caution_stock": parseInt(Caution2),
                "assurance_importation_des_marchandises_stock": parseInt(AIM2),
                "microassurance_stock": parseInt(M2),
                "assurances_indicielles_stock": parseInt(AI2),
                "autres_risques_dommages_stock": parseInt(ARDD2),
                "dont_sisnistre_payee": parseInt(SP),
                "recours_encaisser": parseInt(RE),
                "recours_effectivement_encaisser": parseInt(REE),
                "production_des_courtiers": parseInt(PC),
                "commissions_servies_aux_courtiers": parseInt(CSC),
                "production_autres_intermediaires": parseInt(PAI),
                "commissions_servies_aux_autres_intermediaires": parseInt(CSAI),
                "prime_impayee": parseInt(PI),
                "emprunts_public_echus": parseInt(EPE),
                "frais_du_personnel": parseInt(FP),
                "nombre_hommes": Hommes,
                "nombre_femmes": Femmes,
                // "effectif_du_personnel": parseInt(EP),
                "autres_charges": parseInt(AC),
                "statut": {
                  "idStatut": 1
                }
                
              }
            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/IARD/creer", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 
                    "Authorization": "Bearer "+cookies().get("token")["value"],
                    "Content-Type": "application/json"
                 }
            }).catch((e)=>{
                console.log(e);
            });
            if(res.ok){
               return true;
            }else{
                return false ;
            }

        }
    }catch(e){
        console.log("Erreur au niveau de l'envoie du formulaire de creation de la note de conjoncture: "+e)
        return false ;
    }
}