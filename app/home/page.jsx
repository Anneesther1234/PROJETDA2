import Image from "next/image";
import AssuranceVie from "./AssuranceVie";
import AssuranceNonVie from "./AssuranceNonVie";
import SliderHome from "./SliderHome";

export default function Home() {
  return (
      <div className='w-full '>
      {/* Slider */}
      <SliderHome></SliderHome>
      {/* text */}
      <h1 className='text-gris m-16 text-lg text-center'>En tant qu'organisme de contrôle dédié à la transparence et à l'intégrité, nous veillons à ce que chaque acteur de l'industrie de l'assurance respecte les normes les plus élevées. Votre confiance est notre priorité, c'est pourquoi nous travaillons inlassablement pour assurer une régulation rigoureuse et une protection optimale des consommateurs</h1>
      {/* Assurance définition */}
      <div className='flex-col items-center p-16 w-full'>
          <h1 className='text-orange font-bold text-[40px] text-center underline '>Assurance</h1>
          <div className='w-full p-5 rounded-lg border-2 border-orange mt-7'>
              <h1 className='text-gris text-lg text-center'>L'assurance est un mécanisme financier où une partie, appelée l'assureur, accepte de fournir une compensation financière à une autre partie, l'assuré, en échange du paiement de primes régulières. Cette transaction vise à protéger l'assuré contre des pertes financières potentielles liées à des événements incertains, tels que des accidents, des maladies ou des dommages matériels.</h1>
          </div>
      </div>
      {/* Type d'assurance */}
      <div className='p-16 flex-col space-y-14'>
        <h1 className='text-orange font-bold text-[40px] text-center underline '>Assurance</h1>
        <AssuranceVie></AssuranceVie>
        <AssuranceNonVie></AssuranceNonVie>
      </div>

    </div>
  );
}
