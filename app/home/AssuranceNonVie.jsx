
function AssuranceNonVie(num){
    return (
        <div  className="w-full h-[300px] flex shadow-md">
            {/* Text */}
            <div className="w-5/12 flex items-center">
              <h1 className='text-gris text-lg text-center'>L'assurance vie est un contrat financier qui garantit le versement d'une somme d'argent à des bénéficiaires désignés en cas de décès de l'assuré. En échange du paiement de primes, l'assurance vie offre une sécurité financière aux proches et peut également servir d'instrument d'investissement ou de planification successorale. Elle permet de protéger les intérêts financiers des bénéficiaires et de planifier la transmission du patrimoine.</h1>
            </div>
            {/* Titre */}
            <div id="AssuranceNonVieTitre" className="flex w-7/12 bg-vert items-center justify-end px-[10%]">
                <h1 className="text-[50px] text-white  font-bold">Assurance vie</h1>
            </div>
        </div>
    )
}

export default AssuranceNonVie