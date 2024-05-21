'use client'
import Image from "next/image";


export default function Apropos(){
    return(
        <>
       <div id="Hist">
        <div id="ban-hist" className="flex bg-orange px-[10%] italic">
            <h1 className="text-[35px]  text-white font-bold italic">Historique</h1>
        </div>
        <div id="para" className=" flex my-4 container mx-auto ">
        <di v>
        <p className="whitespace-normal text-[18px] italic leading-8 ">L'organisme de contrôle des assurances a été créé par l'arrêté n° 1145/FAEP du 23 juin 1962, relevant du Ministère des Affaires Économiques et Financières. Monsieur ABOU Doumbia a été le premier chef de ce service jusqu'en 1965, suivi par Monsieur MOBIO Becket Victor jusqu'en 1968. Par la suite, l'arrêté n° 8840/AEF/CAB du 27 décembre 1968 a transformé le service en une Direction Centrale, directement rattachée au Cabinet du Ministre.

    Monsieur MOBIO Becket Victor a été promu Directeur des Assurances et a occupé ce poste jusqu'à son décès en 1981. En 1978, la Direction des Assurances a été rattachée à la Direction Générale de l'Économie. De 1981 à 1988, la Direction des Assurances a été rattachée au Cabinet du Ministre, sans directeur attitré.

    En 1988, Monsieur KIPRE Digbeu a été nommé Directeur des Assurances. En 1991, la Direction des Assurances a élargi ses compétences au secteur de la Bourse et a été renommée Direction des Assurances et de la Bourse, dirigée par Monsieur KIPRE Digbeu. En 1992, elle est devenue une Direction Centrale de la Direction Générale du Trésor et de la Comptabilité Publique.

    En 1993, Monsieur KOUAME N'guessan Jean Baptiste a succédé à Monsieur KIPRE Digbeu en tant que Directeur des Assurances et de la Bourse. En 1998, l'organisme est redevenu la Direction des Assurances, relevant du Directeur Général du Trésor et de la Comptabilité Publique.

    En 2008, Monsieur BEDI Gnagne a été nommé Directeur des Assurances, remplacé en 2013 par Monsieur DIARASSOUBA Karim. En 2021, Monsieur ISSOUF Traoé a pris la direction des Assurances, remplaçant Monsieur DIARASSOUBA Karim, promu Directeur Général de la CICA-RE.</p>
        </di>
    </div>
     </div>

     <div id="nmiss" className="flex bg-orange px-[10%]">
     <h1 className="text-[35px]  text-white font-bold italic">Nos Missions</h1>

     </div>
     <div id="para1" className=" flex my-4 container mx-auto ">
        <div>
        <p  className="whitespace-normal italic text-[18px] leading-8">  La Direction des Assurances est responsable de la conception de la politique de l'État en matière d'assurance, de micro-assurance et de réassurance. Ses attributions comprennent la conception de textes législatifs et réglementaires, l'étude des demandes d'agrément des entreprises d'assurance et des intermédiaires, le contrôle juridique, financier et technique des acteurs du secteur conformément au code CIMA (Conférence Interafricaine des Marchés d'Assurances), la surveillance du marché des assurances et de la réassurance, la liaison avec les institutions étrangères et internationales, et la collecte et la diffusion des statistiques du marché des assurances.

La Direction des Assurances est organisée en trois sous-directions : le Contrôle des sociétés d'Assurances, le Contrôle des Intermédiaires d’Assurances, et les Agréments, Études et Statistiques.

Elle est dirigée par un Directeur nommé par décret.</p>
        </div>
    </div>


    <div id="orga" className="flex bg-orange px-[10%]">
     <h1 className="text-[35px]  text-white font-bold italic">Organigramme</h1>

     </div>
     <div className="my-6 ml-[25%]">
     <Image  loading="lazy" src='/organigramme_2017.jpg' alt='image2' height={900} width={900} />
     </div>

     
        
        </>
    )
}