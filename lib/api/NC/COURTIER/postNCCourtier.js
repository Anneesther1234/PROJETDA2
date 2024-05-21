'use server'

import { cookies } from "next/headers"


export default async function  postNCCourtier( formData ){

    const Trimestre = formData.get("Trimestre").toString()
    const annee = formData.get("annee").toString()
    const Abidjan = formData.get("Abidjan").toString()
    const Interieur = formData.get("Interieur").toString()
    const SAP = formData.get("SAP").toString()
    const CCVTDA = formData.get("CCVTDA").toString()
    const Hommes = formData.get("Hommes").toString()
    const Femmes = formData.get("Femmes").toString()
    const EP = formData.get("EP").toString()
    const CE = formData.get("CE").toString()
    const TCFG = formData.get("TCFG").toString()
    const AC = formData.get("AC").toString()
    const MFG = formData.get("MFG").toString()
    const MH = formData.get("MH").toString()

    try{
        // console.log('poste :'+ formData.get("role"))
        console.log("yes");
    if(Trimestre !== '' && annee !== '' && Abidjan !== '' && Interieur !== '' && SAP !== '' && CCVTDA !== '' && Hommes !== '' && Femmes !== '' && EP !== '' && CE !== '' && TCFG !== '' && AC !== '' && MFG !== '' && MH && cookies().has("token")){
            const data = {
                "annee": annee,
                "trimestre": Trimestre,
                "nombre_hommes": Hommes,
                "nombre_femmes": Femmes,
                // "bureaux_secondaire": 2,
                "abidjan": Abidjan,
                "interieur": Interieur,
                "societe_partenaire": SAP,
                "compte_courant": CCVTDA,
                "emissions_primes": EP,
                "commissions_encaissees": CE,
                // Manque autre charge AC
                "total_charge_ou_frais_generaux": TCFG,
                "montant_fonds_geres": MFG,
                "montant_honoraires": MH,
               "statut": {
                  "idStatut": 1
                }
              }

            console.log(JSON.stringify(data));
            const res = await fetch("http://localhost:9191/api/COURTIER/creer", {
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